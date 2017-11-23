$(document).ready(function () {
    $('.percentage').circleProgress({
        value: parseInt($(".percentage__value").text()) / 100,
        size: 95,
        fill: "#e75735",
        thickness: 6,
        emptyFill: "rgba(255, 255, 255, 1)",
        startAngle: -Math.PI / 2,
        insertMode: "prepend"
    });
});