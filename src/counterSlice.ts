import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CounterState = {
  value: number
  loading: boolean
  error: string | null
}

const initialState: CounterState = { value: 0, loading: false, error: null }

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },

    // intents for saga-driven flow
    incrementAsyncRequested: (state, _action: PayloadAction<number>) => {
      state.loading = true
      state.error = null
    },
    incrementAsyncSucceeded: (state, action: PayloadAction<number>) => {
      state.value += action.payload
      state.loading = false
    },
    incrementAsyncFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.loading = false
    },
  },
})

export const actions = counterSlice.actions
export default counterSlice.reducer
