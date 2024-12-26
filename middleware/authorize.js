import User from "../models/User.js";
export const authorize = (role = []) => {
  return async function (req, res, next) {
    const user = await User.findOne({ _id: req.user.id });

    if (!user || !role.includes(user.role)) {
      return res.status(403).json({ messagge: "Access Denied" });
    }

    next();
  };
};
