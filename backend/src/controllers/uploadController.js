const uploadFile = (req, res) => {
  res.json({
    success: true,
    message: "Controller is working 🚀",
  });
};

module.exports = {
  uploadFile,
};