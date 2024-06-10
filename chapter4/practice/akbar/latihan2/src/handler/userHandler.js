class UserHandler {
  constructor(userService) {
    this.userService = userService;

    // Binding
    this.getAll = this.getAll.bind(this);
    this.getByEmail = this.getByEmail.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  getAll(req, res) {
    const users = this.userService.getAll();

    res.status(200).send({
      users: users,
    });
  }

  getByEmail(req, res) {
    const email = req.body.email;
    const user = this.userService.getByEmail(email);

    let statusCode = 200;

    if (user === null) {
      statusCode = 404;
    }

    res.status(statusCode).send({
      user: user,
    });
  }

  register(req, res) {
    // TODO:
    // return 201 (created) ketika berhasil
    // gagal return 400
    const { name, email, password } = req.body;
    const user = this.userService.getByEmail(email);

    let statusCode = 200;
    let message = 'OK';

    if (!email || !password) {
      statusCode = 400;
      message = 'username or password is empty';
    }

    if (user) {
      statusCode = 400;
      message = 'user already registered';
    } else {
      // create user
      const newUser = { name, email, password };
      this.userService.add(newUser);
      message = 'Success Added';
    }

    return res.status(statusCode).json({
      statusCode: statusCode,
      message: message,
    });
  }

  login(req, res) {
    // TODO:
    // return 200 (OK) ketika berhasil
    // gagal return 400
    const { email, password } = req.body;

    const user = this.userService.getByEmail(email);

    let statusCode = 201;
    let message = 'OK';

    if (!email || !password) {
      statusCode = 400;
      message = 'incorrect username or password';
    }

    if (user) {
      message = user.password == password ? `Login Success` : 'Incorrect Password';
      statusCode = user.password == password ? 200 : 400;
    } else {
      statusCode = 400;
      message = 'user not found';
    }

    return res.status(statusCode).json({
      statusCode: statusCode,
      message: message,
    });
  }
}

export default UserHandler;
