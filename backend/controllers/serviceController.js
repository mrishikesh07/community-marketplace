import Service from "../models/Service.js";

// CREATE service
export const createService = async (req, res) => {
  try {
    const service = await Service.create({
      ...req.body,
      providerId: req.user._id,
    });

    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET all services
export const getServices = async (req, res) => {
  const services = await Service.find().populate("providerId", "name email");
  res.json(services);
};

// UPDATE service
export const updateService = async (req, res) => {
  const service = await Service.findById(req.params.id);

  if (!service) {
    return res.status(404).json({ message: "Service not found" });
  }

  if (service.providerId.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not authorized" });
  }

  const updated = await Service.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(updated);
};

// DELETE service
export const deleteService = async (req, res) => {
  const service = await Service.findById(req.params.id);

  if (!service) {
    return res.status(404).json({ message: "Service not found" });
  }

  if (service.providerId.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not authorized" });
  }

  await service.deleteOne();

  res.json({ message: "Service deleted" });
};