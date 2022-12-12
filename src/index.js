const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName, fileContent,err=>{
		console.log(err);
	});
	// console.log(data);
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const data = await fs.readFile(fileName,{encoding:"utf-8"},err=>{
		console.log(err);
	});
	console.log(data);
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(fileName,fileContent,err=>{
		console.log(err)
	});
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName,err=>console.log(err));
	
}
// myFileDeleter("File.txt");
// myFileWriter("././File.txt","Hi dude");
// myFileReader("File.txt");


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }