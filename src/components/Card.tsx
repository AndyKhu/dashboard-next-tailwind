import { ReactNode } from "react";

const Card = ({ children, className }: { children?: ReactNode, className?:string }) => {
    return (
        <div className={`bg-white rounded shadow ${className?className:''}`}>
            {children}
        </div>
    );
}

Card.header = ({ children, className }: { children?: ReactNode, className?:string }) => {
    return(
        <div className={`px-4 py-3 border-b rounded-t font-medium font-sm relative ${className?className:''}`}>
            {children}
        </div>
    )
}
Card.main = ({ children, className }: { children?: ReactNode, className?:string }) => {
    return (
        <div className={`px-4 py-3 text-sm  ${className?className:''}`}>{children}</div>
    )
}
Card.footer = ({ children, className }: { children?: ReactNode, className?:string }) => <div className={`px-4 py-3 text-sm ${className?className:''}`}>{children}</div>

export default Card;