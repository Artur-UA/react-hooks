import React, {useContext} from 'react'
import { AlertContext } from '../context/alert/alertContext'

export const Search = () => {

  const {show} = useContext(AlertContext)

  const onSubmit = (event) => { //делаем функцию, которая принимает event, и если event.key(нажали на клавишу) равно enter то будет 
    if (event.key === 'Enter') { 
      show('This is work')
    }
  }

  return (
      <div className='form-group'>
        <input
            type='text'
            className='form-control'
            placeholder='Send username'
            onKeyPress={onSubmit}
        />
      </div>
    )
}