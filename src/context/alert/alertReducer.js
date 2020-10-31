import {HIDE_ALERT, SHOW_ALERT} from './../types'

const handlers = {
    [SHOW_ALERT] : (state, action) => action.payload,
    [HIDE_ALERT] : () => null,
    DEFAULT : (state) => state
}

/*  переписано на объект handlers, более красиво и им проще управлять
export const AlertReducer = (state, action) => {
    switch(action.type) {
        case SHOW_ALERT: {
            return action.payload //вернет то, что написано в action 
        }
        case HIDE_ALERT: {
            return null //скроем 
        }
        default: {
            return state
        }
    }

} */

export const AlertReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT //в переменную положим нужный тип или возьмем значение по дефолту 

    return handler(state, action) // вызываем handler с этими параметрами 
}