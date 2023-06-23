// createStore 已被废弃使用configureStore替代,该文件暴露store
import {configureStore} from '@reduxjs/toolkit'
import countReducer from './count_reducer'

// 暴露store
export default configureStore({
    reducer:{
        count : countReducer
    }
})