const { application } = require("express");
const express = require("express");
const User = require("../models/user");
const router = express.Router();


router.get("/", (req, res) => {
    res.render("signUp/index");
  });

router.post('/', (req, res) =>{
    const { names, lastName, dropdown_country, e_mail, password } = req.body;

    const user = new User({names, lastName, e_mail, password, dropdown_country}); //le pasamos los valores
    user.save(err => {
      if(err){
        res.status(500).send('Error al registrar el usuario')
      }else{
        res.status(200).send('Usuario Registrado')
      }
    })
});

module.exports = router;