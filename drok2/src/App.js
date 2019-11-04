import React from 'react';
import logo from './logo.svg';
import './App.css';
import Good from './Good/Good';
import Car from './Car/Car';
import Data from './Data/Data';
import All from './All/All';

export default function App () {
	
	
	
	function Hendler () {
		alert('Yes');
	}
	function ch1 (event) {
		const val1 = event.target.value
		alert(val1);	
		var place1 = document.querySelector('#placerer1');
		place1.innerHTML += val1;
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
 	<Car name="Vyacheslav" carname="Tesla Model S"><p style={{color: 'red'}}>Great</p></Car>
 	<Car name="Vyacheslav" carname="VAZ 2105" />
 	<Car name="Vyacheslav" carname="TOYOTA CORONA" />
 	<p id="placerer1" style={{height: '40px', color: 'black'}}></p>
 	<Data/>
 	</All>
);
  
}


