import { IMapper } from "./IMapper";
import { OrderBuilder } from "../model/builders/Order.builder";
import { IOrder } from "../model/IOrder";
import { IItem } from "../model/IItem";

export class CSVOrderMapper implements IMapper <string[], IOrder>{

    constructor (private itemMapper : IMapper<string[], IItem>){

    }


    map(data: string[]): IOrder {
        const item = this.itemMapper.map(data);
        const order =new OrderBuilder();
        order.setId(data[0])
        .setItem(item)
        .setPrice(parseInt(data[15]))
        .setQuantity(parseInt(data[16]))
        return  order.build();
    }

}