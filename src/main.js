import { MiniExcel } from './mini-excel.js'
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const main = async(filePath) => {
  const miniExcel = new MiniExcel();
  await miniExcel.initCells(filePath);

  // CLI:
  const cliInstance = readline.createInterface({ input, output });
  const getUserInput = async () => {
    const answer = await cliInstance.question('CMD: ');
    if (answer === 'exit') {
      console.log('Bye Bye');
      await cliInstance.close();
      return;
    }

    if (answer === 'a') {
      console.log(miniExcel.getState());
    } else {
      try {
        const [matchStr, cellIndex, cellValue] = answer.match(/b (\d) ([0-9\=\*\/\+\-\{\}]+)/);
        miniExcel.setValue(cellIndex, cellValue);
        console.log(`Cell #${cellIndex} changed to ${cellValue}`);
      } catch (e) {
        console.log('Invalid command');
      }
    }

    await getUserInput();
  };
  await getUserInput();
};

await main(process.argv[2]);
