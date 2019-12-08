import React from 'react';
import logo from './logo.svg';
import './App.css';
import Good from './Good/Good';
import Car from './Car/Car';
import Cars from './Cars/Cars';
import Data from './Data/Data';
import All from './All/All';
import Second from './Second/Second';
import Users from './Users/Users';
import {Route, Link} from 'react-router-dom';

export default function App () {
	
	
	
	function Hendler () {
		alert('Yes');
	}
	function ch1 (event) {
		const value = event.target.value
		//const value = this.CheckInput.value;
		alert(value);	
		var place1 = document.querySelector('#placerer1')
		place1.innerHTML = value;
	}
	
	

    //Если бы App был компонентом
	//state = {
		//cars: [
		//{name="Vyacheslav", carname="Tesla Model S"},
		//{name="Vyacheslav", carname="VAZ 2105"},
		//{name="Vyacheslav", carname="TOYOTA CORONA"},
		//]
	//}
	//const cars = this.state.cars
	return (
 	<All>
 	<h2>Hello, World!</h2>
 	<Good name="milk" Hand={Hendler} />
 	<Good name="eggs" Hand={Hendler}><p style={{color: 'blue'}}>Action</p></Good>
 	<button id="b1" onClick={Hendler}>Click</button>
 	<input type="text" placeholder="Введите текст"
 	onChange={ch1} id="in1"></input>
 	
 	<p id="placerer1" style={{height: '40px', color: 'black'}}></p>
 	
 	<nav>
 	<Link to={{pathname: '/'}}>1</Link>
 	<Link to={{pathname: '/second', search: '?IraSuck', hash: 'wfm-hash'}}>2</Link>
 	<Link to={{pathname: '/third'}}>3</Link>
 	<Link to={{pathname: '/four'}}>4</Link>
 	<Link to={{pathname: '/users'}}>5</Link>
 	</nav>
 	<Route path="/" exact/>
    <Route path="/second" component={Second} exact/>
 	<Route path="/third" component={Data} exact/>
 	<Route path="/four" component={Cars} exact/>
 	<Route path="/users" component={Users} exact/>
 	</All>
);
  
}


