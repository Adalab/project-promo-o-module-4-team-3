const Input = (props) => {
  const handleSetInput = (ev) => {
    props.handleInput(ev.currentTarget.name, ev.currentTarget.value);
  };
  return (
    <>
      <label htmlFor={props.htmlFor} className="form__label">
        {props.label}
        <span className="required">*</span>
      </label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        pattern={props.pattern}
        className="form__input"
        required={props.required}
        value={props.value}
        onChange={handleSetInput}
      />
    </>
  );
};

export default Input;
