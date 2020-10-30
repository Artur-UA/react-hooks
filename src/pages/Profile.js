import React, {useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { GitContext } from '../context/gitHub/gitHubContext'
import {Repos} from './../components/Repos'


export const Profile = ({match}) => {
    
    const gitHub = useContext(GitContext)
    
    useEffect ( ()=> { //используем хук, когда загрузится после render 
        gitHub.getUser(match.params.name) //получаем имя из базы
        gitHub.getRepos(match.params.name) //подучаем репозитории
        // eslint-disable-next-line
    }, []) //второй параметр идет список зависимостей, на которые будет обращать внимание 


    if (gitHub.loading) {
        return <p className='text-center'>Loading...</p>
    }

    const { //просто вытягиваем нужные параметры из контекста gitHub 
        name, company, avatar_url, location, bio, //инфа которая приходит из Гита
        blog, login, html_url, followers, following, public_repos, public_gists
    } = gitHub.user


    return (
        <> 
            <h1>Profile</h1>
            <Link to="/" className='btn btn-link'>
                <button>To home page</button>
            </Link>

            <div className='card mb-4'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-sm-3 text-center'> {/*столбик предназначен только на 3 колонки, поэтому после 3-х делаем новый div*/}

                            <img 
                                src={avatar_url} 
                                alt={name}
                                style={{width: '250px' }}
                            />
                            <h1>{name}</h1>
                            {location && <p> Местоположение: {location} </p>} {/*Если есть жилье, покажет этот пунскт  */}
                            
                        </div>
                        <div className='col'>
                            
                            {bio && <>
                                <h3>BIO</h3>
                                <p>{bio}</p>
                            </>}

                            <a href={html_url} target="_blank" rel="noreferrer" className='btn btn-dark'>Open profile</a>
                            
                            <ul> {/*будет показывать списком данные, если они будут в наличии */}
                                {login && <li>
                                    <strong>Username: {login}</strong>
                                </li>}

                                {company && <li>
                                    <strong>Company: {company}</strong>
                                </li>}

                                {blog && <li>
                                    <strong>Blog: {blog}</strong>
                                </li>}

                            </ul>

                                <div className='badge badge-primary'>Followers: {followers}</div>
                                <div className='badge badge-success'>Following: {following}</div>
                                <div className='badge badge-info'>Repository: {public_repos}</div>
                                <div className='badge badge-dark'>Gists {public_gists}</div>

                        </div>  
                    </div>
                </div>
            </div>

            <Repos repos={gitHub.repos}/>

        </>
    )
}