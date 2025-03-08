import logger from "./utils/logs/logger";
import { readCSVFile } from "./utils/parsers/csvParser";


const main = async() => {
  const data = await readCSVFile('src/data/cake orders.csv');
  data.forEach((row) => {
    logger.info(row)
  })
  
}


main();