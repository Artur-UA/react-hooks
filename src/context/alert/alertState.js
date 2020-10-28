import React, {useReducer} from 'react' //useReducer это хук 
import { HIDE_ALERT, SHOW_ALERT } from '../types'
import {AlertContext} from './alertContext'
import { AlertReducer } from './alertReducer'

export const AlertState = ({children}) => {

    const [state, dispatch] = useReducer(AlertReducer, null)  //при візове useReducer мы должны в аргументы передать (первым)название редьюсера, вторым начальное состояние
    const hide = () => dispatch({type: HIDE_ALERT})

    const show = (text, type = 'secondary') => {
        dispatch({
            type: SHOW_ALERT,
            payload: {type, text}
        })
    }

    return (
        <AlertContext.Provider value={{// value это объект куда мы передаем нужные данные 
            hide, show, alert: state //передали функции show, hide, и также передаю параметр alert который внутри себя имеет state 
        }}>
            {children}
        </AlertContext.Provider>
    )
}//по сути это компонент который выводит детей(которых он оборачивает. в нашем случае все приложение ) 
//но теперь есть прова дер и контекст к которому мы можем получать доступ из любых  компонентов

//в єтом файле будет писаться логика и state. которіе будут изменять а в самом alert.js будем просто получать доступ к контексту и выводить необходимые данные