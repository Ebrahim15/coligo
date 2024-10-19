import React from 'react'
import './home.css'

type homeProps = {
    setLoggedIn: Function
}

const Home = ({ setLoggedIn }: homeProps) => {
    const handleLoginOnClick = () => {
        setLoggedIn(true)
    }

    return (
        <div>
            <h1>Coligo</h1>
            <button onClick={handleLoginOnClick}>Login</button>
        </div>
    )
}

export default Home;