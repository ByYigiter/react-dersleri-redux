import { useSelector } from "react-redux";
import store from "../store";
import { setLang } from "../store/slices/locale-slices";

// const lang = useSelector(state=>state.locale.lang)
// usestate kullanmak yerine store u import edip oradan state ulaşada biliriz çünkü component olmadan useSelector hookunu kullanamıyoruz

export const langs = [
	{ title: "English", code: "en", country: "gb" },
	{ title: "Turkish", code: "tr", country: "tr" },
	{ title: "Franch", code: "fr", country: "fr" },
];
// state ulaşmak için
export const getCurrentLang = () => {
	return store.getState().locale.lang;
};
// state i güncellemek için
export const setCurrentLang = (lang) => {
	store.dispatch(setLang(lang));
};

//translate function
export const $t = (key) => {
	const currentLang = getCurrentLang();
	const langFile = require(`../helpers/langs/${currentLang.code}.json`);
	return langFile[key];
};
