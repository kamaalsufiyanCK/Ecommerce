var express = require('express');
var router = express.Router();

router.get('/:id', function (req, res) {
  const productId = req.params.id;


  const products = {
    1: {
      name: 'Adidas Running Shoes',
      price: 999,
      oldPrice: 1299,
      description: 'Lightweight running shoes with breathable mesh.',
      image: 'https://petapixel.com/assets/uploads/2017/03/product1.jpeg'
      
      
    },
    2: {
      name: 'iPhone 15 Pro',
      price: 1499,
      oldPrice: 1799,
      description: 'Premium smartphone with A17 chip.',
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1692846363993'
    },
    3: {
      name: 'Canon DSLR Camera',
      price: 799,
      oldPrice: 999,
      description: 'Professional DSLR camera for photography.',
      image: 'https://www.bhphotovideo.com/images/fb/canon_4460b004_eos_60d_dslr_camera_732048.jpg'
    },
     4:{ name: 'Bamboo Mobile Stand',
      price: 399,
      oldPrice: 799,
      description: 'Eco-friendly wooden mobile stand designed for comfortable hands-free viewing at home or office.',
      image: 'https://jingsourcing.com/wp-content/uploads/2021/03/Wooden-phone-stand01-2.jpg'
    },
    5:{ name: 'Casual Blue Canvas Shoes',
      price: 1499,
      oldPrice: 1999,
      description: 'Stylish casual canvas shoes with soft inner lining, perfect for daily wear and long walks.',
      image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg'
      
    },
    6:{ name: 'Red Classic Sneakers',
      price: 1999,
      oldPrice: 2999,
      description: 'Trendy high-top sneakers with durable build and classic design for a bold everyday look.',
      image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?cs=srgb&dl=pexels-mstudio-1240892.jpg&fm=jpg'
    },

  };

  const product = products[productId];

  if (!product) {
    return res.status(404).send('Product not found');
  }

  res.render('product-details', { product });
});

module.exports = router;
