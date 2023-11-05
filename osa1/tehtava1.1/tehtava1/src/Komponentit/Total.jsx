const Total = (props) => {
	const { content } = props;
	const propsCount = content.reduce((total, currentValue) => total + currentValue.exercises, 0);
	return <p className="Total">Number of exercises: {propsCount}</p>;
};

export default Total;
