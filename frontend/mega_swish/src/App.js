import logo from './logo.svg';
import './App.css';
import React from 'react';

// function App() {
//   fetch('/http://127.0.0.1:8000/get-products')
//   .then(response => response.json())
//   .then(products => {
//     products.forEach(product => {
//       const newProduct = document.createElement('div');
//       newProduct.innerText = product.title;
//     })
//   })
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: <div></div>
		};
	}

	async componentDidMount() {
		

		fetch('http://127.0.0.1:8000/get-products')
		.then(response => response.json())
		.then(products => {
			// products.forEach(product => {
			// 	const newProduct = <div>{product.title}</div>;
			// 	this.setState(state => ({
			// 		products: [...state.products, newProduct]
			// 	}));
			// 	// newProduct.innerText = product.title;
			// })

			products.forEach(product => {
				console.log(product.title);
			})
		})
	}

	// async componentDidMount() {

    //                 fetch('/save')
    //                 .then(response => response.json())
    //                 .then(data => {
    //                     data.forEach(task => {
    //                         const element = <li>{task.content}</li>
    //                         this.setState(state => ({
    //                             tasks: [...state.tasks, element]
    //                         }));
    //                     })
    //                 })
    //             }

	render() {
		return (
			<div>
				{this.state.products}
			</div>
		)
	}
}

export default App;
