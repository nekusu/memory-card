function Button(props) {
  const {
    icon,
    label,
    title,
    handleClick,
    iconToRight = false,
    className = '',
  } = props;

  return (
    <button
      className={`Button ${className}`}
      type="button"
      title={title}
      onClick={handleClick}
    >
      {!iconToRight && icon}
      {label}
      {iconToRight && icon}
    </button>
  );
}

export default Button;
