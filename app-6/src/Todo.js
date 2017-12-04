import React, { Component } from "react";

export default function Todo(props) {
        
        return(
            <div>
                <ul>{props.list.map((item,index) => <li key={index}>{item}</li>)}</ul>
            </div>
        )
    
}

