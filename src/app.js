import express from 'express';
import conectarNaDataBase from './config/dbConnect.js';
import routes from './routes/index.js';

const conexao = await conectarNaDataBase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feito com sucesso!");
});

const app = express();
routes(app);

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).json(livros);
});

export default app;