const champ_db = {
  "caitlyn": {"cost": 1, "pool": 29, "all": 377},
  "fiora": {"cost": 1, "pool": 29, "all": 377},
  "graves": {"cost": 1, "pool": 29, "all": 377}
};

const lvl_db = {
    1: [5, 0, 0, 0, 0],
    2: [5, 0, 0, 0, 0],
    3: [3.75, 1.25, 0, 0, 0],
    4: [2.75, 1.5, 0.75, 0, 0],
    5: [2, 1.75, 1, 0.5, 0],
    6: [1.25, 1.75, 1.5, 0.5, 0],
    7: [0.95, 1.5, 1.75, 0.75, 0.05],
    8: [0.7, 1, 1.75, 1.25, 0.3, 0.75],
    9: [0.5, 0.75, 1.5, 1.5, 0.75]
}
//   "Illaoi", cost: 1, pool: 29 },
//   "Jarvan", cost: 1, pool: 29 },
//   "Leona", cost: 1, pool: 29 },
//   "Malphite", cost: 1, pool: 29 },
//   "Nocturne", cost: 1, pool: 29 },
//   "Poppy", cost: 1, pool: 29 },
//   "Twisted", cost: 1, pool: 29 },
//   "Xayah", cost: 1, pool: 29 },
//   "Ziggs", cost: 1, pool: 29 },
//   "Zoe", cost: 1, pool: 29 },
//   "Lucian", cost: 2, pool: 22 },
//   "Kog'Maw", cost: 2, pool: 22 },
//   "Ahri", cost: 2, pool: 22 },
//   "Blitzcrank", cost: 2, pool: 22 },
//   "Annie", cost: 2, pool: 22 },
//   "Darius", cost: 2, pool: 22 },
//   "Shen", cost: 2, pool: 22 },
//   "Rakan", cost: 2, pool: 22 },
//   "Nautilus", cost: 2, pool: 22 },
//   "Mordekaiser", cost: 2, pool: 22 },
//   "Xin", cost: 2, pool: 22 },
//   "Zed", cost: 2, pool: 22 },
//   "Yasuo", cost: 2, pool: 22 },
//   "Karma", cost: 3, pool: 18 },
//   "Jayce", cost: 3, pool: 18 },
//   "Bard", cost: 3, pool: 18 },
//   "Ashe", cost: 3, pool: 18 },
//   "Cassiopeia", cost: 3, pool: 18 },
//   "Ezreal", cost: 3, pool: 18 },
//   "Syndra", cost: 3, pool: 18 },
//   "Shaco", cost: 3, pool: 18 },
//   "Rumble", cost: 3, pool: 18 },
//   "Master", cost: 3, pool: 18 },
//   "Neeko", cost: 3, pool: 18 },
//   "Vi", cost: 3, pool: 18 },
//   "Vayne", cost: 3, pool: 18 },
//   "Jhin", cost: 4, pool: 12 },
//   "Jinx", cost: 4, pool: 12 },
//   "Gnar", cost: 4, pool: 12 },
//   "Irelia", cost: 4, pool: 12 },
//   "Fizz", cost: 4, pool: 12 },
//   "Soraka", cost: 4, pool: 12 },
//   "Riven", cost: 4, pool: 12 },
//   "Viktor", cost: 4, pool: 12 },
//   "Teemo", cost: 4, pool: 12 },
//   "Wukong", cost: 4, pool: 12 },
//   "Lulu", cost: 5, pool: 10 },
//   "Janna", cost: 5, pool: 10 },
//   "Aurelion", cost: 5, pool: 10 },
//   "Ekko", cost: 5, pool: 10 },
//   "Gangplank", cost: 5, pool: 10 },
//   "Urgot", cost: 5, pool: 10 },
//   "Thresh", cost: 5, pool: 10 },
//   "Xerath", cost: 5, pool: 10 },
// ]};

const Calc = (champ, lvl, taken, otherTaken, gold, dup) => {
    let available = champ_db["caitlyn"].all - taken - otherTaken;
    let expected = (champ_db["caitlyn"].pool - taken) / available;
    let cost = champ_db["caitlyn"]["cost"]
    return expected*lvl_db[lvl][cost-1]
}
export default Calc;
