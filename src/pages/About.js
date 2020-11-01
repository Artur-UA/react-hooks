import React from 'react'

export const About = () => {
    return (
      <>
        <h1>About</h1>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Information</h1>
                <p className="lead">This is a GitHub search. Write your login in the search box and press Enter.</p>
               
                <hr/>Version<strong> 1.0.0</strong>
                <p className='lead'></p>
            </div>
        </div>
      </>
    )
}