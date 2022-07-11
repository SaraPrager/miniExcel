import { promises as fs } from 'fs';
import { evaluate } from 'mathjs';

export class MiniExcel {
    _cellMap = {};
    constructor() {}

    async initCells(filePath) {
        try {
            const fileInput = await fs.readFile(filePath, { encoding: 'utf8' });
            fileInput.split(', ').forEach((value, index) => this._cellMap[index] = value);
        } catch (e) {
            console.error('Invalid input');
        }
    }

    setValue(cellIndex, cellValue) {
        this._cellMap[cellIndex] = cellValue;
        console.log(`Cell #${cellIndex} changed to ${cellValue}`);
    }

    getState() {
        return Object.keys(this._cellMap).map(cellIndex => 
            `[${cellIndex}: ${this.getActualCellValue(cellIndex)}]`).join(', ');
    }

    getActualCellValue(cellIndex) {
        let cellValue = this._cellMap[cellIndex];

        if (!cellValue?.startsWith('=')) {
            return cellValue;
        }

        cellValue = cellValue.replace('=', '')
            .replaceAll(/({)(\d)(})/g, (_match, _$1, $2) => { return this.getActualCellValue($2) });
        return evaluate(cellValue);
    }
}