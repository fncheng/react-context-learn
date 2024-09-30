import './styles.css'
import { BrowserRouter, Switch, Route, Link, useHistory } from 'react-router-dom'
import Topics from './Topic'
import React, {
    createContext,
    Reducer,
    ReducerAction,
    useContext,
    useReducer,
    useState
} from 'react'
import { createSlice } from '@reduxjs/toolkit'
import About from './About'
import store, { RootState } from './store/store'
import { increament } from './store/counterSlice'
import { Provider, useDispatch, useSelector } from 'react-redux'

interface CountContext {
    count: number
    incrementCount: () => void
}

export const CountContext = createContext({
    count: 0,
    incrementCount() {}
})

interface State {
    count: number
}
type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' }
interface ContextType {
    state: State
    dispatch: React.Dispatch<Action>
}

export const MyContext = createContext<ContextType>({
    state: { count: 0 },
    dispatch: () => {}
})
const myReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case 'reset':
            return { count: state.count }
        default:
            throw new Error()
    }
}

export default function App() {
    const context = useContext(CountContext)
    const [count, setCount] = useState(context.count)
    const incrementCount = () => {
        setCount(count + 1)
    }

    const ctx = useContext(MyContext)
    const [state, dispatch] = useReducer(myReducer, ctx.state)

    const mydispatch = useDispatch()
    const counter = useSelector((state: RootState) => state.counter.count)

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
                <div>count: {count}</div>
                <button onClick={() => incrementCount()}>number+1</button>
                <div>{state.count}</div>
                <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
                <div>
                    redux: {counter}
                    <button onClick={() => mydispatch(increament())}>redux</button>
                </div>

                <Switch>
                    <Route path='/about'>
                        <MyContext.Provider value={{ state, dispatch }}>
                            <About />
                        </MyContext.Provider>
                    </Route>
                    <Route path='/topics'>
                        <CountContext.Provider value={{ count, incrementCount }}>
                            <Topics />
                        </CountContext.Provider>
                    </Route>
                    <Route path='/'>Home</Route>
                </Switch>
            </BrowserRouter>
    )
}
