import logger from "./utils/logs/logger";
import { readCSVFile } from "./utils/prasers/csvParser";


const main = async() => {
  const data = await readCSVFile('src/data/bakery.csv');
  data.forEach((row) => {
    logger.info(row)
  })
  
}


main();