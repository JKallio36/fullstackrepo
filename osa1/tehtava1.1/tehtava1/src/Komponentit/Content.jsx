const Content = (props) => {
	return (
		<div className="Content">
			{props.content.map((part, index) => (
				<div key={index}>
					<p>{part.part}</p>
					<p>{part.exercises}</p>
				</div>
			))}
		</div>
	);
};

export default Content;
