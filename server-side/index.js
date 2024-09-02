const express = require("express")
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const cors = require("cors")
const port = process.env.PORT || 5000
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
app.use(express.json())

app.use(cors())
app.use(cookieParser())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.goboxhh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const db = await client.db("mobilemart")
    const productCollection = db.collection("products")
    const usersCollection = db.collection("users")


    //auth related api
    app.post("/jwt", async(req, res)=>{
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '365d'
      } )
      res
      .cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
      })
      .send({ success: true })

    })

     // Logout
     app.get('/logout', async (req, res) => {
      try {
        res
          .clearCookie('token', {
            maxAge: 0,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
          })
          .send({ success: true })
        console.log('Logout successful')
      } catch (err) {
        res.status(500).send(err)
      }
    })


     //save user
     app.put('/user', async(req, res)=>{
      const user = req.body;
      const query = {email: user?.email}
      const isExist = await usersCollection.findOne(query)
      if(isExist) return res.send(isExist)

        const options = {upsert: true}
        const updateDoc = {
          $set: {
            ...user,
            timestamp: Date.now()
          }
        }
      const result = await usersCollection.updateOne(query, updateDoc, options)
      res.send(result)
    })

    app.get('/products', async(req, res)=>{
        const result = await productCollection.find().toArray();
        res.send(result)
    })

    //insert product in db

    app.post("/add-product", async(req, res)=>{
      const product = req.body;
      const result = await productCollection.insertOne(product)

      res.send(result)
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", async(req, res)=>{
    res.send("Exclusive server is running")
})

app.listen(port, ()=>{
    console.log(`The server is running on port ${port}`)
})