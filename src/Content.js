const Content = () => {
    const handleNameChange = () => {
        const names = ['Rohith', 'Likhith', 'Kavya'];
        const int = Math.floor(Math.random()*3);
        return names[int];
    }

    const handleClick = () => {
        console.log('you clicked')
    }
    const handleClick2 = (name) => {
        console.log(`${name} clicked it`)
    }

    return(
        <main>
            <p>
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick}>Click it</button>
            <button onClick={() => handleClick2('Rohith')}>Click it</button>
            
        </main>
    )
}

export default Content