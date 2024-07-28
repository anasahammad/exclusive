import { Button } from "../ui/button";


const Navbar = () => {

    return (
        <div>
           <Button onClick={()=> {console.log("Clicked hoise")}}>Click Me</Button> 
        </div>
    );
};

export default Navbar;