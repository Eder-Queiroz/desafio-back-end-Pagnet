import { Router } from "express";

import { cnabController } from "../controller/cnabController";

const router = Router();

router.post("/sendFile", cnabController.sendCnab);
router.get("/operations", cnabController.getOperations);

export default router;
