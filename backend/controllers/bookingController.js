import Booking from "../models/Booking.js";
import Service from "../models/Service.js";

// CREATE booking (User)
export const createBooking = async (req, res) => {
  try {
    const service = await Service.findById(req.body.serviceId);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    const booking = await Booking.create({
      userId: req.user._id,
      serviceId: service._id,
      providerId: service.providerId,
      date: req.body.date,
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// USER bookings
export const getUserBookings = async (req, res) => {
  const bookings = await Booking.find({ userId: req.user._id })
    .populate("serviceId")
    .populate("providerId", "name email");

  res.json(bookings);
};

// PROVIDER bookings
export const getProviderBookings = async (req, res) => {
  const bookings = await Booking.find({ providerId: req.user._id })
    .populate("serviceId")
    .populate("userId", "name email");

  res.json(bookings);
};

// UPDATE status (Provider)
export const updateBookingStatus = async (req, res) => {
  const booking = await Booking.findById(req.params.id);

  if (!booking) {
    return res.status(404).json({ message: "Booking not found" });
  }

  if (booking.providerId.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not authorized" });
  }

  booking.status = req.body.status;
  await booking.save();

  res.json(booking);
};