const handleUndefinedRoutes = (req, res, next) => {
  res.status(404).json({
    status: "Failed",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
  next();
};

export { handleUndefinedRoutes };
