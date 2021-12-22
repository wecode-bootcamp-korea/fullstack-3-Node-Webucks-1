const productService = require('../services/productService') 

const getCategories = async (req, res) => {
	try {
		const productCategories = await productService.getCategories();

		return res.status(200).json({ data: productCategories });
	} catch (err) {
	  console.log(err);
      return res.status(500).json({message: err.message});
	}
}

const getDetail = async (req, res) => {
	try {
		const productDetail = await productService.getDetail();

		return res.status(200).json({ data: productDetail });
	} catch (err) {
      console.log(err);
      return res.status(500).json({message: err.message});
	}
}

const getList = async (req, res) => {
	try {
		const productList = await productService.getList();

		return res.status(200).json({ data: productList });
	} catch (err) {
      console.log(err);
      return res.status(500).json({message: err.message});
	}
}

module.exports = { getCategories, getDetail, getList }