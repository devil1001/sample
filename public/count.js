'use strict';
var countDict = {
	"email":"123@mail.ru",
	"key":0
}



function countEmails(email){
		if (email == countDict.email) {
			countDict['key'] += 1;
			
			return countDict['key'];
		}
		else {
			alert("no");
		}

		
}