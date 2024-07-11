// User Management System
const users = [];

function registerUser(username, password) {
  const user = {
    id: users.length + 1,
    username,
    password, // In a real application, passwords should be hashed
    purchases: []
  };
  users.push(user);
  return user;
}

function loginUser(username, password) {
  const user = users.find(u => u.username === username && u.password === password);
  return user ? user : null;
}

function getUserPurchases(userId) {
  const user = users.find(u => u.id === userId);
  return user ? user.purchases : [];
}

module.exports = {
  registerUser,
  loginUser,
  getUserPurchases
};