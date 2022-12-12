const file = require("./index");

file.myFileWriter("file.txt","hello world");
file.myFileUpdater("file.txt", " \n from node js");
file.myFileReader("file.txt");
// file.myFileDeleter("file.txt");
