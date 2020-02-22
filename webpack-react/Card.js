import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Search from '../Search/Search.js';

const Card = () => {
	
	return (
		<Fragment>
		    <img src={''} alt={''} className="card-img-top" />
			<div className="card-body">
				<h5 className="card-title">Title</h5>
				<Link to={{pathname: '/profile/' + 'name1'}} className="btn btn-primary">Открыть</Link>
			</div>
		</Fragment>
	);
}

export default Card