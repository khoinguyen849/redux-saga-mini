import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { actions } from './counterSlice'

export default function App() {
  const count = useSelector((s: RootState) => s.counter.value)
  const loading = useSelector((s: RootState) => s.counter.loading)
  const error = useSelector((s: RootState) => s.counter.error)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div style={{ fontFamily: 'ui-sans-serif, system-ui', padding: 24 }}>
      <h1>Redux-Saga mini: counter</h1>
      <p>Count: {count}</p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => dispatch(actions.increment())}>+1</button>
        <button onClick={() => dispatch(actions.decrement())}>-1</button>
        <button onClick={() => dispatch(actions.incrementAsyncRequested(5))} disabled={loading}>
          {loading ? 'Loading…' : 'Increment 5 after 800ms (saga)'}
        </button>
      
      </div>
      {error && <p style={{ color: 'crimson' }}>Error: {error}</p>}
    </div>
  )
}
