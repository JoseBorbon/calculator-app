const Operations = ({ currOp, setCurrOp, calculate, convertToDec }) => {
  const handleOps = (evt) => {
    //if Op is not defined
    if (!currOp) {
      setCurrOp(evt.target.value);
      return;
    }

    while (currOp === '.') {
      convertToDec();
    }

    calculate();
    setCurrOp(evt.target.value);
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
        onClick={() => handleOps()}
      />
      <input className="two-op" type="submit" value="=" />
    </>
  );
};

export default Operations;
