// Tüm uygulamaya açılacak merkezi state leri ekle
// slice ları ekle

import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/theme-slice"; // buradaki import theme-slice sayfasındaki 17 satır yani defaultu import etti {} olsaydı 16 satır ı kullanırdı***
import localSlice from "./slices/locale-slices";
import counterSlice from "./slices/counter-slice";

export default configureStore({
	// slices içinde oluşturaun here slice için reducer objesine ekleme yapıyoruz configure ediyoruz
	reducer: {
		theme: themeSlice,
		locale: localSlice,
		counter: counterSlice,
	},
});
