import { configureStore } from '@reduxjs/toolkit'
import breadcrumbReducer from '../features/breadcrumb/breadcrumbSlice'

export default configureStore({
    reducer: {
        breadcrumb: breadcrumbReducer,
    },
})