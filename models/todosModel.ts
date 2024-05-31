import mongoose from "mongoose";

const todosSchema = new mongoose.Schema({
    title: { type: String, required: true },
    status: { type: String, status: { type: String, enum: ["todo", "inprogress", "done"], default: "todo" } },
    image: { type: String },
    createdAt: { type: Number, default: Date.now() }
})

export const Todo = mongoose.models?.Todo || mongoose.model("Todo", todosSchema);