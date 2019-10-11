import React, { Component } from 'react';
import AppRoutes from './routes';
import './index.css';

class App extends Component {

	render() {
		return(
			<React.Fragment>
				<AppRoutes />
			</React.Fragment>		
		);
	}
}

export default App;
