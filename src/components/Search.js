import React, {useContext, useState} from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { GitContext } from '../context/gitHub/gitHubContext'

export const Search = () => {

  const alert = useContext(AlertContext) 
  const gitHub = useContext(GitContext) 

  const [stateValue, setValue] = useState('')  

  const onSubmit = (event) => { 
    
  
    if (event.key !== 'Enter') { 
        return 
    } 

    gitHub.clearUser()

    if (stateValue.trim()) { 
        console.log('Make job with: ', stateValue); 

        gitHub.search(stateValue.trim())

        alert.hide()

    } else { 
        alert.show('Empty line, write something') 
    }
  }

  return (
      <div className='form-group'>
        <input
            type='text'
            className='form-control'
            placeholder='Send username'
            onKeyPress={onSubmit}
            value={stateValue}
            onChange={event => setValue(event.target.value)}//
        />
      </div>
    )
}