import item1 from '../assets/item1.png'
import item2 from '../assets/item2.png'
import item3 from '../assets/item3.png'
import item4 from '../assets/item4.png';

export const  products = [
    {   
        id: "1",
        productName : 'HAVIT HV-G92 Gamepad',
        description: "PERFECT STROKE KEYS - Spherically-dished keys match the shape of your fingertips, offering satisfying feedback with every tap\nCOMFORT AND STABILITY - Type with confidence on a keyboard crafted for comfort, stability, and precision",
        price: 120,
        category: "Gaming",
        inStock: true,
        prevPrice: 160,
        discount: -40,
        starRatings: 5,
        ratings: 88,
        images: [
          {   
              color: 'red',
              productImage : item1,
              colorCode: "#DB4444"
          },
          {   
              color: 'white',
              productImage : item2,
              colorCode: "#DB4444"
          },

      ],
      sizes : ["XS", "S", "M", "L", "XL"],
      reviews: [
        {
          id: "64a65a6158b470c6e06959ee",
          userId: "6475af156bad4917456e6e1e",
          productId: "64a4ebe300900d44bb50628a",
          rating: 5,
          comment: "good",
          createdDate: "2023-07-06T06:08:33.067Z",
          user: {
            id: "6475af156bad4917456e6e1e",
            name: "Charles",
            email: "example@gmail.com",
            emailVerified: null,
            image:
              "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
            hashedPassword: null,
            createdAt: "2023-05-30T08:08:53.979Z",
            updatedAt: "2023-05-30T08:08:53.979Z",
            role: "ADMIN",
          },
        },
      ],


    },
    {   
        id: "2",
        productName : 'AK-900 Wired Keyboard',
        description: "PERFECT STROKE KEYS - Spherically-dished keys match the shape of your fingertips, offering satisfying feedback with every tap\nCOMFORT AND STABILITY - Type with confidence on a keyboard crafted for comfort, stability, and precision",
        price: 960,
        inStock: true,
        category: "Computers",
        discount: -35,
        starRatings: 4,
        ratings: 75,
        images: [
          {   
              color: 'red',
              productImage : item2,
              colorCode: "#DB4444"
          },
          {   
              color: 'white',
              productImage : item2,
              colorCode: "#DB4444"
          },
          {   
              color: 'red',
              productImage : item2,
              colorCode: "#DB4444"
          },
          {   
              color: 'white',
              productImage : item2,
              colorCode: "#DB4444"
          },

      ],
      reviews: [
        {
          id: "64a65a6158b470c6e06959ee",
          userId: "6475af156bad4917456e6e1e",
          productId: "64a4ebe300900d44bb50628a",
          rating: 5,
          comment: "good",
          createdDate: "2023-07-06T06:08:33.067Z",
          user: {
            id: "6475af156bad4917456e6e1e",
            name: "Charles",
            email: "example@gmail.com",
            emailVerified: null,
            image:
              "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
            hashedPassword: null,
            createdAt: "2023-05-30T08:08:53.979Z",
            updatedAt: "2023-05-30T08:08:53.979Z",
            role: "ADMIN",
          },
        },
      ],


    },
    {   
        id: "3",
        productName : 'IPS LCD Gaming Monitor',
        description: "PERFECT STROKE KEYS - Spherically-dished keys match the shape of your fingertips, offering satisfying feedback with every tap\nCOMFORT AND STABILITY - Type with confidence on a keyboard crafted for comfort, stability, and precision",
        price: 370,
        inStock: true,
        category: "Gaming",
        prevPrice: 400,
        discount: -30,
        starRatings: 5,
        ratings: 99,
        images: [
          {   
              color: 'red',
              productImage : item3,
              colorCode: "#DB4444"
          },
          {   
              color: 'white',
              productImage : item3,
              colorCode: "#DB4444"
          },

      ],
      reviews: [
        {
          id: "64a65a6158b470c6e06959ee",
          userId: "6475af156bad4917456e6e1e",
          productId: "64a4ebe300900d44bb50628a",
          rating: 5,
          comment: "good",
          createdDate: "2023-07-06T06:08:33.067Z",
          user: {
            id: "6475af156bad4917456e6e1e",
            name: "Charles",
            email: "example@gmail.com",
            emailVerified: null,
            image:
              "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
            hashedPassword: null,
            createdAt: "2023-05-30T08:08:53.979Z",
            updatedAt: "2023-05-30T08:08:53.979Z",
            role: "ADMIN",
          },
        },
      ],


    },
    {
        id: "4",
        productName : 'S-Series Comfort Chair',
        description: "PERFECT STROKE KEYS - Spherically-dished keys match the shape of your fingertips, offering satisfying feedback with every tap\nCOMFORT AND STABILITY - Type with confidence on a keyboard crafted for comfort, stability, and precision",
        price: 375,
        inStock: true,
        category: "Accessories",
        prevPrice: 400,
        discount: -25,
        starRatings: 4.5,
        ratings: 99,
        images: [
          {   
              color: 'red',
              productImage : item4,
              colorCode: "#DB4444"
          },
          {   
              color: 'white',
              productImage : item4,
              colorCode: "#DB4444"
          },

      ],
      reviews: [
        {
          id: "64a65a6158b470c6e06959ee",
          userId: "6475af156bad4917456e6e1e",
          productId: "64a4ebe300900d44bb50628a",
          rating: 5,
          comment: "good",
          createdDate: "2023-07-06T06:08:33.067Z",
          user: {
            id: "6475af156bad4917456e6e1e",
            name: "Charles",
            email: "example@gmail.com",
            emailVerified: null,
            image:
              "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
            hashedPassword: null,
            createdAt: "2023-05-30T08:08:53.979Z",
            updatedAt: "2023-05-30T08:08:53.979Z",
            role: "ADMIN",
          },
        },
      ],


    },
]