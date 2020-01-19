import React from 'react';

export default function All (props) {
	return (
		<div style={{background: 'white', height: '500px', position: 'relative', display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}}>
		{props.children}
		</div>
	);
}