import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    trim: true,
    minlength: [2, "Name must be at least 2 characters"],
  },
  role: {
    type: String,
    enum: ["Verified Customer", "Beta Tester", "Health Professional"],
    default: "Verified Customer",
  },
  quote: {
    type: String,
    required: [true, "Please provide a testimonial quote"],
    minlength: [10, "Quote must be at least 10 characters"],
    maxlength: [500, "Quote cannot exceed 500 characters"],
  },
  image: {
    type: String,
    default: null,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Auto update updatedAt
testimonialSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model("Testimonial", testimonialSchema);
