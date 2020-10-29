import React, {useContext, useState} from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { GitContext } from '../context/gitHub/gitHubContext'

export const Search = () => {

  const {show} = useContext(AlertContext) //вытягиваем show из контекста AlertContext
  const gitHub = useContext(GitContext) //вытягиваем все из контекста GitContext

  const [stateValue, setValue] = useState('')  //stateValue так мы называем сам state(название может быть любым),  setValue это функция которая позволяет менять state(название может быть любым). в useState передается начальное значение данного состояния 

  const onSubmit = (event) => { //делаем функцию, которая принимает event, и если event.key(нажали на клавишу) равно enter то будет 
    
    //if (event.key === 'Enter') {  //и если event.key(нажали на клавишу) равно enter то будет 
      //show('This is work') //запускает функцию show которую мы берем как контекст alertContext,  и показывает This is work
        //console.log(stateValue); //покажет что в stateValue, тоесть все что написали в input 

    if (event.key !== 'Enter') { //если клавиша НЕ Enter, то мы 
        return //ничего не будем делать если нажали на другую клавишу и покинем const onSubmit, а если нет то продолжим
    } 

    if (stateValue.trim()) { //если нажал на enter (потому что нажатие любой клавишы не enter приведет к выходу из const onSubmit(смотреть выше)) и там после обрезке пробелов (trim()) чтото есть, то
        console.log('Make job with: ', stateValue); //фраза плюс то, что записали в input 

        gitHub.search(stateValue.trim())

    } else { //тоесть если нажали enter а в input пусто 
        show('Empty line, write something') //покажем alert с этим тукстом
    }
  }

  return (
      <div className='form-group'>
        <input
            type='text'
            className='form-control'
            placeholder='Send username'
            onKeyPress={onSubmit}
            value={stateValue}//значение получит из нашего значения stateValue(которое равно ''), но если мы чтото напишем в инпуте, соответственно заполнится value которое равняется stateValue(тоесть stateValue будет то, что мы напишем в input )
            onChange={event => setValue(event.target.value)}//
        />
      </div>
    )
}