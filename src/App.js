import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { getRaichu } from './pokemonActions';
import './App.css';

import { Checkbox } from "@material-ui/core";


class App extends React.Component {
	// componentDidMount() {
	// 	const { getPikachu } = this.props;
	// 	getPikachu();
	// }


	render() {
		const { pokemon, getRaichu } = this.props;

		console.log(pokemon)

		return (
			<div className="container">
					<Checkbox onClick={getRaichu} checked={ pokemon ?? false}/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		pokemon: state.pokemon,
		error: state.error
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getRaichu: bindActionCreators(getRaichu, dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
