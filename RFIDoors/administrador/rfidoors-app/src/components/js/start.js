//start.js

export default function log(){
	console.log("HOLAAAAAAAAAAAAAAAAAAAAAAAA");
	/*
	const { spawn } = require('child_process');

	var py    = spawn('C:\Users\ivana\Anaconda2\python.exe', ['compute_input.py']);
	var data = [1,2,3,4,5,6,7,8,9];
	var dataString = '';

	py.stdout.on('data', function(data){
	  dataString += data.toString();
	});
	py.stdout.on('end', function(){
	  console.log('Sum of numbers=',dataString);
	});
	py.stdin.write(JSON.stringify(data));
	py.stdin.end();
	*/
	var PythonShell = require('python-shell');
	var pyshell = new PythonShell('compute_input.py');
	var options = {
		pythonPath:'C:\Users\ivana\Anaconda2\python.exe',
	};
	
	pyshell.on('message', function (message) {
	  // received a message sent from the Python script (a simple "print" statement)
	  console.log(message);
	});
	 
	// end the input stream and allow the process to exit
	pyshell.end(function (err,code,signal) {
	  if (err) throw err;
	  console.log('The exit code was: ' + code);
	  console.log('The exit signal was: ' + signal);
	  console.log('finished');
	  console.log('finished');
	});
}