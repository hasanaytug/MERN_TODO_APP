var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ToDo from "../models/ToDo";
const app = express();
app.use(express.json());
app.use(cors());
mongoose
    .connect("mongodb://127.0.0.1:27017/todo-db")
    .then(() => console.log("Connected to MongoDB"));
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = yield ToDo.find();
    res.send(todo);
}));
app.listen("3001", () => console.log("Connected to the server Port: 3001"));
