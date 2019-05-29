function produceDrivingRange(block){
  return function(start, end){
    let diff = Math.abs(parseInt(end.slice(0,2)) - parseInt(start.slice(0,2)));
    return (diff > block)? `${ diff - block } blocks out of range` : `within range by ${ block - diff }`;
  }
}

function produceTipCalculator(percentage){
  return function(tip){
    return tip * percentage;
  }
}