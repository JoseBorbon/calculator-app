import React, { useState } from 'react';
import Buttons from './Buttons';

const Calculator = () => {
  const [prev, setPrev] = useState(0);
  const [display, setDisplay] = useState('0');
  const [curr, setCurr] = useState(null);
  const [currOp, setCurrOp] = useState(null);

  const formatDisplay = Number(display).toLocaleString('en-US', {
    maximumFractionDigits: 16,
  });
  return (
    <div>
      {currOp === '.' && !formatDisplay.includes('.')
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
      />
    </div>
  );
};

export default Calculator;
