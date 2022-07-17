export interface Notification {
    id:string;
    code:string;
    createAt:string;
    params?:{
        quantity?:string;
        user?:string;
    }
    umread:string;
}