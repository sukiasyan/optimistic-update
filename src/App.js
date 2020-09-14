import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get } from 'lodash';

import { getPikachu, getRaichu } from './pokemonActions';
import './App.css';

import { Checkbox } from "@material-ui/core";


class App extends React.Component {
	componentDidMount() {
		const { getPikachu } = this.props;
		getPikachu();
	}

	renderStartOverButton() {
		const { pokemon, getPikachu } = this.props;

		const pokemonName = get(pokemon, 'forms[0].name');

		if (pokemonName === 'pikachu') {
			return null;
		}
		return (
			<div className="start-over-button">
				<button onClick={getPikachu}>Start Over</button>
			</div>
		);
	}

	renderError() {
		const { error } = this.props;

		if (!error) {
			return null;
		}

		return (
			<h6 className="error">{`${error}, pikachu doesn't want to evolve!`}</h6>
		);
	}

	render() {
		const { pokemon, getRaichu, error } = this.props;

		const pokemonImg = get(pokemon, 'sprites.front_default');

		if (!pokemonImg && !error) {
			return <div>Loading . . .</div>;
		}

		const pokemonName = get(pokemon, 'name');
		let message = (
			<span>
				<p>Click to evolve</p>
				<img
					src="https://cdn.bulbagarden.net/upload/thumb/e/e7/Thunder_Stone_BW135.png/250px-Thunder_Stone_BW135.png"
					className="thunder-stone"
					alt="thunder-stone"
				></img>
			</span>
		);
		let animationClass = '';

		if (pokemonName === 'raichu') {
			message = <p>Congrats on your new Raichu!</p>;
			animationClass = 'grow';
		}

		return (
			<div className="container">
				{this.renderStartOverButton()}
				<div onClick={getRaichu}>
					<img
						src={pokemonImg}
						className={animationClass}
						alt="pokemon"
					/>
					<h6>{message}</h6>
				</div>
				<Checkbox />
				{this.renderError()}
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
		getPikachu: bindActionCreators(getPikachu, dispatch),
		getRaichu: bindActionCreators(getRaichu, dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
