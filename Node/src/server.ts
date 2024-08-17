import app from "./app";
import dotnev from "dotenv";

dotnev.config();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`\n > Running on http://localhost:${port} \n`);
});