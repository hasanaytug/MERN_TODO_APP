import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ToDo_Schema = new Schema({
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
export default mongoose.model("ToDo", ToDo_Schema);
