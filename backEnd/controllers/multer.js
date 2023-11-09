exports.file = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded." });
    }
    return res.status(200).json({ message: "File upload successfully." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
