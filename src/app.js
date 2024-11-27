import express from 'express';

const app = express();
app.use(express.json());

let livros = [
    {
        "id": 1,
        "name": "Senhor dos Aneis",
    },
    {
        "id": 2,
        "name": "O Hobbit",
    }
];

function buscaLivros(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    }
    );
};

app.get("/", (req, res) => {
    res.status(200).send("Curso Node.js");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    res.json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    livros[index].name = req.body.name;
    res.status(200).json(livros);
});

export default app;