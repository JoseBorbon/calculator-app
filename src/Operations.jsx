const Operations = ({
  currOp,
  setCurrOp,
  calculate,
  convertDecimal,
  setOnEquals,
}) => {
  const handleOps = (evt) => {
    //if Op is not defined
    if (!currOp) {
      setCurrOp(evt.target.value);
      return;
    }
    setOnEquals(false);
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

  return (
    <>
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
