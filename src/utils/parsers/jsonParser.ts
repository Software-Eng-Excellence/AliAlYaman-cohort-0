import { promises as fs } from 'fs';



export async function readJSONFile(filePath: string): Promise<any> {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading JSON file from ${filePath}:`, error);
        throw error;
    }
}

export async function writeJSONFile(filePath: string, data: any): Promise<void> {
    try {
        const jsonData = JSON.stringify(data, null, 2);
        await fs.writeFile(filePath, jsonData, 'utf-8');
    } catch (error) {
        console.error(`Error writing JSON file to ${filePath}:`, error);
        throw error;
    }
}