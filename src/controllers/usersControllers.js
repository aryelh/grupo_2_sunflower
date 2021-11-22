const fs = require('fs');
const path = require ('path');
const { validationResult } = require('express-validator');

// convertir los datos del JSON a objeto literal
const usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const loginControllers={
    login: (req, res) => {
        res.render('./users/login');
    },
    processRegister: (req, res) => {
		const resultValidation = validationResult(req);
		
		if (resultValidation.errors.length > 0) {
			return res.render('./users/login', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		return res.render('./users/user');
	},

    register: (req, res) => {
        res.render('./users/register');
    },

    ProcessRegister: (req, res) =>{
        const resultValidation = validationResult(req);

        console.log(resultValidation.errors.length)
        res.render('./users/register');

        if (resultValidation.errors.length > 0){
            res.render('./users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        
            /* let newUser ={
                cod_user: users[users.length - 1].cod_user + 1,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password1,
                user_type: req.body.user_type,
                image_profile: req.file ? req.file.filename : "user.jpg" 
            } */

            /* users.push(newUser);
            let userJson =JSON.stringify(users, null, " ");
            fs.writeFileSync(usersFilePath, userJson);
    
            users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); */
            res.redirect('/')
        
    },
    usuarios: (req, res) => {
        res.render('./users/user');    
    },


}

module.exports=loginControllers;