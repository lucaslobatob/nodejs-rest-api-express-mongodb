import express from 'express';

const app = express();

let livros = [
    {
        "id": 1,
        "name": 'Senhor dos Aneis',
    },
    {
        "id": 2,
        "name": 'O Hobbit',
    }
]

app.get("/", (req, res) => {
    res.status(200).send("Curso Node.js");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
})

export default app;