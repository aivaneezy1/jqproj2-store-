import jwt from "jsonwebtoken";

export const ensureAuthneticated = async (req, res, next) => {
  const accessToken = req.headers.authorization;

  if (!accessToken) {
    return res.status(401).json({ message: "Authorization header not found" });
  }

  try {
    const decodedAccessToken = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET_KEY
    );

    if (!decodedAccessToken.userId) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    req.user = { id: decodedAccessToken.userId };
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: "Access token invalid or expired" });
  }
};
