import express, { Request, Response } from "express";
import { body } from 'express-validator';
import { BadRequestError, validateRequest } from "@abkgtickets/common";

import { User } from "../models/user";
import { Password } from "../services/password";
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/api/users/signin', 
[
  body('email')
    .isEmail()
    .withMessage('Email must be valid!'),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('You must supply a Password!')
],
validateRequest, 
async (req: Request, res: Response) => {

  const { email, password } = req.body;
  
  const existingUser = await User.findOne({email});

  if(!existingUser) {
    try{
      throw new BadRequestError( 'Invalid credentials' );
    } catch(err) {
      return res.status(400).send({});
    }
  }

  const passwordMatch = await Password.compare( existingUser.password, password );

  if( !passwordMatch ) {
    try{
      throw new BadRequestError( 'Invalid credentials' );
    } catch(err) {
      return res.status(400).send({});
    }
  }

  // Generate JWT
  const userJwt = jwt.sign({
    id: existingUser.id,
    email: existingUser.email
  }, 
  process.env.JWT_KEY!
  );

  // Store it on session object
  req.session = {
    jwt: userJwt
  };

  res.status(200).send(existingUser); 

});

export { router as signinRouter };