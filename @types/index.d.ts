import { Request } from "express"
import { IUser } from "../models/user.model"

declare module Express {
    export interface Request {
        bucketUrl: string;
        fileName: string;
    }
}

declare global {
    namespace Express {
        interface Request {
            user?: Record<string, any>
        }
    }
}

