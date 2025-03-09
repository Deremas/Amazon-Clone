import React from "react";
import numeral from "numeral"

function CurrencyFormater({ amount }) {
  const formattedAmount = numeral(amount).format("$0,0.00");
  return <div>{formattedAmount}</div>;
}

export default CurrencyFormater;
