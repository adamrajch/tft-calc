import { Popup } from "semantic-ui-react";

const lvl_db = {
  1: [1, 0, 0, 0, 0],
  2: [1, 0, 0, 0, 0],
  3: [0.75, 0.25, 0, 0, 0],
  4: [0.55, 0.3, 0.15, 0, 0],
  5: [0.4, 0.35, 0.2, 0.05, 0],
  6: [0.25, 0.35, 0.3, 0.1, 0],
  7: [0.19, 0.3, 0.35, 0.15, 0.01],
  8: [0.14, 0.2, 0.35, 0.25, 0.25, 0.06],
  9: [0.1, 0.15, 0.3, 0.3, 0.15],
};

function product_Range(a, b) {
  var prd = a,
    i = a;

  while (i++ < b) {
    prd *= i;
  }
  return prd;
}

function combinations(n, r) {
  if (n == r) {
    return 1;
  } else {
    r = r < n - r ? n - r : r;
    return product_Range(r + 1, n) / product_Range(1, n - r);
  }
}

var f = [];
function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  if (f[n] > 0) {
    return f[n];
  }
  return (f[n] = factorial(n - 1) * n);
}

const rand_set = () => {
  let one_costs = champ_db.filter((one_cost) => one_cost.cost == 1);
  let rand_one = one_costs[Math.floor(Math.random() * one_costs.length)];
  let two_costs = champ_db.filter((two_cost) => two_cost.cost == 2);
  let rand_two = two_costs[Math.floor(Math.random() * two_costs.length)];
  let three_costs = champ_db.filter((three_cost) => three_cost.cost == 3);
  let rand_three = three_costs[Math.floor(Math.random() * three_costs.length)];
  let four_costs = champ_db.filter((four_cost) => four_cost.cost == 4);
  let rand_four = four_costs[Math.floor(Math.random() * four_costs.length)];
  let five_costs = champ_db.filter((five_cost) => five_cost.cost == 5);
  let rand_five = five_costs[Math.floor(Math.random() * five_costs.length)];

  return [rand_one, rand_two, rand_three, rand_four, rand_five];
};

const Calc = ({ champ, level, taken, otherTaken, gold, duplicate }) => {
  if (gold % 2 === 1) {
    gold = gold - 1;
  }
  // console.log("fact: "+String(factorial(0)))
  let cost = champ.cost;
  let available = champ.all - taken - otherTaken;
  let p_c = ((champ.pool - taken) / available) * lvl_db[level][cost - 1]; // probability to get in a cell
  let p_s_zero = Math.pow(1 - p_c, 5); // probability to get 0 in shop
  let p_s_one = 1 - p_s_zero; // probability to get in at least 1 in shop
  let p_s_one_e = Math.pow(p_c, 1) * Math.pow(1 - p_c, 4) * combinations(5, 1); // probability to get exactly 1 in shop
  let p_s_two =
    1 -
    Math.pow(1 - p_c, 5) -
    Math.pow(p_c, 1) * Math.pow(1 - p_c, 4) * combinations(5, 1); // probability to get at least 2 in a shop
  let p_s_two_e = Math.pow(p_c, 2) * Math.pow(1 - p_c, 3) * combinations(5, 2);
  // console.log("pc: "+String(p_c));
  // console.log("zero shop: "+String(p_s_zero))
  // console.log("one e: "+String(p_s_one_e));
  // console.log("two e: "+String(p_s_two_e));
  let first_result = 100 * (1 - Math.pow(p_s_zero, gold / 2)); // p(X>=1) = 1 - p(X=0)
  // p(X>=2) = 1 - p(X=0) - p(X=1)
  let result_two_zero = Math.pow(p_s_zero, gold / 2); // p(x=0)
  let result_two_one =
    Math.pow(p_s_one_e, 1) *
    Math.pow(p_s_zero, gold / 2 - 1) *
    combinations(gold / 2, 1); // p(x=1)
  let second_result = 100 * (1 - result_two_zero - result_two_one);
  // console.log("g/2: "+String(factorial((gold/2)-2)));
  let result_three_zero = Math.pow(p_s_zero, gold / 2); // p(x=0)
  let result_three_one =
    Math.pow(p_s_one_e, 1) *
    Math.pow(p_s_zero, gold / 2 - 1) *
    combinations(gold / 2, 1); // p(x=1)
  let result_three_two_one = 0;
  if (gold === 2) {
    result_three_two_one = 0;
  } else {
    // result_two_one = Math.pow(p_s_one_e,2)*Math.pow(p_s_zero, (gold/2)-2)*factorial(gold/2)/factorial((gold/2)-2);
    result_three_two_one =
      Math.pow(p_s_one_e, 2) *
      Math.pow(p_s_zero, gold / 2 - 2) *
      combinations(gold / 2, 2);
  }
  let result_three_two_two =
    Math.pow(p_s_two_e, 1) *
    Math.pow(p_s_zero, gold / 2 - 1) *
    combinations(gold / 2, 1);
  // console.log("zero total: "+String(result_zero));
  // console.log("one total: "+String(result_one));
  // console.log("two one: "+String(result_two_one));
  // console.log("two two: "+String(result_two_two));
  // console.log("FINAL ANSWER: "+String(1-result_zero-result_one-result_two_one-result_two_two))
  let third_result =
    100 *
    (1 -
      result_three_zero -
      result_three_one -
      result_three_two_one -
      result_three_two_two);
  console.log([first_result, second_result, third_result]);

  let returnedAnswer = [first_result, second_result, third_result];
  console.log(returnedAnswer);
  for (let i = 0; i < returnedAnswer.length; i++) {
    //if you can round normally
    if (returnedAnswer[i] >= 1) {
      returnedAnswer[i] = returnedAnswer[i].toFixed(2);
    }
    //find the first non 0 digit and round after than index
    else {
      let str = returnedAnswer[i].toString();

      for (let k = 0; k < str.length; k++) {
        if (str[k] !== "0" && str[k] !== ".") {
          console.log(returnedAnswer[i]);
          returnedAnswer[i] = returnedAnswer[i].toFixed(k);
          break;
        }
      }
    }
  }

  // return [
  //   first_result.toFixed(2),
  //   second_result.toFixed(2),
  //   third_result.toFixed(2),
  // ];
  console.log(returnedAnswer);
  return returnedAnswer;
};

// let wang = rand_set();
// return wang
export default Calc;
