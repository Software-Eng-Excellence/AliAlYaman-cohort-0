import { readCSVFile, writeCSVFile } from "../../../src/utils/parsers/csvParser"; // Adjust the import path as necessary
import * as fs from "fs";

describe("readCSV", () => {
    const dummyFile = 'tests/utils/data/dummy.csv';
    const invalidFilePath = 'invalid/path/to/csvfile.csv';
    let data : string[][];
    beforeAll(() => {
        data = [
            ["Name" ,"Age", "City", "Gender"],
            ["John", "30", "New York", "Male"],
            ["Jane", "25", "Los Angeles", "Female"],
            ["Bob", "22", "Chicago", "Male"],
        ];
        fs.writeFileSync(dummyFile, data.map((row) => row.join(',')).join('\n'));
    });

    afterEach(() => {

    });

    afterAll(() => {
        // fs.unlinkSync(dummyFile); //To delete data after testing
    });

    it("should correctly parse csv data", async () => {
        const result = await readCSVFile(dummyFile);
        const expectedResult = [
            ["John", "30", "New York", "Male"],
            ["Jane", "25", "Los Angeles", "Female"],
            ["Bob", "22", "Chicago", "Male"],
        ];
        expect(result).toEqual(expectedResult);
    });

    it("should return empty array if csv is empty", async () => {
        const mockData: string[][] = [];
        const result = await readCSVFile("tests/utils/data/empty.csv");
        expect(result).toStrictEqual(mockData);
    });

    it("should write data to csv file", async () => {
        const newData = [
            ["Name", "Age", "City", "Gender"], // Header
            ["Alice", "28", "Seattle", "Female"],
            ["Mark", "35", "Houston", "Male"],
            ["Alex", "45", "New Jersey", "Male"]
        ];
        await writeCSVFile(dummyFile, newData);
        const result = await readCSVFile(dummyFile);
        const expectedResult = newData.slice(1);
        expect(result).toStrictEqual(expectedResult);
    });

    it("should exclude invalid rows", async () => {
        const newData = [
            ["Name", "Age", "City", "Gender"], // Header
            ["Alice", "28", "Seattle", "Female"],
            ["Mark", "35", "Houston", "Male"],
            ["45", "New Jersey", "Male"]
        ];
        await writeCSVFile(dummyFile, newData);
        const result = await readCSVFile(dummyFile);
        const expectedResult = [
            ["Alice", "28", "Seattle", "Female"],
            ["Mark", "35", "Houston", "Male"]
        ];
        expect(result).toEqual(expectedResult);
    });

    it("should throw error if reading CSV file fails", async () => {
        await expect(readCSVFile(invalidFilePath)).rejects.toThrow("Error reading CSV file");
    });

    it("should throw error if writing CSV file fails", async () => {
        const data = [
            ["Name", "Age", "City", "Gender"],
            ["Alice", "28", "Seattle", "Female"]
        ];
        await expect(writeCSVFile(invalidFilePath, data)).rejects.toThrow("Error writing CSV file");
    });
});
