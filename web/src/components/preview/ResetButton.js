function ResetButton(props) {
	const handleClick = (ev) => {
		ev.preventDefault();
		props.handleReset(ev.currentTarget);
	};
	return (
		<button className="preview__reset js-reset" type="reset" onClick={handleClick}>
			<p className="preview__reset--text">Reset</p>
			<i className="far fa-trash-alt preview__reset--icon"></i>
		</button>
	);
}

export default ResetButton;
