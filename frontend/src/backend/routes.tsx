import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

// Default router gate
router.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Tutorial5 !!");
});

export default router;