class Fish extends LivingCreature{
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 30;
        this.directions = [];
        this.acted = false;
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(num) {
        this.getNewCoordinates();
        return super.chooseCell(num);
    }
    chooseCell1(num1) {
        this.getNewCoordinates();
        return super.chooseCell(num1);
    }

    mul() {
        this.energy++;
        var newCell = random(this.chooseCell(4));
        if (newCell && this.energy >= 3) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new Fish(newX, newY, 5);
            this.energy = 0;
        }
    }

    eat() {
        if (this.acted == false) {
            var grassEater = this.chooseCell(2);
            var predator = this.chooseCell1(3);
            var newCell = random(grassEater);
            var newCell1 = random(predator);
            if (newCell1) {
                var newX = newCell1[0];
                var newY = newCell1[1];

                matrix[newY][newX] = 0;

                this.energy++;
                this.acted = true;
                if (this.energy >= 8) {
                    this.mul();
                    this.energy = 5;
                }
            }
            else if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];

                matrix[newY][newX] = 0;

                this.energy++;
                this.acted = true;
                if (this.energy >= 8) {
                    this.mul();
                    this.energy = 5;
                }
            }
            else {
                this.move();
            }

        }



    }


    move() {
        var newCell = random(this.chooseCell(4));
        if (this.acted == false) {
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 4;
                this.x = newX;
                this.y = newY;
                this.energy--;
                if (this.energy <= 0) {
                    this.die();
                }
                this.acted = true;



            }

        }

    }

    die() {
        matrix[this.y][this.x] = 4;
    }

}