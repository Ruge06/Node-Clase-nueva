export interface Usuario{
 name: string;
 lastName: string;
 age: number;
 addres: string;
 height: number;
 Company: company;
}

export interface company{
    name: string;
    value: number;
    location: location;
}

export interface location{
    lat: string;
    lon: string;
}