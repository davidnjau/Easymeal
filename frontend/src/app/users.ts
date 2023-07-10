export interface Users{
    
    //users of the app(customers)
    imgicon:string;
    idno: string;
    name: string;
    item: string;
    qty: number;
    value: number;
    date: string;

//to be removed. Staff interface, used in users service. no need to be here after i sort page 1.
    status: string;
    //action:string;
    staffname:string;
    staffimg:string;
    id:number;
    position:string;
    department:string;
    joined:string;
    mobile: string;

}

