import React, {useContext} from 'react';
import './Alert.css';
import {AppContext} from './State';

export const Alert = () => {
	const {statue} = useContext(AppContext);
	if (!statue) {
		return null
	} 
	return (
		<div className="alert-main">
		{statue.text}
		</div>
	);

}