import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from "../types"

const handlers = {
    [CLEAR_USERS]: (state) => ({...state, users: []}),
    [SEARCH_USERS]: (state, action) => ({...state, users: action.payload, loading: false}),
    [GET_REPOS]: (state,{payload}) => ({...state, repos: payload, loading: false}), 
    [GET_USER]: (state,action) => ({...state, user: action.payload, loading: false}),
    [SET_LOADING]: state => ({...state, loading: true}),
    DEFAULT: (state) => state
}


export const GitReducer = (state, action) => {

    const handler = handlers[action.type] || handlers.DEFAULT

    return handler(state, action)
}