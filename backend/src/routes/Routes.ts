import express from "express";

import RoleController from "../controllers/RoleController";
import UserController from "../controllers/UserController";
import MasterMenuController from "../controllers/MasterMenuController";
import SubMenuController from "../controllers/SubMenuController";
import RoleMenuAccessController from "../controllers/RoleMenuAccessController";

import UserValidation from "../middleware/validation/UserValidation";
import Authorization from "../middleware/Authorization";
import MenuValidation from "../middleware/validation/MenuValidation";

const router = express.Router();

// Role Routing
router.get("/role", Authorization.Authenticated, RoleController.GetRole);
router.post("/role",Authorization.Authenticated, Authorization.AdminRole, RoleController.CreateRole);
router.patch("/role/:id",Authorization.Authenticated, Authorization.AdminRole, RoleController.UpdateRole);
router.delete("/role/:id", Authorization.Authenticated, Authorization.AdminRole, RoleController.DeleteRole);
router.get("/role/:id",Authorization.Authenticated, RoleController.GetRoleById);

// User Routing
router.post("/user/register", UserValidation.RegisterValidation, UserController.Register);
router.post("/user/login", UserController.UserLogin);
router.get("/user/refresh-token", UserController.RefreshToken);
router.get("/user/current-user", Authorization.Authenticated, UserController.UserDetail);
router.get("/user/logout", Authorization.Authenticated, UserController.UserLogout);

// Master Menu Routing
router.post("/menu", MenuValidation.CreateMenuValidation, Authorization.Authenticated, Authorization.AdminRole, MasterMenuController.CreateMenu);
router.get("/menu", Authorization.Authenticated, Authorization.AdminRole, MasterMenuController.GetListMenu);
router.get("/menu/get/all", Authorization.Authenticated, Authorization.AdminRole, MasterMenuController.GetAllMenu);
router.get("/menu/:id", Authorization.Authenticated, Authorization.AdminRole, MasterMenuController.GetDetailMenu);
router.patch("/menu/:id", MenuValidation.CreateMenuValidation, Authorization.Authenticated, Authorization.AdminRole, MasterMenuController.UpdateMenu);
router.delete("/menu/:id", Authorization.Authenticated, Authorization.AdminRole, MasterMenuController.SoftDeleteMenu);
router.delete("/menu/delete/:id", Authorization.Authenticated, Authorization.AdminRole, MasterMenuController.DeletePermanent);

// Sub Menu Routing
router.post("/sub-menu", MenuValidation.CreateSubmenuValidation, Authorization.Authenticated, Authorization.AdminRole, SubMenuController.CreateSubMenu);
router.get("/sub-menu", Authorization.Authenticated, Authorization.AdminRole, SubMenuController.GetListSubMenu);
router.get("/sub-menu/get/all", Authorization.Authenticated, Authorization.AdminRole, SubMenuController.GetAllSubMenu);
router.get("/sub-menu/:id", Authorization.Authenticated, Authorization.AdminRole, SubMenuController.GetDetailSubMenu);
router.patch("/sub-menu/:id", MenuValidation.CreateSubmenuValidation, Authorization.Authenticated, Authorization.AdminRole, SubMenuController.UpdateSubMenu);
router.delete("/sub-menu/:id", Authorization.Authenticated, Authorization.AdminRole, SubMenuController.SoftDelete);
router.delete("/sub-menu/delete/:id", Authorization.Authenticated, Authorization.AdminRole, SubMenuController.DeletePermanent);

// Role Menu Access
router.post("/role-menu-access", MenuValidation.CreateRoleMenuAccess , Authorization.Authenticated, Authorization.AdminRole, RoleMenuAccessController.CreateAccess);
router.get("/role-menu-access", Authorization.Authenticated, Authorization.AdminRole, RoleMenuAccessController.GetList);
router.get("/role-menu-access/get/all", Authorization.Authenticated, Authorization.AdminRole, RoleMenuAccessController.GetAll);
router.get("/role-menu-access/:id", Authorization.Authenticated, Authorization.AdminRole, RoleMenuAccessController.GetDetail);
router.patch("/role-menu-access/:id", MenuValidation.CreateRoleMenuAccess, Authorization.Authenticated, Authorization.AdminRole, RoleMenuAccessController.UpdateAccess);
router.delete("/role-menu-access/:id", Authorization.Authenticated, Authorization.AdminRole, RoleMenuAccessController.SoftDelete);

export default router;