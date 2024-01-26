import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI, {
            dbName: "UdemyCourse",
        });
        console.log(`server connected to database ${connection.host}`)
    } catch (error) {
        console.log("some Error Occoured", error);
        process.exit(1);
    }
}