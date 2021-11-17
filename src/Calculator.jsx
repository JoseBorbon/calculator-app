import React, { useState } from 'react';
import Buttons from './Buttons';

const Calculator = () => {
  const [prev, setPrev] = useState(0);
  const [curr, setCurr] = useState(null);
  const [display, setDisplay] = useState('0');
  const [currOp, setCurrOp] = useState(null);
  const [prevNumOp, setPrevNumOp] = useState(0);
  const [onEquals, setOnEquals] = useState(false);
  const [isPercent, setIsPercent] = useState(false);

  const formatDisplay = Number(display).toLocaleString('en-US', {
    maximumFractionDigits: 16,
  });
  const formatDisplayWithZeroAfterDecimal = Number(display).toLocaleString(
    'en-US',
    {
      maximumFractionDigits: 16,
      minimumFractionDigits: 1,
    }
  );
  //use these patterns to get display to show up a specific way
  const regex1 = /[0-9]+\./;
  const regex2 = /[0-9]+\.[0]+/;
  const regex3 = /[0-9]+\.[0-9]+/;

  return (
    <div className="Calculator">
      <div className="result">
        <div className="Calculator-display">
          {regex2.test(display)
            ? formatDisplayWithZeroAfterDecimal
            : regex3.test(display)
            ? formatDisplay
            : regex1.test(display)
            ? formatDisplay + '.'
            : formatDisplay}
        </div>
      </div>
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
        isPercent={isPercent}
        setIsPercent={setIsPercent}
      />
    </div>
  );
};

export default Calculator;
