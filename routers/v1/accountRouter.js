import express from 'express';
import { StatusCodes } from 'http-status-codes';
// import accountController from '../../controller/accountController';

const accountController = require("../../controller/accountController");
import {accountValidation} from '../../validations/accountValidation';

const Router = express.Router();

Router.route("/")
    .get((req, res) =>{
        res.status(StatusCodes.OK).json({message : "Get list account"})
    })
    // .post((req, res) =>{
    //     res.status(StatusCodes.CREATED).json({message : req.body})
    // })
    .post(accountValidation.createAccount)

// Router.post("/",  accountController.createAccount );

export const accountRoute = Router;