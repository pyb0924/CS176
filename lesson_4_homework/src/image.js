import React from "react";
import "./styles.css"

function Image(props) {
    return (
        <div className="image"
             style={{backgroundImage: `url(${props.src})`}}
        />
    );
}

export default Image;