import logger from "./utils/logs/logger";
import { readXMLFile } from "./utils/prasers/xmlParser";


const main = async() => {
  
  const data = await readXMLFile("src/data/toy orders.xml");
  logger.info(data);
}


main();