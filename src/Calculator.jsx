import React, { useState } from 'react';
import Buttons from './Buttons';

const Calculator = () => {
  const [prev, setPrev] = useState(0);
  const [curr, setCurr] = useState(null);
  const [display, setDisplay] = useState('0');
  const [currOp, setCurrOp] = useState(null);
  const [prevNumOp, setPrevNumOp] = useState(0);
  const [onEquals, setOnEquals] = useState(false);

  const formatDisplay = Number(display).toLocaleString('en-US', {
    maximumFractionDigits: 16,
  });
  //if string contains number and decimal dont add more decimals to format
  const regex1 = /[0-9]+\./;
  const regex2 = /[0-9]+\.[0-9]+/;

  return (
    <div>
      {regex2.test(display)
        ? formatDisplay
        : regex1.test(display)
        ? formatDisplay + '.'
        : formatDisplay}
      <Buttons
        display={display}
        setDisplay={setDisplay}
        prev={prev}
        setPrev={setPrev}
        curr={curr}
        setCurr={setCurr}
        currOp={currOp}
        setCurrOp={setCurrOp}
        prevNumOp={prevNumOp}
        setPrevNumOp={setPrevNumOp}
        onEquals={onEquals}
        setOnEquals={setOnEquals}
      />
    </div>
  );
};

export default Calculator;
