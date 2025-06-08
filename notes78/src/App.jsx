import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";

function Child({ userInfo }) {
    console.log("Child component rendered");
    return <p>User: {userInfo.name}</p>;
}

Child.propTypes = {
    userInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
};

function Parent() {
    const [count, setCount] = useState(0);
    const userInfo = useMemo(() => ({ name: "Bapu" }), []);
    return (
        <div>
            <p>Count: {count}</p>
            <Child userInfo={userInfo} />
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    );
}

export default Parent;
