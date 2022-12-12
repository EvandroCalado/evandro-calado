const InputField = ({
  id,
  onChange,
  onBlur,
  label,
  isTextArea = false,
  hasError,
}) => {
  const commonProps = {
    id,
    name: id,
    onChange: (e) => onChange(e.target.value),
    onBlur: () => onBlur(true),
  };

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {!isTextArea && <input {...commonProps} type="text" />}
      {isTextArea && <textarea {...commonProps} rows="10"></textarea>}
      {hasError && <span className="error">Campo inválido</span>}
    </div>
  );
};

export default InputField;
