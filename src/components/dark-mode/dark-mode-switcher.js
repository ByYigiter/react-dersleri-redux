import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../../store/slices/theme-slice";
import { $t } from "../../helpers/locale-helper";

const DarkModeSwitcher = () => {
	const darkMode = useSelector((state) => state.theme.darkMode); // dark modeu merkezi stateden almak için kullanılır
	const dispatch = useDispatch(); // değiştirmek için kullanılır
	return (
		<div>
			<Form.Check
				className="m-5"
				type="switch"
				id="dmSwitch"
				label={darkMode ? $t("dark-mode") : $t("light-mode")}
				checked={darkMode}
				onChange={() => dispatch(setDarkMode(!darkMode))}
			/>
		</div>
	);
};
export default DarkModeSwitcher;
