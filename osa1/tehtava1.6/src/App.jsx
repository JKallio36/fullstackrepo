import { useState } from 'react';

const Statistics = (props) => {
	return (
		<div>
			<p>Hyvät: {props.good}</p>
			<p>Neutraalit: {props.neutral}</p>
			<p>Huonot: {props.bad}</p>
			<p>KAIKKI ÄÄNET: {props.all}</p>
		</div>
	);
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [all, setAll] = useState(0);
	const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

	const average = (good + neutral * 0 + bad * -1) / all;
	const positivePercentage = (good / all) * 100;

	const handleClickGood = () => {
		console.log('painettiin nappia 1');
		setAll(all + 1);
		setGood(good + 1);
	};
	const handleClickNeutral = () => {
		console.log('painettiin nappia 2');
		setAll(all + 1);
		setNeutral(neutral + 1);
	};
	const handleClickBad = () => {
		console.log('painettiin nappia 3');
		setAll(all + 1);
		setBad(bad + 1);
	};

	return (
		<div>
			<h1>Unicafe asiakaspalautteet</h1>
			<Button handleClick={handleClickGood} text="HYVÄ" />
			<Button handleClick={handleClickNeutral} text="NEUTRAALI" />
			<Button handleClick={handleClickBad} text="HUONO" />
			<h2>Tulokset</h2>
			<Statistics good={good} neutral={neutral} bad={bad} all={all} />
			<p>Keskiarvo: {isNaN(average) ? 0 : average}</p>
			<p>Positiiviset arvostelut: {isNaN(positivePercentage) ? 0 : positivePercentage}%</p>
		</div>
	);
};

export default App;
