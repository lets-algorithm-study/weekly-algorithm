// https://leetcode.com/problems/richest-customer-wealth/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let highNum = 0;

  for (let i = 0; i < accounts.length; i = i + 1) {
    let eachUserMoney = 0;
    accounts[i].map((item) => {
      eachUserMoney += item;
    });
    if (highNum <= eachUserMoney) {
      highNum = eachUserMoney;
    }
  }
  return highNum;
};
