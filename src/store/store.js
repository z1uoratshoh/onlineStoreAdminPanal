import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../reducers/autentification/loginSlice'
import deshboardSlice from '../reducers/deshboard/deshboardSlice'
import cotegoriesSlice from '../reducers/other/cotegoriesSlice/cotegoriesSlice'
import  brendSlice  from '../reducers/other/brends/brendsSlice'
import orderSlice from '../reducers/order/orderSlice'


export default configureStore({
  reducer: {
    login : loginSlice,
    deshboard : deshboardSlice,
    cotegories : cotegoriesSlice,
    brends : brendSlice,
    order : orderSlice
  },
})