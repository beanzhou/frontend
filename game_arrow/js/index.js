
var direction = new Array();
var size = 5;

window.onload = function (e) {

    draw(); // 初始化九宫格

    $(".player").click(function(){
        $(".board").html("");
        draw();
    })
}


function draw() {
    for (let i = 0; i < size * size; i++) {
        direction[i] = Math.floor(Math.random() * 4);
    }

    $(".player").css("background-color","#339933");

    $(".board").html('<table class="table"></table>');
    for(let i = 0; i < size; i++) {
        let tr = "<tr id='tr" + i + "'></tr>";
        $(".table").append(tr);
        for(let j = 0; j < size; j++) {
            let id = "img_" + i + "_" + j;
            let index = i * size + j;
            let td = '<td class="pic" onclick="itemClick('+i+',' + j +')"><img id="' + id + '" src="./img/arrow.png"></td>';
            $("#tr"+i).append(td);
            $("#" + id).rotate({
                angle: 0,
                animateTo: 90 * direction[index]
            });
        }
    }
}

function itemClick(i, j) {
    Next(i, j)
}


function Next(x, y) {
    console.log([x, y])

    let nextX = x;
    let nextY = y;

    let id = "img_" + x + "_" + y;
    let index = x * size + y;

    $("#" + id).css("background-color","#6699CC");

    let dir = Math.floor(Math.random() * 2)
    if(dir == 0) {
        dir = -1
    }
    dir = 1

    $("#" + id).rotate({
        angle: 90 * direction[index],
        animateTo: 90 * direction[index] + 90 * dir
    });

    direction[index] = (direction[index] + dir);
    if (direction[index] < 0) {direction[index] = 3}
    if (direction[index] > 3) {direction[index] = 0}  

    if (direction[index] == 0) {nextY += 1}
    else if (direction[index] == 1) {nextX += 1}
    else if (direction[index] == 2) {nextY -= 1}
    else {nextX -= 1} 

    if (nextX < 0) {
        $("#player1").css("background-color","red");
    } else if (nextX >= size){
        $("#player2").css("background-color","red");
    } else {
        if (!(nextY >= 0 && nextY < size)) {
            nextY = y
        }
        setTimeout(function(){
            Next(nextX, nextY)
        }, 1000)
    }

}


