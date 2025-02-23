import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required"],
  },
});

// Prompt is either equal to the prompt that already exists, or create a new model called Prompt based on the PromptSchema
const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;