let inputName = (document.getElementById("fullName"));
let inputEmail = (document.getElementById("email"));
let inputAddress = (document.getElementById("address"));
let inputPhone = (document.getElementById("phoneNumber"));
let inputDescription = (document.getElementById("description"));

document.getElementById("form").addEventListener("submit", (event) => {
        event.preventDefault();
        document.getElementById("businessCard").innerHTML = null;

        let nameContainer = document.createElement("div");
        nameContainer.textContent = "Full name: " + inputName.value;
        document.getElementById("businessCard").appendChild(nameContainer);
        localStorage.setItem("inputInfoName", inputName.value);
        inputName.value = null;
        
        let emailContainer = document.createElement("div");
        emailContainer.textContent = "Email: " + inputEmail.value;
        document.getElementById("businessCard").appendChild(emailContainer);
        localStorage.setItem("inputInfoEmail", inputEmail.value);
        inputEmail.value = null;
        
        let addressContainer = document.createElement("div");
        addressContainer.textContent = "Business address: " + inputAddress.value;
        document.getElementById("businessCard").appendChild(addressContainer);
        localStorage.setItem("inputInfoAddress", inputAddress.value);
        inputAddress.value = null;

        let phoneContainer = document.createElement("div");
        phoneContainer.textContent = "Phone number: " + inputPhone.value;
        document.getElementById("businessCard").appendChild(phoneContainer);
        localStorage.setItem("inputInfoPhone", inputPhone.value);
        inputPhone.value = null;

        let descriptionContainer = document.createElement("div");
        descriptionContainer.textContent = "Descrition: " + inputDescription.value;
        document.getElementById("businessCard").appendChild(descriptionContainer);
        localStorage.setItem("inputInfoDescription", inputDescription.value);
        inputDescription.value = null;

        localStorage.removeItem("businessCard");        
});

let nameContainerStorage = document.createElement("div");
nameContainerStorage.textContent = "Full name: " + localStorage.getItem("inputInfoName");
document.getElementById("businessCard").appendChild(nameContainerStorage);

let emailContainer = document.createElement("div");
emailContainer.textContent = "Email: " + localStorage.getItem("inputInfoEmail");
document.getElementById("businessCard").appendChild(emailContainer);

let addressContainer = document.createElement("div");
addressContainer.textContent = "Business address: " + localStorage.getItem("inputInfoAddress");
document.getElementById("businessCard").appendChild(addressContainer);

let phoneContainer = document.createElement("div");
phoneContainer.textContent = "Phone number: " + localStorage.getItem("inputInfoPhone");
document.getElementById("businessCard").appendChild(phoneContainer);

let descriptionContainer = document.createElement("div");
descriptionContainer.textContent = "Descrition: " + localStorage.getItem("inputInfoDescription");
document.getElementById("businessCard").appendChild(descriptionContainer);