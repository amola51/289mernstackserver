import mongoose from "mongoose";

const schama = new mongoose.Schema({
    category: {
        type: String,
        required: [true, "Please Enter Category"],
    }
});

export const  Category = mongoose.model("Category", schama);