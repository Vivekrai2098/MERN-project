import express, { response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser"; // Import body-parser






const app = express()

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//the connection code of the monodb in this part
app.use(cors());
app.use(bodyParser.json()); // Add body-parser middleware

try {
    mongoose.connect(URI, {
        //two argument give when you locally connect
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    // that is the sceme part
    const userSchema = new mongoose.Schema({
        name: String,
        email: String,
        password: String,
        address: String,
        address2: String,
        zip: String,
        city: String,
        state: String
    });
    const User = new mongoose.model("User", userSchema)





    //that is the login part
    app.post("/Login", async (req, res) => {
        const { email, password } = req.body;
        try {
            const existingUser1 = await User.findOne({ email: email });
            if (existingUser1) {
                //that is user exist
                if (password === existingUser1.password) {
                    res.send("Welcome");
                    console.log("Welcome");

                }
                else {
                    res.send("password not match")
                    console.log("password not match");
                }

            }
            //     //if not exist code here
            else {
                res.send("you are not register");
                console.log("you are not regsiter");
            }




        }
        catch (error) {
            res.status(500).send({ message: "Internal Server Error" });
        }


    })















    // that is the json convert
    app.use(express.json())


    // ---------------
    //that is post code which help to push data into mongodb database

    app.post("/Signup", async (req, res) => {
        const { name, email, password } = req.body;

        try {
            const existingUser = await User.findOne({ email: email });
            if (existingUser) {
                return res.send({ message: "User already registered" });
            }

            const newUser = new User({
                name,
                email,
                password
            });

            await newUser.save();
            res.send({ message: "Successfully registered" });
        } catch (error) {
            res.status(500).send({ message: "Internal Server Error" });
        }
    });

}
catch (error) {
    console.log("error", error)

}






//that is form data
app.post("/Client", async (req, res) => {
    try {
        const { email, password, address, address2, zip, city, state } = req.body;


        // const access = new User({
        //     email,
        // });




        // Save the user to the database
        // await access.save();
        res.send({ message: "Successfully registered our team contact soon !!!" });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});









app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})