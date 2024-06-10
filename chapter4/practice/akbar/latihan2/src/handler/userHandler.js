class UserHandler {
  constructor(userService) {
    this.userService = userService;

    // Binding
    this.getAll = this.getAll.bind(this);
    this.getByEmail = this.getByEmail.bind(this);
  }

  getAll(req, res) {
    const users = this.userService.getAll();

    res.status(200).send({
      users: users,
    });
  }

  getByEmail(req, res) {
    const email = req.params.email;
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
    const { email, password } = req.body;

    let statusCode = 200;
    let message = "OK";

    if (!email || !password) {
      statusCode = 400;
      message = "username or password is empty";
    }

    // Find user
    const isUserExist = user.find((user) => user.email === email);

    if (isUserExist) {
      statusCode = 400;
      message = "user already registered";
    }

    // create user
    const newUser = { email, password };
    this.userService.add(newUser);
    return res.status(statusCode).send("OK");
  }

  login(req, res) {
    // TODO:
    // return 200 (OK) ketika berhasil
    // gagal return 400
    const { email, password } = req.body;

    let statusCode = 201;
    let message = "OK";

    if (!email || !password) {
      statusCode = 400;
      message = "incorrect username or password";
    }
    // Find user
    const isUserExist = this.userService.getByEmail(email);
    if (!isUserExist) {
      statusCode = 400;
      message = "User not found";
    }

    return res.status(statusCode).send(message);
  }
}

export default UserHandler;
