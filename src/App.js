import React from 'react'
import {Navbar} from './components/NavBar'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Profile} from './pages/Profile'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Alert} from './components/Alert'
import {AlertState} from './context/alert/alertState'
import { GitState } from './context/gitHub/gitHubState'

function App() {
  return (
    <GitState>
        <AlertState>
            <BrowserRouter> 
                <Navbar />
                <div> 
                    <div className="container pt-4"> 
                        <Alert alert={{text: 'Alert test'}}/> {/*без прописаных параметров не будет работать. первые скобки о том что пишем в чисто js вторые скобки что передаем объект/ text поле обьязательно должно быть*/ }
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/about' component={About}/>
                            <Route path='/profile/:name' component={Profile}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </AlertState>
    </GitState>
    );
}

export default App;
