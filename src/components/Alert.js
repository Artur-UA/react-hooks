import React, {useContext} from 'react'
import { AlertContext } from '../context/alert/alertContext'

export const Alert = () => { //передаем в условие props и уже из него достаем alert 
    const {alert, hide} = useContext(AlertContext)

    if(!alert) return null

    return (
        <div 
            className={`alert alert-${alert.type || 'secondary'} alert-dismissible`} // будем давать клас alert.type(тут будут передаватся цвета) чтобы были другие цвета, если ничего не будет, будет класс alert-secondary(чтобы по умолчанию он имел фиксированый цвет)
            role="alert">

            {alert.text}
            <button type="button" className="close" aria-label="Close" onClick={hide}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}