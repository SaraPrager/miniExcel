import { MiniExcel } from './mini-excel.js'

const main = async(filePath) => {
  const miniExcel = new MiniExcel();
  await miniExcel.initCells(filePath);
  console.log(miniExcel.getState());
  miniExcel.setValue(0, '3');
  console.log(miniExcel.getState());
  miniExcel.setValue(2, '1');
  console.log(miniExcel.getState());
};

main(process.argv[2]);

/*
import { Command } from 'commander';
const program = new Command();

program
  .name('mini-excel')
  .description('mini excel utilities')
  .version('0.0.1');

program.command('a')
  .description('Print current state')
  .action(() => console.log(miniExcel.getState()));

program.command('b')
  .description('Change a value')
  .argument('<index>', 'cell index')
  .argument('<cell value>', 'cell value')
  .action((cellIndex, cellValue) => miniExcel.setValue(cellIndex, cellValue));

program.parse();
*/
