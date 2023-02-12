import Express from "express";
import mongoose from "mongoose";
import cors from "cors";

interface IToDo {
  note: string;
  isDone?: boolean;
  time?: Date;
}
const Schema = mongoose.Schema;
const ToDo_Schema = new Schema<IToDo>({
  note: {
    type: "string",
    required: true,
  },
  isDone: {
    type: "boolean",
    default: false,
  },
  time: {
    type: Date,
    default: Date.now(),
  },
});

const ToDo = mongoose.model("ToDo", ToDo_Schema);

const app = Express();
app.use(Express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/todo-db")
  .then(() => console.log("Connected to MongoDB"));

app.get("/", async (req: Express.Request, res: Express.Response) => {
  const todo = await ToDo.find();
  res.json(todo);
});

app.post("/new", (req: Express.Request, res: Express.Response) => {
  const todo = new ToDo({
    note: req.body.note,
  });
  todo.save();
  res.json(todo);
});

app.delete(
  "/delete/:id",
  async (req: Express.Request, res: Express.Response) => {
    const todo = await ToDo.deleteOne({ _data: req.params.id });
    res.json(todo);
  }
);

app.listen("3001", () => console.log("Connected to the server Port: 3001"));
