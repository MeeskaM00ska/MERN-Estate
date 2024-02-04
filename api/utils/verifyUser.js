import { errorHandler } from "./error.js";
import jwt from "jsonwebtoken";

// check if req has the token, if yes, analysis token and give req a "user" paylod
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(errorHandler(401, "Unauthorized"));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, "Forbidden"));

    req.user = user;
    next();
  });
};
