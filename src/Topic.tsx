import { useContext } from 'react'
import { CountContext } from './App'

const Topics: React.FC = () => {
  const ctx = useContext(CountContext)
  // return <CountContext.Consumer>{(ctx) => ctx.count}</CountContext.Consumer>
  return (
    <>
      <button
        onClick={() => {
          ctx.incrementCount()
        }}
      >
        topic
      </button>
      <h3>{ctx.count}</h3>
    </>
  )
}
export default Topics
