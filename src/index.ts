import logger from "./utils/logs/logger";
import { readCSVFile } from "./utils/parsers/csvParser";


const main = async() => {
  const data = await readCSVFile('src/data/cake orders.csv');
  data.forEach((row) => {
    logger.info(typeof row)
  })
  
//   const data = await readXMLFile("src/data/toy orders.xml");
//   logger.info(data);
}


main();