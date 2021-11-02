import { NextFunction, Request, Response } from 'express';

// function 방식
export function JwtMiddleWare(req: Request, res: Response, next: NextFunction) {
  console.log(req.headers);
  next();
}
