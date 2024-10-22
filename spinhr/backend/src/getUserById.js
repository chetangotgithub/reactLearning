import model from "../schema/user.js";

const getUserById = async (req, res) => {
  const user = await model.findById(req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(400).json({ status: "failure" });
  }
};

export default getUserById;
