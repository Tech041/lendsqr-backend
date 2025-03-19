import userDetailsModel from "../models/userDetailsModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
// Validating user input
const userDetails = async (req, res) => {
  try {
    const {
      full_name,
      phone,
      email,
      bvn,
      gender,
      marital_status,
      address,
      bank,
      level,
      employment_status,
      sector,
      duration,
      office_email,
      monthly_income,
      twitter,
      facebook,
      instagram,
      guarantor_full_name,
      guarantor_phone,
      guarantor_email,
      guarantor_relationship,
    } = req.body;

    // checking if user has registered already
    const userExists = await userDetailsModel.findOne({ email });
    if (userExists) {
      return res.json({
        success: false,
        message: "Email has been used",
      });
    }
    // hashing bvn
    const salt = await bcrypt.genSalt(10);
    const hashedBvn = await bcrypt.hash(bvn, salt);

    // validating email
    if (!validator.isEmail(email) || !validator.isEmail(guarantor_email)) {
      return res.json({ success: false, message: "Please enter valid email" });
    }
    // creating user detail
    const newUserDetail = {
      full_name,
      phone,
      email,
      bvn: hashedBvn,
      gender,
      marital_status,
      address,
      bank,
      level,
      employment_status,
      sector,
      duration,
      office_email,
      monthly_income,
      twitter,
      facebook,
      instagram,
      guarantor_full_name,
      guarantor_phone,
      guarantor_email,
      guarantor_relationship,
      date: Date.now(),
    };
    // creating user details

    const newUserInfo = new userDetailsModel(newUserDetail);
    console.log(newUserDetail);
    console.log(req.body);
    await newUserInfo.save();
    res.json({ success: true, message: "User details created successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
export default userDetails;
