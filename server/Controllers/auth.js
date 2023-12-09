const User = require("../Models/userSchema")
const bcrypt=require("bcrypt")

const signup = async (req, res) => {
    try {
        const { email, name, password, type } = req.body;
        const existingEmail = await User.findOne({ email });

        if (existingEmail) {
            return res.status(400).json({
                success: false,
                message: "user already exists"
            })
        }

        let hashedPassword;

        try {
            hashedPassword = await bcrypt.hash(password, 10);
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: "becrypt failed",
            })
        }

        const user = await User.create({
            name,
            email,
            type,
            password: hashedPassword,
        });

      if(user)
      {
        return res.status(200).json({
            success:true,
            message:"hogya signup"
        })
      }
    } catch (error) {
      return res.status(501).json(
        {
            success:false,
            message:`failed to create user ${error}`
        }
      )
    }

}

const login = async (req, res) => {
const {email,password} =req.body;

const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User Not Found Please Login"
            })
        }
try {
    bcrypt.compare(password,user.password)
    
} catch (error) {
    
}
}


module.exports = { login, signup }