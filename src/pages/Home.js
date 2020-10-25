import React from 'react'
import {Search} from './../components/Search'
import {Cards} from './../components/Cards'

export const Home = () => {
    const cards = new Array(15).fill('').map((_, i ) => i) // сделали массив, разбили его и методом перебора прошлись по нему. в итоге у нас вышел массив с 0 по 14 
    console.log(cards)
    return (
      <>
        <Search/>

        <div className='row'>

            {cards.map( card => {//вставка чистого js где мы копируем блок 15 раз(const cards)
                return (
                    <div className='col-sm-4 mb-4' key={card}>
                        <Cards/>
                    </div>
                )
            })
            }
          

        </div>
      </>
    )
}