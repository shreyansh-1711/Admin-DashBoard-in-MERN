import Product from "../models/Product";
import ProductStat from "../models/ProductStat";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        const productsWithStats = await Promise.all(
            products.map(async (product) => {
                const stat = ProductStat.find({
                    productId: product._id
                })
                return {
                    ...product._doc, //array of products
                    stat,
                    // Combining all the information in one big object 
                };
            })
        );

        res.status(200).json(productsWithStats);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};