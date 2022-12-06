import * as fs from 'fs';
import path from 'path';

const santaDirections = fs.readFileSync(path.join(__dirname, 'day3.puzzle.in.txt'), { encoding: 'utf-8' }).trim().split('');

console.log(santaDirections);

interface Delivery {
    x: number;
    y: number;
    deliveries: number;
}

class House {
    private houses = new Set();
    private deliveries: Delivery[] = [];

    constructor(private xPosition = 0, private yPosition = 0) {
    }

    getNoOfHouses = () => this.houses.size;

    addNorth() {
        this.yPosition++;
        this.addDelivery();
    }

    addSouth() {
        this.yPosition--;
        this.addDelivery()
    }

    addEast() {
        this.xPosition++;
        this.addDelivery()
    }

    addWest() {
        this.xPosition--;
        this.addDelivery()
    }

    private addDelivery() {
        if (!this.houses.has(`${this.xPosition},${this.yPosition}`)) {
            this.houses.add(`${this.xPosition},${this.yPosition}`);
            this.deliveries.push({x: this.xPosition, y: this.yPosition, deliveries: 1});
        } else {
            const delivery = this.deliveries.find((d) => d.x === this.xPosition && d.y === this.yPosition)
            if (delivery) {
                delivery.deliveries++;
            }
        }
    }

}

const santaDeliveries = new House();
santaDirections.forEach((direction)=> {
    switch (direction) {
        case '^':
            santaDeliveries.addNorth();
            break;
        case 'v':
            santaDeliveries.addSouth();
            break;
        case '>':
            santaDeliveries.addEast();
            break;
        case '<':
            santaDeliveries.addWest();
            break;
    }
})

console.log(`Part 1 - solution: ${santaDeliveries.getNoOfHouses()}`);
