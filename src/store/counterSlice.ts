/**
 * Redux
 */

import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
  count: number
}

const initialState: CounterState = { count: 100 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increament: (state) => {
      console.log('increament', state)
      state.count + 1
    },
    decreament: (state) => {
      state.count - 1
    }
  }
})

export const { increament, decreament } = counterSlice.actions

export default counterSlice.reducer