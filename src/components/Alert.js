import React from 'react'

export const Alert = ({alert}) => { //передаем в условие props и уже из него достаем alert 

    return (
        <div 
            className={`alert alert-${alert.type || 'secondary'} alert-dismissible`} // будем давать клас alert.type(тут будут передаватся цвета) чтобы были другие цвета, если ничего не будет, будет класс alert-secondary(чтобы по умолчанию он имел фиксированый цвет)
            role="alert">

            {alert.text}
            <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}