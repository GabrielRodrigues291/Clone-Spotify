
const express = require("express");
const app = express();
const cadastrados = require("./bd/cadastro");
const bodyparser = require("body-parser");
const handlebars = require("express-handlebars");
const { NUMBER } = require("sequelize");
//css 
app.use(express.static('public')); //<< armazenando todos os arquivos estaticos do front-end
    //engine
        app.engine('handlebars',handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine','handlebars');
    //border parser
    
           
    app.use(bodyparser.urlencoded({extended:false}));
    app.use(bodyparser.json());



    app.get("/",((req,res)=>{
        res.render("index");
    }))


    app.get("/login",((req,res)=>{
        res.render("login",{layout: false});
    }))

    app.get("/inscrever-se",((req,res)=>{
        res.render("inscrever-se",{layout: false});
    }))
   
    app.post("/cadastro",((req,res)=>{
        cadastrados.create({
            email:req.body.email,
            confirmar_email: req.body.cofirmar,
            senha:(req.body.senhaconf),
            apelido: req.body.apelido,
            dia: req.body.dianasci,
            mes: req.body.mesdados,
            ano: req.body.anonasci,
            sexo:req.body.b
            
        })
    }))









//outros
let porta = 8081;
app.listen(porta,()=>{
    console.log('Rodando no Localhost na Porta 8081');
})