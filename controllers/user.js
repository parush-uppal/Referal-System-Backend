const User = require("../models/user");

exports.create = async (req, res) => {
  const { name, email,number } = req.body;

  const oldUser = await User.findOne({ email });
  if (oldUser)  return  res.status(201).json({
    referalLink:oldUser.referalLink,
    userRefered:oldUser.userRefered,
    message:
      "Already Registered For the Event",
  });

  const newUser = new User({ name, email,number});
  const referalLink=`https://grow-habbit.netlify.app/?referalId=${newUser._id}`
  newUser.referalLink=referalLink
  await newUser.save();

  if(req.body.referalUser){
    const temp=req.body.referalUser
    const referedUser = await User.findById(temp);
    if(!referedUser){
      return  res.status(201).json({
        user:newUser,
        message:
          "Successfully Registerk",
      });
    }
    const intialCount=referedUser.userRefered
    console.log(intialCount)
    referedUser.userRefered=intialCount+1
    await referedUser.save()
    return  res.status(201).json({
      user:newUser,
      message:
        "Account creation successfull",
    });
  }
  res.status(201).json({
    user:newUser,
    message:
      "Please verify your email. OTP has been sent to your email accont!",
  });
};

exports.allUser = async (req, res, next) => {
  const users = await User.find();
  
    
    res.status(200).json({
      success: true,
      users,
    });
};

exports.singleUser = async (req, res, next) => {
  const users =await User.findById(req.body.id);
    
    res.status(200).json({
      success: true,
      users,
    });
};