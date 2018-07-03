
let checkLogin = (email, password, allUsers) =>{
	let isUserfound = false
	let passwordCorrect = false

	for(currentUser in allUsers){

		console.log(currentUser)

		if(allUsers[currentUser]['email'] == email) {

			if(allUsers[currentUser]['password'] == password){
				isUserfound = true
				passwordCorrect = true
				break
			}	
			else{
				isUserfound = true
				passwordCorrect = false
				break
			}
		}
		else{
			isUserfound = false
		}
	} // End of for loop
	
	if(isUserfound == true && passwordCorrect == true){
		alert(`You are logged in`)
	}
	else if(isUserfound == true && passwordCorrect == false){
		alert(`You have provided incorrect password`)
	}
	else{
		alert(`No user with this email found`)
	}
} // End of checkLogin
