function RandomColorSequence(length) {
    this.items = [];
    for (var index = 0; index < length; index++) {
        var number = Math.floor(Math.random() * 4 + 1);
        var color = numberToColor(number);
        this.items.push(color);
    }
    this.getItem = function (index) {
        if (this.items.length <= index) {
            throw 'Invalid item index';
        }
        return this.items[index];
    };
}

RandomColorSequence.numberToColor = numberToColor;

function numberToColor(number) {
    if (number === 1) {
        return 'red';
    }
    if (number === 2) {
        return 'green';
    }
    if (number === 3) {
        return 'blue';
    }
    if (number === 4) {
        return 'yellow';
    }
}
