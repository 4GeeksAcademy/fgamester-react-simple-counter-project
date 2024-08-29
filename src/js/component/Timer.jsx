import React from "react";

const Timer = ({ timeLabel, id }) => {
    return (<h1 id={id} className="time mx-1 text-center">{timeLabel}</h1>);
}

export default Timer;