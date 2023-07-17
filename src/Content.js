import { useState } from 'react';

const Content = () => {
    const [name, setName] = useState('Rohith');
    const [count, setCount] =useState(0);

    const handleNameChange = () => {
        const names = ['Rohith', 'Likhith', 'Kavya'];
        const int = Math.floor(Math.random()*3);
        setName(names[int]);
    }

    const handleClick = () => {
        console.log(count);
        setCount(count+1);
    }
    const handleClick2 = () => {
        console.log(count);
    }
    const handleClick3 = () => {
        console.log(count);
    }

    return(
        <main>
            <p>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClick}>Click it</button>
            <button onClick={handleClick2}>Click it</button>

        </main>
    )
}

export default Content