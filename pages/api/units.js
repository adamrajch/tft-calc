import units from "../../public/champList.json";

export default (req, res) => {
  res.status(200).json(units);
};
