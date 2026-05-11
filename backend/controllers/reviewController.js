import Review from "../models/Review.js";

// Create review
export const createReview = async (req, res) => {
  try {
    const review = await Review.create({
      userId: req.user._id,
      serviceId: req.body.serviceId,
      rating: req.body.rating,
      comment: req.body.comment,
    });

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get reviews for service
export const getReviews = async (req, res) => {
  const reviews = await Review.find({ serviceId: req.params.serviceId })
    .populate("userId", "name");

  res.json(reviews);
};