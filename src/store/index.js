// Tüm uygulamaya açılacak merkezi state leri ekle
// slice ları ekle

import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/theme-slice";
import localSlice  from "./slices/locale-slices";
import counterSlice from "./slices/counter-slice";

export default configureStore({
    reducer:{
        theme:themeSlice,
        locale:localSlice,
        counter:counterSlice
    }
})