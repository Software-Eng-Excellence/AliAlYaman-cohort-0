import { parseStringPromise, Builder } from "xml2js";
import * as fs from "fs/promises";

export async function parseXml(xmlString: string): Promise<any> {
  try {
    const result = await parseStringPromise(xmlString, {trim : true, normalize:true, strict:true});
    const builder = new Builder({
      
    });
    return builder.buildObject(result);
  } catch (error: any) {
    throw new Error(`Failed to parse XML: ${error.message}`);
  }
}

export async function readXMLFile(filePath: string): Promise<any> {
  try {
    const xmlString = await fs.readFile(filePath, "utf-8");
    return await parseXml(xmlString);
  } catch (error: any) {
    throw new Error(`Failed to read XML file: ${error.message}`);
  }
}

export async function writeXMLFile(filePath: string, data: any): Promise<void> {
  try {
    const builder = new Builder();
    const xmlString = builder.buildObject(data);
    await fs.writeFile(filePath, xmlString, "utf-8");
  } catch (error: any) {
    throw new Error(`Failed to write XML file: ${error.message}`);
  }
}