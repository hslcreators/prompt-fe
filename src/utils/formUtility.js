//this utility is responsible for passing of user signup data across pages and views

const setStorage = () => {
    sessionStorage.setItem('promptFD', JSON.stringify({
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        username: null,
        isVendor: null,
		signupToken: null,
		VendorsData: null
    }))
}


const appendData =  (key, value) => {
    console.log(key)
    const SSData = JSON.parse(sessionStorage.getItem('promptFD'))
    switch (key) {
			case "first_name":
				SSData.first_name = value;
				sessionStorage.setItem("promptFD", JSON.stringify(SSData));
				break;
			case "last_name":
				SSData.last_name = value;
				sessionStorage.setItem("promptFD", JSON.stringify(SSData));
				break;
			case "emall":
				console.log(key);
				SSData.email = value;
				sessionStorage.setItem("promptFD", JSON.stringify(SSData));
				break;
			case "password":
				console.log(key);
				SSData.password = value;
				sessionStorage.setItem("promptFD", JSON.stringify(SSData));
				break;
			case "username":
				SSData.username = value;
				sessionStorage.setItem("promptFD", JSON.stringify(SSData));
				break;
			case "isVendor":
				SSData.isVendor = value;
				sessionStorage.setItem("promptFD", JSON.stringify(SSData));
				break;
		}
};



export {setStorage, appendData }