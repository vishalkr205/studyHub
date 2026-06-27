const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const app = express ();
const studyRoutes = require("./routes/studyRoutes");
app.use("/api",studyroutes);
app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes);
app.get("/",(req,res)=> {res.send("KRSTUDY API is running");
});

module.exports = app;