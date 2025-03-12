import  * as fs  from 'fs';
import { readJSONFile, writeJSONFile } from '../../../src/utils/parsers/jsonParser';



describe("JSON Parser", () => {
    const filePath: string = "tests/utils/data/dummy.json";
    const emptyFilePath: string = "tests/utils/data/empty.json";
    let data : {} = { key:"value"}; 

    beforeAll(()=> {
        fs.writeFileSync(emptyFilePath, "{}")
    })

    afterAll(()=>{
        fs.unlinkSync(emptyFilePath)
    })


    it("should correctly parse json files", async ()=> {

        const result = await readJSONFile(filePath);
        
        expect(result).toEqual(data);
    })

    it("should return empty object when json is empty", async ()=> {

        const result = await readJSONFile(emptyFilePath);

        expect(result).toStrictEqual({})
    })

    it("should write data to json", async ()=>{

        const data = {
            data : "new added"
        }

        await writeJSONFile(emptyFilePath,data)
        const result = await readJSONFile(emptyFilePath)

        expect(result).toStrictEqual(data)
    })


})