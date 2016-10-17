function Board(sequence) {
    var board = this;
    this.sequence = sequence;

    clearColors();
    $('#play').click(function () { play(); });

    this.show = show;
    function show(color) {
        clearColors();

        switch (color) {
            case 'red':
            case 'green':
            case 'blue':
            case 'yellow':
                $('#' + color).css('background-color', color);
                break;
        }
    }

    function clearColors() {
        $('#red').css('background-color', 'pink');
        $('#blue').css('background-color', 'lightblue');
        $('#green').css('background-color', 'lightgreen');
        $('#yellow').css('background-color', 'lightyellow');
    }

    function play() {
        var currentColorShown = 0;

        flashColor();

        function flashColor() {
            var colorToShow = board.sequence.getItem(currentColorShown);
            show(colorToShow);
            currentColorShown++;
            setTimeout(hideColor, 500);
        }

        function hideColor() {
            var noColor = '';
            show(noColor);
            if (currentColorShown === board.sequence.items.length) {
                return;
            }
            setTimeout(flashColor, 250);
        }
    }
}