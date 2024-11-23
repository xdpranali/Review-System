import UserModel from "../models/User.js"

//for Admin authentication
export const isAdmin = async (req, res, next) => {
  try {
    const { email } = req.body;

    const userInfo = await UserModel.findOne({ email })

    if(userInfo && userInfo.role=="Admin")
    {
        next();
        //proceed
    }
    else{
        res.status(403).json({
            message:"Access Denied, only Admin can access"
        })
    }

  } catch (error) {
    res.status(500).json({
        message:"Internal server error"
    })
  }
};

//for Alumni authentication
export const isAlumni = async (req, res, next) => {
  try {
    const { email } = req.body;

    const userInfo = await UserModel.findOne({ email })

    if(userInfo && userInfo.role=="Alumni")
    {
        next();
        //proceed
    }
    else{
        res.status(403).json({
            message:"Access Denied, only Alumni can access"
        })
    }

  } catch (error) {
    res.status(500).json({
        message:"Internal server error"
    })
  }
};


//for Student authentication
export const isStudent = async (req, res, next) => {
  try {
    const { email } = req.body;

    const userInfo = await UserModel.findOne({ email })

    if(userInfo && userInfo.role=="Student")
    {
        next();
        //proceed
    }
    else{
        res.status(403).json({
            message:"Access Denied, only Student can access"
        })
    }

  } catch (error) {
    res.status(500).json({
        message:"Internal server error"
    })
  }
};
