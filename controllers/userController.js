import User from "../modals/user.js";
export const signupUser = async (req, res) => {
  try {
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();
    return res.status(200).json({ msg: `signup successfully` });
  } catch (error) {
    return res.status(500).json({ error: ` error while signup` });
  }
};
