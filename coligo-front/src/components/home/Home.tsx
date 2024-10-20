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
        <div className='home'>
            <h1>Welcome to Coligo</h1>
            <button onClick={handleLoginOnClick}>Login</button>
        </div>
    )
}

export default Home;