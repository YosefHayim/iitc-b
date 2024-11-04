const handleUndefinedRoutes = (req, res) => {
  res.status(404).json({
    status: 'Failed',
    message: `Can't find ${req.originalUrl} on this server!`
  });
};

export { handleUndefinedRoutes }