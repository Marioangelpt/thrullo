const pool = require("../database/db");
const cloudinary = require("../database/cloudinary");

const getData = (req, res)=>{
    res.send("hello");
};

const setUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {

        cloudinary.uploader.upload()

        const result = await pool.query("INSERT INTO users(name, email, password, ) VALUES ($1, $2, $3)", [ name, email, password ]);

        console.log(result);
        
    } catch (e) {
        res.send(JSON.parse({message: "something goes wrong"}))
    }
}

module.exports = {
    getData,
    setUser
};