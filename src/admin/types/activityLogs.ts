export interface ActivityLog {
    id:string;
    actor:string;
    code:string;
    createAt:string;
    params:{[key:string]:string};
}