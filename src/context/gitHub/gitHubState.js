import React, {useReducer} from 'react'
import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from '../types'
import {GitContext} from './gitHubContext'
import { GitReducer } from './gitHubReducer'
import axios from 'axios'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;


const websiteEnd = (url) => {  // сделали конст чтобы добавлять окончание к запросу(конец не меняется) функция получает url и к нему добавляет конец(который мы написали в return)
    return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}

export const GitState = ({children}) => {
    
    const initialState = { //изначальное состояние state 
        user: {},
        users: [],
        loading: false,
        repos: []
    }
    
    const [state, dispatch] = useReducer(GitReducer, initialState)

    const search = async value => { //async потому что запрос на сервер //покажет всю инфу которая есть на сервере 
        
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

    const getUser = async name => {//событие загрузки имени, тоесть мы написали имя и отправили запрос есть ли оно в базе 
        setLoading() //чтобы работал загручик, пока сервер отвечает 
        
        //сделали благодаря axios 
        const response = await axios.get(
            //`https://api.github.com/users/${name}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`//посылаем запрос на сервер  в name это то что мы напишем на сайте и его будет искать в базе   

            websiteEnd(`https://api.github.com/users/${name}?`)   //переписал это для примера с использование новой функции, которая добавляет текст в конце, чуть выше оригинал с объяснением
        )


        dispatch({
            type: GET_USER,
            payload: response.data //данные с сервера 
        })
    }

    const getRepos = async name => {//событие загрузки репозитория конкретного человека(которого мы напишем на странице)
        setLoading() //чтобы работал загручик, пока сервер отвечает 
        
        //...сделаем благодаря axios
        const response = await axios.get(
            websiteEnd(`https://api.github.com/users/${name}/repos?per_page=5&`) //per_page=5 означает показать на странице не больше 5 репозиториев(данных)  & в конце чтобы добавили норм данные для конца(из функции websiteEnd)
        )

        dispatch({
            type: GET_REPOS,
            payload: response.data
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