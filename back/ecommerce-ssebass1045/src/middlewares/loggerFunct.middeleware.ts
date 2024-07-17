
import { NextFunction, Request, Response } from "express";

export function LoggerFunct (req: Request, res: Response, next: NextFunction){
        const getDate = () => {
            return new Date().toLocaleString('en-US', {
                timeZone: "America/Colombia/Bogota"
            });
        }
        console.log(`${req.method}/ ${req.url} - request time: ${getDate()}`);

        next() 
        
    }
