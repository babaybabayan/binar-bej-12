class ProductHandler {
  constructor(productService) {
    this.productService = productService;
    // Binding
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
  }
  getAll(req, res) {
    const products = this.productService.getAll();

    res.status(200).send({
      products: products,
    });
  }

  create(req, res) {
    const { name, price, email } = req.body;
    console.log(req.body);
    let statusCode = 201;
    let message = "OK";

    if (!email || !name) {
      statusCode = 400;
      message = "email or name cannot be empty";
    } else {
      const newProduct = { name, price, email };
      this.productService.create(newProduct);
      message = "Success Added";
    }
    return res.status(statusCode).json({
      statusCode: statusCode,
      message: message,
    });
  }
}

export default ProductHandler;
