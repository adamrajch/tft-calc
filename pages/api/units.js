// import units from "../../public/champList.json";
import { getUnits } from "../../components/getUnits";

export default (req, res) => {
  res.status(200).json(getUnits());
};
