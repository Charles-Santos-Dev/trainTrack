const Users = require('../models/Users');

module.exports = {

    login(req, res) {

        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(400).json({message: 'Enter userName and password!'});
        } else {
            const user = Users.getUserByEmail(email);

            if(user) {

                if(user.password == password) {
                    return res.status(200).json({message: 'OK'});
                } else {
                    return res.status(400).json({message: 'incorrect password!'});
                }

            } else {
                return res.status(400).json({message: 'User not found!'});
            }
        }

    }

}