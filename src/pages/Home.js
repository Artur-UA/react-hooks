import React, {useContext} from 'react'
import { GitContext } from '../context/gitHub/gitHubContext'
import {Search} from './../components/Search'
import {Cards} from './../components/Cards' 

export const Home = () => {

    /* пример как создать массив с 0 до 14 и показат его в коносли и на странице  со словами привет  хеллоу ('./../components/Cards' )  чтобы его отрисовать нужно в return вставить код ниже-ниже
    const cards = new Array(15).fill('').map((_, i ) => i) // сделали массив, fill(ээ) сделает, чтобы он не какбы чтото содержал(на самом деле содержит пустоту), разбили его и методом перебора прошлись по нему. первый параметр(содержание) нам не нужен(там всеравно пустота), а вот второй параметр нужен. это индекс. .в итоге у нас вышел массив с 0 по 14 
    console.log(cards)

    
    //код ниже вставлется в  return 
    {cards.map( card => {//вставка чистого js где мы копируем блок 15 раз(const cards)
        return (
            <div className='col-sm-4 mb-4' key={card}>
                <Cards/>
            </div>
        )
    })
    }
    */

    const gitHubInfo = useContext(GitContext)

    return (
      <>
        <Search/>
        <div className='row'>

            {gitHubInfo.loading  //если есть то включит загрузчик который віведет строку загрузка по центру 
                ? <p className='text-center'>Loading...</p>
                
                : gitHubInfo.users.map( user => {//если данные уже есть, то загрузчик переходит в false, и покажет что загрузило с сервера 
                    return (
                        <div className='col-sm-4 mb-4' key={user.id}>
                            <Cards user={user} /> {/*отправляем данные которые мы получаем из сервера (user) в компонент Cards */}
                        </div>
                    )
                })
                
            }
            
          

        </div>
      </>
    )
}