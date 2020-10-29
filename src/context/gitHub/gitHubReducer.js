import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from "../types"

const handlers = {
    [CLEAR_USERS]: (state) => ({...state, users: []}),//чистим список 
    [SEARCH_USERS]: (state, action) => ({...state, users: action.payload, loading: false}),//из-за того что возвращаемый объект является объектом, сначала круглые скобки а поом фигурные.  разворачиваем state, записываем в users данные из action (потому что называется SEARCH_USERS) поэтому только users || loading: false - чтобы убрать загрузчик
    [GET_REPOS]: (state,{payload}) => ({...state, repos: payload, loading: false}), //в аргументах вмсто action сразу расскріли и вітащили payload, поэтому не repos: action.payload, а repos: payload
    [GET_USER]: (state,action) => ({...state, user: action.payload, loading: false}),
    [SET_LOADING]: state => ({...state, loading: true}),
    DEFAULT: (state) => state
}


export const GitReducer = (state, action) => {

    const handler = handlers[action.type] || handlers.DEFAULT

    return handler(state, action)
}