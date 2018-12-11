/*  Игра должна продолжаться. Пишем сервер, который отдает статические файлы для игры из предыдущих заданий.
    
    P. S. в предыдущих домашних вы написали игру, она состояла из нескольких файлов (js, css, html). 
    Чтобы запустить ее, надо было открыть html файл с файловой системы. 
    Теперь у вас должен запускаться локальный сервер, по обращению к которому, будут возвращаться статические файлы (js, css, html). 
    Т. о. не надо открывать с файловой системы ничего, просто зайти на localhost:port.   */


    const file = new static.Server('./src');
    const http=require("http");
    const static = require('node-static');
    const server = http.createServer(function(request, response) {
        file.serve(request, response);
        });
    server.listen(8080, function(error) {
        if(error) {
            console.log("error");
        } else {
            console.log("8080 ...");
        }
    });
    