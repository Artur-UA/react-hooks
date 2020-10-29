import React, {useReducer} from 'react'
import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from '../types'
import {GitContext} from './gitHubContext'
import { GitReducer } from './gitHubReducer'
import axios from 'axios'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;


export const GitState = ({children}) => {
    
    const initialState = { //изначальное состояние state 
        user: {},
        users: [],
        loading: false,
        repos: []
    }
    
    const [state, dispatch] = useReducer(GitReducer, initialState)

    const search = async value => { //async потому что запрос на сервер 
        
        setLoading() //чтобы работал загручик, пока сервер отвечает 

        //.сделали благодаря axios 
        const response = await axios.get(
            `https://api.github.com/search/users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`//посылаем запрос на сервер
        )

        dispatch({
            type: SEARCH_USERS,
            payload: response.data.items //данные с сервера  с переменной response
        })
    }

    const getUser = async name => {//событие загрузки имени
        setLoading() //чтобы работал загручик, пока сервер отвечает 
        //...сделаем благодаря axios 

        dispatch({
            type: GET_USER,
            payload: {} //данные с сервера 
        })
    }

    const getRepos = async name => {//событие загрузки репозитория
        setLoading() //чтобы работал загручик, пока сервер отвечает 
        //...сделаем благодаря axios

        dispatch({
            type: GET_REPOS,
            payload: []
        })

    }

    const clearUser = () => {//событие очищение списка 

        dispatch({
            type: CLEAR_USERS
        })
    }

    const setLoading = () => { //событие загрузчика 

        dispatch({
            type: SET_LOADING
        })
    }


    const {user, users, repos, loading} = state // разбираем state на отдельные элементы 


    return (
        <GitContext.Provider value={{  //передаем все методы, чтобы их можно было использовать в тех компонентах, которые будут подключать в себя этот контекст 
            setLoading, clearUser, getRepos, getUser, search, 
            user, users, repos, loading // также делаем доступны для других компоненото значения, по которым мы работаем \\ по этому мы их также экспортируем 

        }}>
            {children}
        </GitContext.Provider>
    )
}
