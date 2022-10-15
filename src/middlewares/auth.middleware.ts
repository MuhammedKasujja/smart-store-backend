import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('AuthMiddleware', req.body, req.params)
        if (!req.body.gender) {
            throw new HttpException({
                success: false,
                message: 'U need to be logged in',
                code: HttpStatus.UNAUTHORIZED
            }, HttpStatus.UNAUTHORIZED)
        }
        next();
    }

}