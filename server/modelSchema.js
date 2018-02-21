mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    _id: Number,
    fname: String,
    lname: String,
    userName: String,
    email: String,
    password: String,//לבדוק
    street: String,
    city: String,
    role: String,//ו לקוח או מנהל
    //cart: [{ type: Schema.Types.ObjectId, ref: 'cart' }],
    //order: [{type: Schema.Types.ObjectId, ref: 'order'}]
});


var CategorySchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String
});


var ProductSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    categoryId: [{type: Schema.Types.ObjectId, ref: 'Category'}],
    price: Number,
    image: String
});

var CartSchema = new Schema({
    _id: Schema.Types.ObjectId,
    userId: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    dateCreated: Date,
});

var CartItemSchema = new Schema({
    _id: Schema.Types.ObjectId,
    productId: [{type: Schema.Types.ObjectId, ref: 'Product'}],
    quantity: Number,
    price: Number,
    cartId: [{type: Schema.Types.ObjectId, ref: 'Cart'}]
});

var OrderSchema = new Schema({
    _id: Schema.Types.ObjectId,
    userId: [{type: Schema.Types.ObjectId, ref: 'User'}],
    cartId: [{type: Schema.Types.ObjectId, ref: 'Cart'}],
    totalPrice: Number,
    deliveryCity: String,
    deliveryStreet: String,
    deliveryDate: Date,
    orderDate: Date,
    ccLast4Digits: Number
});

module.exports = {
    User: mongoose.model('user', UserSchema),
    Category: mongoose.model('category', CategorySchema),
    Product: mongoose.model('product', ProductSchema),
    Cart: mongoose.model('cart', CartSchema),
    CartItem: mongoose.model('cartItem', CartItemSchema),
    Order: mongoose.model('order', OrderSchema),
   
    //City: mongoose.model('city', ShopCity)

};
