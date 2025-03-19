import logger from "./utils/logger";
import { readCSVFile } from "./utils/parser";


const main = async() => {
  const data = await readCSVFile('src/data/cake orders.csv');
  data.forEach((row) => {
    logger.info(row)
  })
  
}


main();