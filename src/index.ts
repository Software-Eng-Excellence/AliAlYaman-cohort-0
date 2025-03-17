import { readCSVFile } from "./utils/parser";
import { CSVCakeMapper } from "./mappers/Cake.mapper";
import logger from "./utils/logger";




const main = async() => {
  const data = await readCSVFile('src/data/cake orders.csv');

  const cakeMapper = new CSVCakeMapper();
  data.map(cakeMapper.map);

  logger.info("List of cakes : %o", data)
}


main();