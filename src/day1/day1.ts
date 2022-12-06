import * as fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.join(__dirname, 'day1.puzzle.in.txt'), {encoding: 'utf-8'}).trim().split('');

const decodeMove = (c: string): number => c === '(' ? 1 : c === ')' ? -1 : 0;

const solutionPart1 = 0 + input.map((c) => decodeMove(c)).reduce((acc, cur) => acc + cur, 0);
console.log(`Part 1 - solution: ${solutionPart1}`);

let currentLevel = 0;
input.forEach((c, i) => {
    currentLevel += decodeMove(c)
    if (currentLevel === -1) {
        console.log(`Part 2 - solution: ${i + 1}`);
        process.exit(0);
    }
})
