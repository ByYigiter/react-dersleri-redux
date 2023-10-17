import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
	//create slice  bir obje gönderiyoruz bu obje 3 key den oluşur name,initialState ve reducers
	name: "theme",
	initialState: {
		darkMode: false,
	},
	reducers: {
		setDarkMode: (state, action) => {
			//paremetre olarak state ve  gerekirse action veriyoruz
			state.darkMode = action.payload; // actiondan gelen yani setterdan kullanıcıdan gelen değeri merkezi state deki değişkene aktar
		},
	},
});
export const { setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
