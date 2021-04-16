const express = require("express")
const app = express();
const port = 5000;
app.use("/users", usersroutes);
app.listen(port, () => console.log("server running on port:express//localhost${port}"));
app.get("/", (req,res) => {
    console.log("[test]!");

    res.send("hello from home page.");
})
import usersroutes from "./routes/users.js";
