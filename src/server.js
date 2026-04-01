import "dotenv/config"
import express from "express";
import noteRoutes from "./modules/notes/noteRoutes.js"
import topicRoutes from "./modules/topics/topicRoutes.js"
const app = express()
const PORT = 5003
app.use(express.json())
app.use("/note", noteRoutes )
app.use("/topic", topicRoutes)

app.listen(PORT, (req , res)=> {
    console.log(`SERVER IS LIVE ON ${PORT}`);
})