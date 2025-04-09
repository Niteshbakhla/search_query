const Data = require("../model/data");

exports.searchCategory = async (req, res) => {
            try {
                        const { search, category } = req.query;
                        let query = {};
                        if (search) {
                                    query.clothName = { $regex: search, $options: "i" }
                        }

                        if (category) {
                                    query.category = category.toLowerCase();
                        }

                        const products = await Data.find(query);
                        return res.status(200).json({ success: true, products })
            } catch (error) {
                        return res.status(500).json({ success: false, message: "Internal Server error" })
            }
}