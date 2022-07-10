import { Command } from 'commander';

export class CliRunner {
    _program;
    constructor() {
        this._program = new Command();

        this._program
            .name('mini-excel')
            .description('mini excel utilities')
            .version('0.0.1');

        this._program.command('a')
            .description('Print current state')
            .action(() => console.log(miniExcel.getState()));

        this._program.command('b')
            .description('Change a value')
            .argument('<index>', 'cell index')
            .argument('<cell value>', 'cell value')
            .action((cellIndex, cellValue) => miniExcel.setValue(cellIndex, cellValue));
    }

    run() {
       while (true) {
        this._program.parse();
       }
    }
}