import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";

export const errorHandler = async (err: Error, req: Request, res: Response, next: NextFunction) => {
  
  if (res.headersSent) {
    return next(err)
  }
  
  if( err instanceof CustomError ) {
    return res.status(err.statusCode).send({errors: err.serializeErrors()});
  }

  res.status(400).send({
    errors: [{message: 'Something went wrong'}]
  });
}