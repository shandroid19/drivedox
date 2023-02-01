import { configureStore } from "@reduxjs/toolkit";
import filesreducer from './slices/fileslices'
export default configureStore({
    reducer:{
        files: filesreducer,
    },
})