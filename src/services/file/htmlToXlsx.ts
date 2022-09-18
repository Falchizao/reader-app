import { writeFile, utils } from "xlsx";
const fs = require('fs')

export const conversionXLSX = async (htmlTables: string
): Promise<any> => {
    var parsedHtml = new DOMParser().parseFromString(htmlTables, "text/html");

    let exportableTables = parsedHtml.getElementsByTagName("table");

    var wb = utils.table_to_book(exportableTables[0]);
    writeFile(wb, "ParsedFile.xlsx" || ('ParsedFile.' + ('xlsx')));

    return 'Seu arquivo está pronto'
    
}