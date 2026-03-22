import Testimonial from "../models/Testimonial.js";
import { validationResult } from "express-validator";

// GET all testimonials
export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ verified: true })
      .sort({ createdAt: -1 })
      .limit(10);

    res.status(200).json({
      success: true,
      count: testimonials.length,
      data: testimonials,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to fetch testimonials",
      message: error.message,
    });
  }
};

// POST new testimonial
export const submitTestimonial = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { name, role, quote, rating } = req.body;

    // Create new testimonial
    const testimonial = new Testimonial({
      name,
      role: role || "Verified Customer",
      quote,
      rating: rating || 5,
      verified: false, // Admin must verify before displaying
    });

    await testimonial.save();

    res.status(201).json({
      success: true,
      message:
        "Testimonial submitted successfully. Our team will review it shortly.",
      data: testimonial,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to submit testimonial",
      message: error.message,
    });
  }
};

// GET all testimonials (admin only - including unverified)
export const getAllTestimonialsAdmin = async (req, res) => {
  try {
    // In production, verify admin token here
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: testimonials.length,
      data: testimonials,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to fetch testimonials",
      message: error.message,
    });
  }
};

// UPDATE testimonial (admin only - verify/unverify)
export const updateTestimonial = async (req, res) => {
  try {
    // In production, verify admin token here
    const { id } = req.params;
    const { verified, name, quote, rating } = req.body;

    const testimonial = await Testimonial.findByIdAndUpdate(
      id,
      { verified, name, quote, rating },
      { new: true, runValidators: true },
    );

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        error: "Testimonial not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Testimonial updated successfully",
      data: testimonial,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to update testimonial",
      message: error.message,
    });
  }
};

// DELETE testimonial (admin only)
export const deleteTestimonial = async (req, res) => {
  try {
    // In production, verify admin token here
    const { id } = req.params;

    const testimonial = await Testimonial.findByIdAndDelete(id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        error: "Testimonial not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Testimonial deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to delete testimonial",
      message: error.message,
    });
  }
};
