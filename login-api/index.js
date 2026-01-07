import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running");
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (email === "test@test.com" && password === "1234") {
        res.json({ token: "dummy-token" });
    } else {
        res.status(401).json({ message: "NG" });
    }
});

app.listen(3000, () => {
    console.log("API起動 http://localhost:3000");
});