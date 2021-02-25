function printDesk(desk) {  // выводим доску
    desk.forEach( (line) => {
        console.log(line.join(''));
    }); 
    console.log("=".repeat(desk[0].length));    // разделитель для удобства
}

function changeDesk(desk) { // меняем состояние доски
    let new_desk = [];
    desk.forEach( (line, x) => {
        new_desk[x] = [];
        line.forEach( (item, y) => {

            let neighbors = - item;     // считаем соседей
            for (let dx = -1; dx <= 1; dx++) {
                for (let dy = -1; dy <= 1; dy++) {
                    if ((x + dx >= 0) && (x + dx < desk.length) && (y + dy >= 0) && (y + dy < line.length)) neighbors += desk[x+dx][y+dy];
                }
            }
            
            if (desk[x][y] == 1) {
                new_desk[x][y] = ((neighbors == 2) || (neighbors == 3)) ? 1 : 0
            }
            else new_desk[x][y] = (neighbors == 3) ? 1 : 0
        });
    });
    return new_desk
}

function generateDesk(m, n) {   // генерируем доску
    let gen_desk = [];
    for (let x = 0; x < n; x++) {
        gen_desk[x] = [];
        for (let y = 0; y < m; y++) {
            gen_desk[x].push(Math.floor(Math.random() * 2));
        }
    }
    return gen_desk;
}

function startChanges(desk) {   // организация процесса вывода и изменений по времени
    let timerId = setInterval( () => {printDesk(desk); desk = changeDesk(desk)}, 1000);

    // остановить вывод через 30 сек на всякий случай
    setTimeout(() => { clearInterval(timerId); console.log('STOP - прошло 30 секунд'); }, 30000);
}

var desk = [[]];

if (process.argv.length == 3) { //считаем, что если пришел один параметор, то это имя файла в папке со скриптом    node script.js text
    const fs = require('fs');                                                       // считаем, что в файле ошибок нет. В файле N строк по М элементов (0 или 1). 
    var file_text = fs.readFileSync(process.argv[2], "utf8");
    file_text.split("\r\n").forEach( (line, i) => desk[i] = line.split(""));    // разделитель строк в файле \r\n

    desk.forEach((line, x) => line.forEach((item, y) => desk[x][y] = parseInt(item))); // преобразуем все в цифры   
}
else if ((process.argv.length == 4) && (parseInt(process.argv[2])) && (parseInt(process.argv[3]))) {       // если два параметра, то это цифры M и N    node script.js 20 10
    desk = generateDesk(process.argv[2], process.argv[3]);
}
else console.log("Ошибка в параметрах!!")

startChanges(desk);