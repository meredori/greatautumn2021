import { configureStore } from '@reduxjs/toolkit'
import harvestReducer from './stores/counter/harvestSlice'
import moneyReducer from './stores/counter/moneySlice'
import fieldReducer from './stores/game/fieldSlice'

export default configureStore({
  reducer: {
    harvest: harvestReducer,
    money: moneyReducer,
    fields: fieldReducer
  },
})