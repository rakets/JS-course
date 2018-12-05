/* Логгер. Пишем программу, которая пишет в файл “tmp.txt”, все что вводится в консоль. 
   При вводе exit программа заканчивает выполнение. */

   const fs = require("fs");
   const stdin = process.openStdin();
   const newStream = fs.createWriteStream("./tmp.txt");

   stdin.on("data",function (data){
     let text = data.toString();
     if(text.trim()=="exit"){
        process.exit();
     } else {
        newStream.write(text + "");
     }
   })