import model from "../schema/user.js";
import bcrypt from "bcrypt";

const addUser = async (req, res) => {
  try {
    let data = req.body;
    const salt = await bcrypt.genSalt(2);
    const hash = await bcrypt.hash(data.password, salt);
    const userData = { ...data, password: hash };

    console.log(userData);
    const newUser = new model({
      username: userData.username,
      password: userData.password,
      email: userData.email,
      createdAt: Date.now(),
    });
    const result = await newUser.save();
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Something went wrong" });
  }
};

export default addUser;
