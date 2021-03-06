let pool = require('../../database/connection');

module.exports= class StoreManager {
    static getorders() {
        return new Promise((resolve, reject) => {
            pool.query("CALL view_orders('sapumal@gmail.com')",
                (error, results, fields) => {
                    if (error) {
                        reject(error);
                    };
                    resolve(results);
                }
            )
        })
      
    }

    static add_to_cart(request){
        return new Promise((resolve,reject) =>{
            pool.query("CALL add_to_cart(?,?)",
            [
                
                request.body.prod,
                request.body.quantity
            ],
            (error, results, fields) => {
                if (error) {
                    reject(error);
                };
                resolve(console.log('added to cart'));
            }
        )

        })
        
    }
    static getCart(request) {
        return new Promise((resolve, reject) => {
            pool.query("CALL getcart()",
                // [
                //     // request.userEmail
                // ],
                (error, results, fields) => {
                    if (error) {
                        reject(error);
                    };
                    resolve(results);
                }
            )
        })
      
    }
    static getTotalPrice(request) {
        return new Promise((resolve, reject) => {
            pool.query("CALL totalPrice()",
                // [
                //     // request.userEmail,
                // ],
                (error, results, fields) => {
                    if (error) {
                        reject(error);
                    };
                    resolve(results);
                }
            )
        })
      
    }
    static removeCartItem(request) {
        return new Promise((resolve, reject) => {
            pool.query("CALL removeCartItem(?)",
                [
                 
                    request.body.prod
                ],
                (error, results, fields) => {
                    if (error) {
                        reject(error);
                    };
                    resolve("removed cart item");
                }
            )
        })
      
    }
    

}