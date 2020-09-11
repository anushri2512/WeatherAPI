// import Product from '../models/product';
// //import response from '../response';
// //import _ from 'lodash';
// export default {
//     getProducts(req, res) {
//         Product.find()
//         .then(products => {
//             // let productChuncks = [];
//             // let chuckSize=3;
//             // for(let i=0;i<products.length;i+=chuckSize){
//             //     productChuncks.push(products.slice(i, i+chuckSize));
//             // }
//             res.status(200).json(products);
//         }).catch(err => {
//             res.status(500).json({
//                 message: err.message || "Something wrong while retrieving products."
//             });
//         })
//     },
//     // addProduct(req,res){
//     //     const product = new Product({
//     //         imagePath: req.body.name || "No product name", 
//     //         title: req.body.description,
//     //         description: req.body.price,
//     //         price: req.body.company
//     //     });
//     //     // Save Product in the database
//     //     product.save()
//     //     .then(data => {
//     //         res.send(data);
//     //     }).catch(err => {
//     //         res.status(500).send({
//     //             message: err.message || "Something wrong while creating the product."
//     //         });
//     //     });
//     // }
// }
"use strict";