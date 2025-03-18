import jwt from "jsonwebtoken";
const userAuth = async (req, res, next) => {
  if (!token) {
    return res.json({ success: false, message: "Not authorized,Login" });
  }
  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decodeToken.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
export default userAuth;
