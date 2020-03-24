import React from 'react';
import {useState} from 'react';
import './App.css';
import { Button, Input } from 'antd';
import { PlusCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';
//import {Context} from './context/State';

const App = () => {
  const [data, setData] = useState('')
  const onSubmit = (e) => {
      e.preventDefault();
      let place = document.getElementById('result');
      place.innerHTML += `<li>${data}</li>`+`<br />`
  }
  // onDelete () {
	// // let NewItem = this.state.items.filter(el => {
	// // 	return el = i.target
	// // })
	// // const current = this.state.items.pop(e);
	// // let NewItem = this.state.items.filter(el => !current.includes(el))
	// // this.setState({
	// // 	items: [current]
	// // })
	// // let newItems = this.state.items.splice(index, 1)
	// // this.setState({
  //   //     items: [newItems]
  //   // })
  // }
    return (
    <div className="container">
		<h1>Machen App</h1>
		<h3>mit zustand</h3>
        <form className="Todos" onSubmit={onSubmit}>
          <Input id="special-input" value={data} style={{width: '250px'}} onChange={e => setData(e.target.value)} />
          <Button danger onClick={onSubmit}><PlusCircleOutlined />hinzufügen</Button>
        {/* {items.map((item, index) => <li key={index}>{item}</li>)} */}
          {/* <ul>
            {
               items.map((item, index) => <li key={index}>{item}</li>)
            }
          </ul> */}
        </form>
        <div id="result"></div>
    </div>
    );

}

export default App