import React, {useContext} from 'react'
import { GitContext } from '../context/gitHub/gitHubContext'
import {Search} from './../components/Search'
import {Cards} from './../components/Cards' 

export const Home = () => {

    

    const gitHubInfo = useContext(GitContext)

    return (
      <>
        <Search/>
        <div className='row'>

            {gitHubInfo.loading 
                ? <p className='text-center'>Loading...</p>
                
                : gitHubInfo.users.map( user => {
                    return (
                        <div className='col-sm-4 mb-4' key={user.id}>
                            <Cards user={user} />
                        </div>
                    )
                })
                
            }
            
          

        </div>
      </>
    )
}