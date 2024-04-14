const users = [
    { id: 1, username: 'charles', email: 'charles.santos.dev@gmail.com', password: 'sss-7458'},
    { id: 2, username: 'Pedro', email: 'pedro@gmail.com', password: 'ftr-5241'},
    { id: 3, username: 'Vinicius', email: 'vinicius@gmail.com', password: 'def-6253'}
];
  
module.exports = {
    
    getAllUsers() {
        return users;
    },
  
    getUserById(userId) {
        return users.find(user => user.id === userId);
    },

    getUserByEmail(email) {
        return users.find(user => user.email == email);
    }
  
}