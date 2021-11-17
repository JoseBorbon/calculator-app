const Operations = ({
  currOp,
  setCurrOp,
  calculate,
  convertDecimal,
  onEquals,
  setOnEquals,
  negate,
}) => {
  const handleOps = (evt) => {
    if (!currOp) {
      setCurrOp(evt.target.value);
      return;
    }
    if (onEquals === true) {
      setOnEquals(false);
      setCurrOp(evt.target.value);
      return;
    }
    calculate();
    setCurrOp(evt.target.value);
  };

  const handleDecimal = () => {
    convertDecimal();
  };

  const handleCalc = () => {
    setOnEquals(true);
    calculate();
  };

  const handleNegate = () => {
    negate();
  };

  return (
    <>
      <input
        className="negate"
        type="button"
        value="+/-"
        onClick={() => handleNegate()}
      />
      <input
        className="two-op"
        type="button"
        value="/"
        onClick={(e) => handleOps(e)}
      />
      <input
        className="two-op"
        type="button"
        value="x"
        onClick={(e) => handleOps(e)}
      />
      <input
        className="two-op"
        type="button"
        value="-"
        onClick={(e) => handleOps(e)}
      />
      <input
        className="two-op"
        type="button"
        value="+"
        onClick={(e) => handleOps(e)}
      />
      <input
        className="num"
        type="button"
        value="."
        onClick={() => handleDecimal()}
      />
      <input
        className="two-op"
        type="submit"
        value="="
        onClick={() => handleCalc()}
      />
    </>
  );
};

export default Operations;
