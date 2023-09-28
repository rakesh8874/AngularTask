class Contact{
  private _username:string;
  private _email:string;
  private _message:string;

 constructor(username:string, email:string, message:string){
    this._username = username;
    this._email = email;
    this._message = message;
 }

 set email(value:string){
    this._email = value;
 }

 set message(value:string){
    this._message = value;
 }
 get username(){
    return this._username;
 }
 get email(){
    return this._email;
 }
 get message(){
    return this._message;
 }
}

const submitContact = (formData:any)=>{
 let form = Object.fromEntries(new FormData(formData));
 const contact:Contact = new Contact(<string>form.username,<string>form.email,<string>form.message);
 sendContactMessage(contact);
}

function sendContactMessage(contact:Contact){
 const requestOptions = {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body :JSON.stringify(contact)
 };
 fetch('http://localhost:3000/users', requestOptions)
 .then(response => response.json())
 .then(finalResponse => console.log(finalResponse));
 window.alert(`Thanks ${contact.username}, \n You Will Received Confirmation To This ${contact.email}`);
}

class Customer{
    private name:string;
    private age:number;
    private gender:string;
    constructor(name:string, age:number, gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    get _name(){
        return this.name;
    }
    set _name(name:string){
       this.name = name;
    }
    get _age(){
        return this.age;
    }
    set _age(age:number){
        this.age = age;
    }
    get _gender(){
        return this.gender;
    }
    set _gender(gender:string){
        this.gender = gender;
    }
}

      const submitDetails = (formData:any) =>{
        let form = Object.fromEntries(new FormData(formData));
        const customer:Customer = new Customer(<string>form.name, <any>form.age, <string>form.gender);
        sendDetails(customer);
      }

      function sendDetails(customer:Customer){
              const requestDetails = {
                method:'POST',
                header : {'Content-Type':'application/json'},
                body : JSON.stringify(customer)
               }
               fetch("", requestDetails)
               .then((response => response.json()))
               .then((finalResponse => console.log(finalResponse)))
               window.alert("Record Submitted");
            }
