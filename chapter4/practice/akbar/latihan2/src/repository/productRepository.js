const products = [
  {
    name: "laptop macbook",
    price: 20000,
    user_email: "hanvir@gmail.com",
  },
  {
    name: "iPhone Super max",
    price: 5000,
    user_email: "adit@gmail.com",
  },
];

class ProductRepository {
  constructor() {
    this.products = products;
  }

  getAll() {
    return this.products;
  }

  add(products) {
    this.products.push(products);
  }
}

export default ProductRepository;
