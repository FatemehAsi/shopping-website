import * as React from "react";

interface IContainer{
    children: React.ReactNode;

}

function Container({children}: IContainer){
    return(
        <div className="container mx-auto px-32">{children}</div>
    )
}

export default Container;