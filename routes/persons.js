const express = require("express");
const router = express.Router();
const mongoose = require("../node_modules/mongoose");
let Person = require("../models/person");

router.get("/persons", function(req,res, next){
    Person.find(function(err,persons){
        if(err) return next(err);
        res.json(persons);
    });
})

router.get("/person", function(req,res){

    res.render("person");
});

router.post("/personssend",function (req, res) {

    const myPerson = new Person ({
    nss: req.body.nss,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    edad: req.body.edad,
    tipoSangre: req.body.tipoSangre
    });
    myPerson.save();
})




module.exports = router