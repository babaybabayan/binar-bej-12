class ProductService {
  constructor(productRepository, userRepository) {
    this.productRepository = productRepository;
    this.userRepository = userRepository;
  }

  getAll() {
    const products = this.productRepository.getAll();
    const users = this.userRepository.getAll();
    return products.map((product) => {
      const user = users.find((u) => u.email === product.user_email);
      if (user) {
        return {
          name: product.name,
          price: product.price,
          user: {
            name: user.name,
            email: user.email,
          },
        };
      } else {
        return {
          name: product.name,
          price: product.price,
          user: null,
        };
      }
    });
  }

  create(product) {
    this.productRepository.add(product);
    return product;
  }
}

export default ProductService;
