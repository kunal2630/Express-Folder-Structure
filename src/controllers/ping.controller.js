function pingController(req, res) {
  res.status(201).json({
    msg: "Server is running",
  });
}
module.exports = pingController;
