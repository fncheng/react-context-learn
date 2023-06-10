import './styles.css'
import { BrowserRouter, Switch, Route, Link, useHistory } from 'react-router-dom'
import Topics from './Topic'

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/topics'>Topics</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path='/about' render={()=> <span>About</span>}>
        </Route>
        <Route path='/topics' component={Topics}>
        </Route>
        <Route path='/'>
          Home
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
