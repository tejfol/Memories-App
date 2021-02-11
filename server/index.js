import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

//router
import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
    "mongodb+srv://tejfol:flatronw1941A@cluster0.t5ky6.mongodb.net/Memories?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () => console.log(`Server runnign on ${PORT}`))
    )
    .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false);
