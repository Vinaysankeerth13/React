import { useEffect, useState } from "react";

const User = ({name}) => {
    const [count , setCount] = useState(0);

    useEffect(() => {
        // Api calls
    }, [])

    return(
        <div className="user-card">
            <h4>Count: {count}</h4>
            <h4>Name: {name}</h4>
            <h4>Location: Hyderabad</h4>
            <h5>Email: vinaysankeerth1@gmail.com</h5>
        
        </div>
    )
} 