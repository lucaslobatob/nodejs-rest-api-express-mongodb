import mongoose, { mongo } from "mongoose";

async function conectarNaDataBase() {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.nmabd.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection;
};

export default conectarNaDataBase;
