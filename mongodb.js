db.createCollection("customers");

db.createCollection("products");

db.createCollection("orders");

db.getCollectionNames();

db.customers.find()

db.customers.insertOne({
    _id: "fadel",
    name: "Fadel Muhammad"
});

db.orders.insertMany([
    {
        _id:3,
        name: "Indomie Goreng"
    }
])


db.customers.find({
    _id:"fadel",
})


db.orders.find({
    product_id:"3",
})


db.orders.deleteOne({
    _id:"3",
});


db.customers.find({
    _id: "fadel"
})

db.customers.find({
    name: "Fadel Muhammad" //case SENSITIVE
})

db.products.find({
    price:2000
})

db.orders.insertOne({
    _id: new ObjectId(),
    total: new NumberLong("8000"),
    items:[
        {
            product_id: 1,
            price: new NumberLong("2000"),
            quantity: new NumberLong("2")
        },
        {
            product_id: 2,
            price: new NumberLong("2000"),
            quantity: new NumberLong("2")
        }
    ]
})

db.orders.find({
    "items.product_id": 1
})

db.products.insertMany([
    {
        _id: 3,
        name: "Pop Mie Rasa Bakso",
        price: new NumberLong("2500"),
        category: "food"
    },
    {
        _id: 4,
        name: "Samsung Galaxy S9",
        price: new NumberLong("10000000"),
        category: "handphone"
    },
    {
        _id: 5,
        name: "Acer Predator XXI",
        price: new NumberLong("25000000"),
        category: "laptop"
    }
])


db.customers.find({
    _id:{
        $eq: "fadel"
    }
})

db.products.find({
    price: {
        $gt: 2000 // menbandingkan value lebih besar dari value yang lain
    }
})


db.products.find({
    price: {
        $lte: 2000 // Membandingkan value lebih besar atau sama dengan value lain

    }
})