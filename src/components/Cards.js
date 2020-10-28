import React from 'react'
import {Link} from 'react-router-dom'

export const Cards = () => {
    return(
        <div className='card'>
            <div className='card-body'>
                <h3 className='card-title'>Привет</h3>
                <Link to={'/profile/'}>Хеллоу</Link>
            </div>

        </div>
    )
}