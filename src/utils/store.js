import { configureStore } from '@reduxjs/toolkit'

import pacerReducer from './pacerSlice'

export const store = configureStore({
  reducer: {
    newPacer : pacerReducer,
  },
})

