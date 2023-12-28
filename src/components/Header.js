import React from "react";

let Header = (props) => 
{
    return(
        console.log(props),
        <div className="header_area"> 
            <h2> I am Header used for {props.Action}</h2>
        </div>
    );
}

export default Header;