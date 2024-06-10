class UserRepository {
  constructor(users = []) {
    // TODO:
    this.users = users
  }

  getAll() {
    // TODO:
    return this.users
  }

  add(user) {
    // TODO:
    this.users.push(user)
    return user
  }

  getByID(id) {
    // TODO:
    return this.users.find(user => user.id === id);
  }

  getByEmail(email) {
    // TODO:
    return this.users.find(user => user.email === email);
  }

  deleteByID(id) {
    // TODO:
    this.users = this.users.filter(user => user.id !== id);
  }
}

export default UserRepository;