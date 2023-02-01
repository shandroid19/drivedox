import { configureStore } from "@reduxjs/toolkit";
import fileslices from './slices/fileeslices'
export default configureStore({
    reducer:{
        files: filesreducer,
    },
})