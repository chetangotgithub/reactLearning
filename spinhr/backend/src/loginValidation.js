import model from "../schema/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginValidation = async (req, res) => {
  const user = await model.findOne({ username: req.body.username });

  try {
    if (!user) {
      res.json({ status: "failure", message: "User not found" });
    }
    const match = await bcrypt.compare(req.body.password, user.password);
    const accessToken = jwt.sign(
      JSON.stringify(user),
      process.env.TOKEN_SECRET
    );
    if (match) {
      res.json({ status: "success", accessToken: accessToken });
    } else {
      res.json({ status: "failure", message: "Invalid Credentials" });
    }
  } catch (e) {
    console.log(e);
  }
};

export default loginValidation;
