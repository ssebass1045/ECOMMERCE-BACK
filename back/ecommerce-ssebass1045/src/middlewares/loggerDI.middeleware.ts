import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggerDI implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction){

        const getDate = () => {
            return new Date().toLocaleString('en-US', {
                timeZone: "America/Colombia/Bogota"
            });
        }
        console.log(`${req.method}/ ${req.url} - request time: ${getDate()}`);

        next() 
        
    }
}