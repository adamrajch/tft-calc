const champ_db = {
  "caitlyn": {"cost": 1, "pool": 29, "all": 377},
  "fiora": {"cost": 1, "pool": 29, "all": 377},
  "graves": {"cost": 1, "pool": 29, "all": 377}
};

const lvl_db = {
    1: [1, 0, 0, 0, 0],
    2: [1, 0, 0, 0, 0],
    3: [0.75, 0.25, 0, 0, 0],
    4: [0.55, 0.3, 0.15, 0, 0],
    5: [0.4, 0.35, 0.2, 0.05, 0],
    6: [0.25, 0.35, 0.3, 0.1, 0],
    7: [0.19, 0.3, 0.35, 0.15, 0.01],
    8: [0.14, 0.2, 0.35, 0.25, 0.25, 0.06],
    9: [0.1, 0.15, 0.3, 0.3, 0.15]
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

const Calc = ({champ, level, taken, otherTaken, gold, duplicate}) => {
    champ = "caitlyn"
    let available = champ_db[champ].all - taken - otherTaken;
    let p_c = (champ_db[champ].pool - taken) / available;
    let p_s = 1 - Math.pow(1-p_c,5)
    let cost = champ_db[champ]["cost"];
    return p_s*lvl_db[level][cost-1]  // factor in level dist
}
export default Calc;
