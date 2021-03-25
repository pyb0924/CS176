const BigNumber = require('bignumber.js');
console.log(.1 + .2); // 0.30000000000000004

// bignumber.js 解决方案
const x = new BigNumber(0.1);
const y = 0.2
console.log(parseFloat(x.plus(y)));

console.log(x.plus(y)==0.3)


console.log(Math.abs(.1+.2-0.3)<1e-10);