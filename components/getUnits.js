import units from "../public/champList.json";
import set4 from "../public/set4.json";
export const getUnits = (set) => {
  if (set == 3) {
    return units;
  } else if (set == 4) {
    return set4;
  }
};
