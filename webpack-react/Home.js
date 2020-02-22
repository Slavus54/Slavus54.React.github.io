import React, {Fragment} from 'react';
import Search from '../Search/Search.js';
import Card from '../Card/Card.js';

const Home = () => {
	const cards = new Array(6)
    .fill('')
    .map((_, i) => i)
  console.log(cards)
	return (
		<Fragment>
		<Search />
		<ul className="row-cards">
			 {cards.map(card => {
          		return (
            		<div key={card}>
             		<Card />
            		</div>
          		)
        	})}
		</ul>
		</Fragment>
	);
}

export default Home