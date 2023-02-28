import React, { useState } from "react";

function Clock() {
    let [value, updateTime] = useState({ date: new Date() });
console.log(value);
    function tick() {
        updateTime(value = { date: new Date() });
    }
    setInterval(tick, 1000);
    return (
        <div>
            <h5>It is {value.date.toLocaleTimeString()}.</h5>
        </div>
    );
}

export default Clock;