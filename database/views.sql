create view quant_price as select Product.unit_price*Cart.quantity as prod_price from Cart left join Product on Cart.product_id=Product.product_id;