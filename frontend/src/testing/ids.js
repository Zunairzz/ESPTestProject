import React, {useEffect, useState} from 'react';

function MyComponent() {
    const [array, setArray] = useState(['65ef4ded536284e0ebd31426', 'zuni', undefined, undefined, undefined]);


    useEffect(() => {
        const filteredArray = array.filter(item => item !== undefined);
        setArray(filteredArray);
    }, []);

    return (
        <div>
            <h2>Filtered Array:</h2>
            <ul>
                {array.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default MyComponent;
