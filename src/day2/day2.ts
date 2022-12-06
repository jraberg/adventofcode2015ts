import * as fs from 'fs';
import path from 'path';

const wrappingPaper = fs.readFileSync(path.join(__dirname, 'day2.puzzle.in.txt'), {encoding: 'utf-8'}).trim().split('\n')
                .map((l) => l.split('x').map(Number)).map(([l, w, h]) => 2 * l * w + 2 * w * h + 2 * h * l + Math.min(l * w, w * h, h * l))
                .reduce((acc, cur) => acc + cur, 0);
console.log(`Part 1 - solution: ${wrappingPaper}`);
const ribbon = fs.readFileSync(path.join(__dirname, 'day2.puzzle.in.txt'), {encoding: 'utf-8'}).trim().split('\n')
                        .map((l) => l.split('x').map(Number)).map(([l, w, h]) =>Math.min(2*h+2*w,2*w+2*l,2*h+2*l) + h*l*w)
                        .reduce((acc, cur) => acc + cur, 0);
console.log(`Part 2 - solution: ${ribbon}`);
