import Header from './Komponentit/Header';
import Content from './Komponentit/Content';
import Total from './Komponentit/Total';

const App = () => {
	const course = ['Half Stack application development'];
	const content = [
		{ part: 'Fundamentals of React', exercises: 10 },
		{ part: 'Using props to pass data', exercises: 7 },
		{ part: 'State of a component', exercises: 14 },
	];

	return (
		<>
			<Header course={course} />
			<Content content={content} />
			<Total content={content} />
		</>
	);
};

export default App;
