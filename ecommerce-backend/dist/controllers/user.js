import { User } from "../models/user.js";
export const newUser = async (req, res, next) => {
    try {
        console.log("Rol");
        const { name, email, photo, gender, _id, dob } = req.body;
        console.log(name, email, photo, gender, _id, dob);
        const user = await User.create({
            name,
            email,
            photo,
            gender,
            _id,
            dob
        });
        res.status(200).json({
            success: true,
            message: `Welcome, ${user.name}`,
        });
    }
    catch (error) {
        res.status(200).json({
            success: false,
            message: error,
        });
    }
} ;
