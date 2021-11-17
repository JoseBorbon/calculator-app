import Operations from './Operations';

const Buttons = ({
  display,
  setDisplay,
  prev,
  setPrev,
  curr,
  setCurr,
  currOp,
  setCurrOp,
  ops,
  setPrevNumOp,
  prevNumOp,
  onEquals,
  setOnEquals,
  isPercent,
  setIsPercent,
}) => {
  const handleDisplay = (evt) => {
    //if prev is not defined and currentOperation is not defined
    if (!prev && !currOp) {
      setDisplay(evt.target.value);
      setPrev(evt.target.value);
    } else if (prev && !currOp) {
      setDisplay(prev + evt.target.value);
      setPrev(prev + evt.target.value);
      //if curr is not defined and current Operation is decimal
    } else if (!curr && currOp === '.') {
      setDisplay(prev + evt.target.value);
      setPrev(prev + evt.target.value);
    } else if (!curr) {
      setDisplay(evt.target.value);
      setCurr(evt.target.value);
      //if curr is defined and current Operation is decimal
    } else if (curr && currOp === '.') {
      setDisplay(curr + evt.target.value);
      setCurr(curr + evt.target.value);
    } else {
      setDisplay(curr + evt.target.value);
      setCurr(curr + evt.target.value);
    }
  };

  const calculate = () => {
    if (currOp === null) return;
    if (onEquals) {
      setPrev(ops[currOp](Number(prev), Number(prevNumOp)));
      setDisplay(ops[currOp](Number(prev), Number(prevNumOp)));
      return;
    }
    setPrev(ops[currOp](Number(prev), Number(curr)));
    setDisplay(ops[currOp](Number(prev), Number(curr)));
    setCurr(null);
    setPrevNumOp(curr);
  };

  const negate = () => {
    if (!prev) return;
    if (!curr && prev) {
      setPrev(String(-display));
      setDisplay(String(-display));
      return;
    }
    if (curr) {
      setCurr(String(-curr));
      setDisplay(String(-display));
    } else {
      setPrev(String(-prev));
      setDisplay(String(-display));
    }
  };

  const convertDecimal = () => {
    //if current is null
    if (prev === 0) {
      setDisplay(0 + '.');
      setPrev(0 + '.');
    } else if (!curr && prev) {
      if (String(prev).includes('.')) return;
      setDisplay(prev + '.');
      setPrev(prev + '.');
    } else if (curr === null) {
      setDisplay(0 + '.');
      setCurr(0 + '.');
    } else if (!String(curr).includes('.')) {
      setDisplay(curr + '.');
      setCurr(curr + '.');
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDisplay(prev);
      }}
    >
      <input
        className="clear"
        type="button"
        value="AC"
        onClick={() => {
          setDisplay('0');
          setPrev(null);
          setCurr(null);
          setCurrOp(null);
          setOnEquals(false);
        }}
      />
      <input
        className="percent"
        type="button"
        value="%"
        onClick={() => alert('percent is under construction')}
      />
      <input
        className="seven"
        type="button"
        value="7"
        onClick={(e) => handleDisplay(e)}
      />
      <input
        className="eight"
        type="button"
        value="8"
        onClick={(e) => handleDisplay(e)}
      />
      <input
        className="nine"
        type="button"
        value="9"
        onClick={(e) => handleDisplay(e)}
      />
      <input
        className="four"
        type="button"
        value="4"
        onClick={(e) => handleDisplay(e)}
      />
      <input
        className="five"
        type="button"
        value="5"
        onClick={(e) => handleDisplay(e)}
      />
      <input
        className="six"
        type="button"
        value="6"
        onClick={(e) => handleDisplay(e)}
      />
      <input
        className="one"
        type="button"
        value="1"
        onClick={(e) => handleDisplay(e)}
      />
      <input
        className="two"
        type="button"
        value="2"
        onClick={(e) => handleDisplay(e)}
      />
      <input
        className="three"
        type="button"
        value="3"
        onClick={(e) => handleDisplay(e)}
      />
      <input
        className="zero"
        type="button"
        value="0"
        onClick={(e) => handleDisplay(e)}
      />
      <Operations
        currOp={currOp}
        setCurrOp={setCurrOp}
        calculate={calculate}
        convertDecimal={convertDecimal}
        onEquals={onEquals}
        setOnEquals={setOnEquals}
        negate={negate}
      />
    </form>
  );
};

Buttons.defaultProps = {
  ops: {
    '+': (prev, curr) => prev + curr,
    '-': (prev, curr) => prev - curr,
    '/': (prev, curr) => prev / curr,
    x: (prev, curr) => Number(prev) * Number(curr),
  },
};

export default Buttons;
