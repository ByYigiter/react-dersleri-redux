import { createSlice } from "@reduxjs/toolkit";
import { langs } from "../../helpers/locale-helper";

export const localSlice = createSlice({
    name:"locale",
    initialState:{
        lang:{ title:"English",code:"en",country:"gb"},
        currency:"usd"
    },
    reducers:{
        setLang:(state,action)=>{
            state.lang = action.payload; // gelen dili kullanıcını seçtiği merkezi statein dili yap
        }
    }
})

export const {setLang}=localSlice.actions;
export default localSlice.reducer;