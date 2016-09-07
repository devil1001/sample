'use strict';
/**
* @see http://artsiom.mezin.eu/technofront/
*/




function onSubmit (form) {
	let data = {
		user: form.elements['user'].value,
		email: form.elements['email'].value
	};

	let result = request('/users', data);

	if (result === '100') {
		window.helloWorld.innerHTML = hello(data.user,data.email); 
	}

	console.log(data, result);
}

function hello (text, email) {

	return 'Привет, ' + text + '!' + ' Вы были ' + kolvo(countEmails(email));
}

if (typeof exports === 'object') {
	exports.hello = hello;
}


function kolvo(value){
	var variables = [
		12,13,14,
	];
	var variables2 = [
		1,5,6,7,8,9,0,
	];
	if ((variables.indexOf(value % 100)!=-1) || (variables2.indexOf(value % 10)!=-1))  {
		return value + ' раз';
	}
	else {
		return value + ' раза';
	}
}
