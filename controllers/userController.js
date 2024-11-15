import User from "../models/user.js";

//create Admin
export const createAdmin = async(req, res) => {
    try{
        const {name, email, password} = req.body;

        //object
        const user = new User({
            name,
            email,
            password,
            role:"Admin"
        })

        const savedUser = await user.save();

        res.json({
            savedUser,
            message:"User created successfully"
        })

    }
    catch(error){
        res.json({
            error:"Error Occured"
        })
    }
}

//create Alumni
export const createAlumni = async (req, res) => {
    try {
        const {name, password, email} = req.body;

        const alumni = new User({
            name,
            email,
            password,
            role:"Alumni"
        })

        const savedAlumni = await alumni.save();

        res.json({
            savedAlumni,
            message:"User Alumni created successfully"
        })

    } catch (error) {
        res.json({
            error:"Error Occured"
        })
    }
}


//create Student
export const createStudent = async (req, res) => {
    try {
        const {name, password, email} = req.body;

        const student = new User({
            name,
            email,
            password,
            role:"Student"
        })

        const savedStudent = await student.save();

        res.json({
            savedStudent,
            message:"User Student created successfully"
        })

    } catch (error) {
        res.json({
            error:"Error Occured"
        })
    }
}


export const getAllUsers = async (req, res) =>{
    try {
        const getUsers = await User.find()
        res.json({
            getUsers
        })
    } catch (error) {
        res.json({
            error:"Cannot fetch data"
        })
    }
}