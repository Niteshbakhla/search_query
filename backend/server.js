require("dotenv").config();
const { app } = require("./src/app")
const { connectDB } = require("./src/db/db")
const searchRouter = require("./src/routes/route");
const cors = require("cors")
connectDB()


app.use(cors({
            origin: process.env.FRONTEND_URL,
}));
app.use("/api", searchRouter)

app.listen(3000, () => {
            console.log("Server is running at port 3000")
})


