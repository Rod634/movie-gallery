import React, { useState } from 'react'
import Search from './components/Search'

function App() {

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <main>
            <div className='pattern' />
            <div className='wrapper'>
                <img src='hero.png' alt='hero image' />
                <header>
                    <h1>Find <span className='text-gradient'>Movies</span> You'll Love Without the Hassle</h1>
                </header>

                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
        </main>
    )
}

export default App