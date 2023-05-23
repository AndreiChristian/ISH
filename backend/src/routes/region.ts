import { NextFunction, Request, Response, Router } from "express";

const router = Router();

router.use("/regions", (req: Request, res: Response, next: NextFunction) => {
  next(req);
});

router.get("/");

export default router;
