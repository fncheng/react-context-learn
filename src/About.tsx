import { useContext } from 'react'
import { MyContext } from './App'

const About: React.FC = () => {
  const { state, dispatch } = useContext(MyContext)
  return (
    <>
      <button onClick={() => dispatch({ type: 'increment' })}>reducer</button>
      <h3>{state.count}</h3>
    </>
  )
}
export default About
