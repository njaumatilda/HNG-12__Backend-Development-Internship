import mongoose from "mongoose"

const InfoSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: true,
  },
  current_datetime: {
    type: String,
    default: null,
    required: true
  },
  github_url: {
    type: String,
    trim: true,
    required: true,
  },
})

export default mongoose.model("user", InfoSchema)
