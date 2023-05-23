import { NextFunction, Request, Response } from "express";

export const getRegionList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json({
      message: "regions",
    });
  } catch {
    (err: Error) => {
      console.error(err);
      return next(err);
    };
  }
};
export const getOneRegion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
export const postRegion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
export const patchRegion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
export const deleteRegion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
