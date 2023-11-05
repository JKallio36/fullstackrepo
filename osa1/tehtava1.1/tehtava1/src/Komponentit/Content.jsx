const Content = ({ content }) => {
	const parts = content.map((part, index) => <Part key={index} part={part.part} exercises={part.exercises} />);

	return <div className="Content">{parts}</div>;
};

const Part = ({ part, exercises }) => {
	return (
		<div>
			<p>Part: {part}</p>
			<p>Exercises: {exercises}</p>
		</div>
	);
};

export default Content;
