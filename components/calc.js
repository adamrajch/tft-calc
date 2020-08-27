import champ_db from "../public/champList.json";
console.log("wang");
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

function product_Range(a,b) {
  var prd = a,i = a;
 
  while (i++< b) {
    prd*=i;
  }
  return prd;
};

function combinations(n, r) 
{
  if (n==r) 
  {
    return 1;
  } 
  else 
  {
    r=(r < n-r) ? n-r : r;
    return product_Range(r+1, n)/product_Range(1,n-r);
  }
};

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
    // return gold;
    if (duplicate == 1) {
        let available = champ.all - taken - otherTaken;
        let p_c = (champ.pool - taken) / available; // probability to get in a cell
        let p_s = 1 - Math.pow(1 - p_c, 5); // probability to get in a shop. not taking into account cost dist
        let cost = champ.cost;
        let p_s_l = p_s*lvl_db[level][cost - 1]; // probability to get in a shop taking into account level dist
        let result = 0;
        let roll = 1;
        let roll_probability = 0;
        for (roll=1; roll<=gold/2; roll++) {
            roll_probability = Math.pow(p_s_l,roll)*Math.pow(1-p_s_l,(gold/2)-roll)*combinations(gold/2,roll)
            result = result + roll_probability;
        }
        return Math.round(result*100);

    }
    else {return "wang"}
  // let wang = rand_set();
  // return wang
};
export default Calc;
