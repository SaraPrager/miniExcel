import { MiniExcel } from './mini-excel.js'
import { CliRunner } from './cli-runner.js'


const main = async(filePath) => {
  const miniExcel = new MiniExcel();
  await miniExcel.initCells(filePath);
  
  // Test given example:
  console.log(miniExcel.getState());
  miniExcel.setValue(0, '3');
  console.log(miniExcel.getState());
  miniExcel.setValue(2, '1');
  console.log(miniExcel.getState());

  // TODO: implement as a cli, still in progress
  /*const cliRunner = new CliRunner();
  cliRunner.run();*/
};

main(process.argv[2]);
