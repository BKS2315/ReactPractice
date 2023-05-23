function Button(props) {
  const { text, click, count } = props;
  return (
    <button disabled={count === 0} onClick={click}>
      {" "}
      {text}{" "}
    </button>
  );
}
export default Button;
