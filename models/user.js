import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    unique: [true, "Username already exists"],
    required: [true, "Username is required"],
    match: [/^(?=.{8,30}$)(?![_.])(?!.*[_.]{2})[\p{L}0-9._]+(?<![_.])$/u, "Username invalid, it should contain 8-20 alphanumeric letters and be unique"]
  },
  image: {
    type: String,
  }
})

const User = models.User || model("User", UserSchema);

export default User;