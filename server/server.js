import express from "express";

const app = express();

app.use(express.json());
// app.use(cors());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(3000, () => console.log("server listening on"));
