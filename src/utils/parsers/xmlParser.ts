import { parseStringPromise } from "xml2js";
import * as fs from "fs/promises";
import * as fsSync from "fs";

export async function readXMLFile(filePath: string): Promise<any> {
  try {
    const xmlString = await fs.readFile(filePath, "utf-8");
    const result = await parseStringPromise(xmlString, { trim: true, normalize: true, strict: true });
    return result.data.row.map((row: any) => ({
      OrderID: row.OrderID[0],
      Type: row.Type[0],
      AgeGroup: row.AgeGroup[0],
      Brand: row.Brand[0],
      Material: row.Material[0],
      BatteryRequired: row.BatteryRequired[0],
      Educational: row.Educational[0],
      Price: parseFloat(row.Price[0]),
      Quantity: parseInt(row.Quantity[0], 10),
    }));
  } catch (error: any) {
    throw new Error(`Failed to parse XML: ${error.message}`);
  }
}

export async function writeXMLFile(filePath: string, data: any): Promise<void> {
  try {
     fsSync.writeFileSync(filePath, data, "utf-8");
  } catch (error: any) {
    throw new Error(`Failed to write XML: ${error.message}`);
  }
}