import React from "react";


const Timer = ({ compLabel, id, seconds }) => {

    switch (id) {
        case "unitSeconds":
            compLabel = seconds % 10;
            break;
        case "tensSeconds":
            compLabel = Math.floor((seconds % 60) / 10);
            break;
        case "unitMinutes":
            compLabel = (Math.floor(seconds / 60) % 10);
            break;
        case "tensMinutes":
            compLabel = Math.floor((Math.floor(seconds / 60) % 60 / 10));
            break;
        case "unitHours":
            compLabel = (Math.floor(seconds / 3600) % 10);
            break;
        case "tensHours":
            compLabel = Math.floor((Math.floor(seconds / 3600) % 60 / 10));
            break;
    }

    return (<h1 id={id} className="time mx-1 text-center">{compLabel}</h1>);
}

export default Timer;