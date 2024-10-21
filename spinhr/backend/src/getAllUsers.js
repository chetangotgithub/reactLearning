import model from "../schema/user.js";

const getAllUsers = async (req, res) => {
  const userData = await model.find({});
  console.log("userData");
  res.status(200).json(userData);
};

export default getAllUsers;
