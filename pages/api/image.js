export default async function handler(req, res) {
  console.info(req.headers["user-agent"]);
  return res.status(200).json({
    userAgent: req.headers["user-agent"],
  });
}
