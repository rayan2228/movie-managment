import ApiError from "../utils/ApiError.js";
import { TryCatch } from "../utils/TryCatch.js";

export const checkAccess = function (permissions) {
  return TryCatch(async function (req, res, next) {
    const user = req.user;
    const userPermissions = user.role.permissions;
    const hasPermission = permissions.some((permission) =>
      userPermissions.includes(permission)
    );
    if (!hasPermission) {
      return res.status(403).json(new ApiError(403, "Forbidden"));
    }
    next();
  });
};
