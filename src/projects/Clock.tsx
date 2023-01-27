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
            <h4>Hello, world!</h4>
            <h4>It is {value.date.toLocaleTimeString()}.</h4>
        </div>
    );
}

export default Clock;