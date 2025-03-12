import { readXMLFile, writeXMLFile } from '../../../src/utils/parsers/xmlParser';
import * as fs from 'fs';

describe('XML Parser', () => {
    let dummyFilePath= "tests/utils/data/dummy.xml"
    let data : string = "<data><row><OrderID>5001</OrderID><Type>Plush Toy</Type><AgeGroup>13+</AgeGroup><Brand>FunTime</Brand><Material>Fabric</Material><BatteryRequired>Yes</BatteryRequired><Educational>Yes</Educational><Price>247</Price><Quantity>7</Quantity></row></data>"
    let expected = [
        {
            OrderID: '5001',
            Type: 'Plush Toy',
            AgeGroup: '13+',
            Brand: 'FunTime',
            Material: 'Fabric',
            BatteryRequired: 'Yes',
            Educational: 'Yes',
            Price: 247,
            Quantity: 7
          }
    ]
    beforeAll(()=> {
        fs.writeFileSync(dummyFilePath, data)
    })


        it('should throw an error for invalid XML', async () => {
            const invalidXml = 'test.xml';
            await expect(readXMLFile(invalidXml)).rejects.toThrow('Failed to parse XML');
        });

        it('should read and parse XML file', async () => {
       

            const result = await readXMLFile(dummyFilePath);

            expect(result).toEqual(expected);
        });



        // it('should write data to XML file', async () => {
        //     let data : string = "<data><row><OrderID>Test writing function</OrderID></row></data>"
        //      writeXMLFile(dummyFilePath, data);
        //     let result = await readXMLFile(dummyFilePath);
        //     let expected = [{
        //         OrderID: "Test writing function"
        //     }]
        //     expect(result).toEqual(expected)
        // });

        // it('should throw an error if writing file fails', async () => {
        //     const filePath = 'test.xml';
        //     const data = { root: { child: 'value' } };
        //     (fsPromises.writeFile as jest.Mock).mockRejectedValue(new Error('Permission denied'));

        //     await expect(writeXMLFile(filePath, data)).rejects.toThrow('Failed to write XML file: Permission denied');
        // });
});
