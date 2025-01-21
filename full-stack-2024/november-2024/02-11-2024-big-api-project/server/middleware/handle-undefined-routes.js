const handleUndefinedRoutes = (req, res, next) => {
  res.status(404).json({
    status: "Unknown path.",
    message: `Can't find the ${req.originalUrl} on this server!`,
  });
  next();
};

export { handleUndefinedRoutes };
