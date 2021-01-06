import bcrypt from 'bcryptjs';

const data = {
    users:[
        {
            name:'Basir',
            email:'admin@admin.com',
            password:bcrypt.hashSync('1234', 8),
            isAdmin:true
        },
        {
            name:'John',
            email:'user@user.com',
            password:bcrypt.hashSync('1234', 8),
            isAdmin:false
        }
    ],
    products:[
        {
            name:'Nike Slim Shirt',
            category:'Shirts',
            image:'/images/p1.jpg',
            price:120,
            countInStock:10,
            brand:'Nike',
            rating:4.5,
            numReviews:15,
            description:'high quality product'
        },
        {
            name:'Adidas Fit Shirt',
            category:'Shirts',
            image:'/images/p2.jpg',
            price:220,
            countInStock:20,
            brand:'Adidas',
            rating:5,
            numReviews:10,
            description:'high quality product'
        },
        {
            name:'Lacoste Free Shirt',
            category:'Shirts',
            image:'/images/p3.jpg',
            price:150,
            countInStock:0,
            brand:'Lacoste',
            rating:3,
            numReviews:1,
            description:'high quality product'
        },
        {
            name:'Nike Slim Pant',
            category:'Pants',
            image:'/images/p4.jpg',
            price:110,
            countInStock:5,
            brand:'Nike',
            rating:4.7,
            numReviews:19,
            description:'high quality product'
        },
        {
            name:'Puma Slim Pant',
            category:'Pants',
            image:'/images/p5.jpg',
            price:170,
            countInStock:40,
            brand:'Puma',
            rating:3.5,
            numReviews:5,
            description:'high quality product'
        },
        {
            name:'Adidas Fit Pant',
            category:'Pant',
            image:'/images/p6.jpg',
            price:180,
            countInStock:20,
            brand:'Adidas',
            rating:1.5,
            numReviews:10,
            description:'high quality product'
        }
    ]
}

export default data;