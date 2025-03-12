import { readJSONFile } from "./utils/parsers/jsonParser";
import logger from "./utils/logs/logger";
import { readCSVFile } from "./utils/parsers/csvParser";
import { readXMLFile } from "./utils/parsers/xmlParser";


const main = async() => {
  // const data = await readJSONFile('tests/utils/data/dummy.json');
  // console.log(data)
  
  const data = await readXMLFile("tests/utils/data/dummy.xml");
  console.log(data)
}


main();