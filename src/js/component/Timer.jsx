import React from "react";

const Timer = ({ compLabel, id }) => {
    return (<h1 id={id} className="time mx-1 text-center">{compLabel}</h1>);
}

export default Timer;