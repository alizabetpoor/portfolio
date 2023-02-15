import { ReactNode } from "react"

export interface ButtonProps{
    onClick?: ()=>void ;
    children:ReactNode;
    width?:string|number;
    height?:string|number;
    backgroundColor?:string;
    color?:string;
    fontSize?:string|number;
    className?:string;
    haveHover?:boolean;
    haveBackdrop?: boolean;
}