import { createSlice } from '@reduxjs/toolkit'

export const moneySlice = createSlice({
    name: 'money',
    initialState: {
      value: 10,
    },
    reducers: {
      increment: (state) => {
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { increment, decrement, incrementByAmount } = moneySlice.actions
  
  export default moneySlice.reducer