export const index = async (req, res) => {
  res.status(200).json({ message: "Server is running" });
};
