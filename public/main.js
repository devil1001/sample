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
		form.hidden = true;
		window.helloWorld.innerHTML = hello(data.user); 
	}

	kolvo(111);
	console.log(data, result);
}

function hello (text) {
	return 'Привет, ' + text + '!' + ' Вы были ' + kolvo(151);
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
	if ((value % 100 in variables) || (value % 10 in variables2))  {
		return value + ' раз';
	}
	else {
		return value + ' раза';
	}
}