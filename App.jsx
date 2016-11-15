import React from 'react';

class App extends React.Component {
	 render() {
			 
			return (
				 <div>
				 		<Header/>
						<Content/>
						<Footer/>
				 </div>
			);
	 }
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>Header</h1>
			</div>
		);
	}
}
class Content extends React.Component {
	render() {
		var myStyle = {
				fontSize: 20,
				color: '#ff0000'
		}
		return (
			<div>
				<h1 style= {myStyle} >Hello React Developers!!!</h1>
			</div>
		);
	}
}
class Footer extends React.Component {
	render() {
		return (
			<div>
				<h2>Footer</h2>
			</div>
		);
	}
}
export default App;