import { readCSVFile } from "./utils/parser";
import { CSVCakeMapper } from "./mappers/Cake.mapper";
import logger from "./utils/logger";
import { CSVOrderMapper } from "./mappers/Order.mapper";




const main = async() => {
  const data = await readCSVFile('src/data/cake orders.csv');
  const cakeMapper = new CSVCakeMapper();
  const orderMapper = new CSVOrderMapper(cakeMapper);
  const orders = data.map(orderMapper.map.bind(orderMapper));

  logger.info("List of orders : %o", orders)
}


main();