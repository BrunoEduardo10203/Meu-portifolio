const express = require("express");
const nodemailer = require("nodemailer");
const path = require('path');

const app = express();

const smtp = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "a331ed77631482",
        pass: "f7f874c798c1a7"
    }
});

const configEmail = {
    from: "brunabtoliveira@gmail.com",
    to: "b.eduardobruno@gmail.com",
    subject: "Testando se vai dar certo",
    html: "<p>Agora vai</p>"
};

//Exibe paginas estaticas
app.use(express.static(path.join(__dirname, 'portifolio')));

//Exibe o HTML
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

//Envio do email
app.get("/send-email", (req, res) => {
    smtp.sendMail(configEmail, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ message: 'Erro ao enviar email' });
        } else {
            console.log("Email enviado: " + info.response);
            res.json({ message: 'Email enviado com sucesso' });
        }
    });
});


app.listen(3001, () => {
    console.log("Servidor rodando em http://localhost:3001");
});

// Código para lidar com o clique do botão no frontend
app.get("/main.js", (req, res) => {
    res.sendFile(path.join(__dirname, ' ', 'main.js'));
});

app.get("/style.css", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'style.css'));
});
