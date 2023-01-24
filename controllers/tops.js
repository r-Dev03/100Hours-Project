const { get } = require('mongoose');
const { getCart } = require('./cart')
const User = require("../models/User");
const Product = require('../models/Product');

module.exports = {
  getTops: async (req, res) => {
    try{
      const tops = await Product.find({category: "Tops", size: "small"})
      if(req.user){
        const cart = await getCart(req.user._id)
        res.render('tops.ejs', {user: req.user, userCart: cart.items, tops: tops});
      }else{
        res.render('tops.ejs', {user: {name: 'Anonymous'}, userCart:[{name: "No items in cart..."}], tops: tops});
      }
    }    
    catch(err){
      console.log(err)
    }
},
};
