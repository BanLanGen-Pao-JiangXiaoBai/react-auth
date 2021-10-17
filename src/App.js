import logo from './logo.svg';
import './App.css';
import { Search, Icon, Nav, Shell } from '@alifd/next';
import {HashRouter as Router , Switch,Route} from 'react-router-dom'
import routerConfig from './routerConfig'
import {Suspense} from 'react'

function App() {
  return (
    <Router>
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          {
            routerConfig.map(item=>{
              return (
                <Route path={item.path} key={item.path} component={item.component}/>
              )
            })
          }
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
