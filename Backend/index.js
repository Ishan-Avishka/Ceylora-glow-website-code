import app from './app.js'; // Add .js to the import path
import dotenv from "dotenv";
import dbConnection from './util/db.js';
dotenv.config();

//server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Server is running on port 8000');
    dbConnection();
});
