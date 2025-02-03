import User from "../models/User.js"

const myInfo = async (req, res) => {
  try {
    const info = await User.findOne({ email: "njaumatildawanjiru@gmail.com" }).select("-_id")

    const updateUser = {
      ...info.toObject(),
      current_datetime: new Date().toISOString().split(".")[0] + "Z"
    }
    res.status(200).json(updateUser)
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" })
  }
}

export { myInfo }
