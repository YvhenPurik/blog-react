import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store'

const store = configureStore(/* provide initial state if any */)
 
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
      <> { /* your usual react-router v4/v5 routing */ }
        <Switch>
             <Route exact path='/' component={Home}/>
             <Route exact path='/contact' component={Contact}/>
             <Route path='*' render={() => (<h1>PAGE NOT FOUND</h1>)}/>
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)