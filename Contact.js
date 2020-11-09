class Contact{
    //Constructor
    constructor(...params){
        this.firstName=params[0];
        this.lastName=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.phoneNumber=params[6];
        this.email=params[7];
    }

    //Getters & Setters
    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        let firstNamePattern=RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(firstNamePattern.test(firstName)){
            this._firstName=firstName
        }
        else
        throw 'Invalid FirstName !';

    }
    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        let lastNamePattern=RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(lastNamePattern.test(lastName)){
            this._lastName=lastName;
        }
        else
        throw 'Invalid LastName !';

    }
    get address(){
        return this._address;
    }
    set address(address){
        let addressPattern=RegExp('[A-Z a-z \s]{4,}');
        if(addressPattern.test(address)){
            this._address=address;
        }
        else
        throw 'Invalid Address !';
    }
    get city(){
        return this._city;
    }
    set city(city){
        let cityPattern=RegExp('[A-Z a-z \s]{4,}');
        if(cityPattern.test(city)){
            this._city=city;
        }
        else
        throw 'Invalid City !';
    }
    get state(){
        return this._state;
    }
    set state(state){
        let statePattern=RegExp('[A-Z a-z \s]{4,}');
        if(statePattern.test(state)){
            this._state=state;
        }
        else
        throw 'Invalid State !';
    }
    get zip(){
        return this._zip;
    }
    set zip(zip){
        let zipPattern=RegExp('^[0-9_ ]{6,}$');
        if(zipPattern.test(zip)){
            this._zip=zip;
        }
        else
        throw 'Invalid Zip Code !';
    }
    get phoneNumber(){
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber){
        let phPattern=RegExp('(^\\+)([0-9]{2,3})(\\s)'+'[0-9]{10}$');
        if(phPattern.test(phoneNumber)){
            this._phoneNumber=phoneNumber;
        }
        else
        throw 'Invalid Phone Number !';
    }
    get email(){
        return this._email;
    }
    set email(email){
        let emailPattern=RegExp('(^[a-zA-Z0-9]+)'+'([. + _ -]?[a-zA-Z0-9]*)'+'[^. + _ -]@[a-zA-Z0-9]+'+'(\\.[a-zA-Z]{2,4})'+'(\\.[a-zA-Z]{2})?');
        if(emailPattern.test(email)){
            this._email=email;
        }
        else
        throw 'Invalid Email ID !';
    }
    

    //Methods
    toString(){
        return '[ FirstName : '+this.firstName+' LastName : '+this.lastName+' Address : '
        +this.address+' City : '+this.city+' State : '+this.state+' Zip : '+this.zip+
        ' Phone Number : '+this.phoneNumber+' Email : '+this.email+' ]';
    }
}
let contact;
try{
contact=new Contact("Yudhajit","Koley","Sarat Chatterjee Road","Howrah","West Bengal","711 102","+91 9804889458","yudha@gmail.com");
console.log(contact.toString());
}catch(e){
    console.log(e);
}

//UC3
let contactsArr=new Array();
contactsArr.push(contact);
try{
contactsArr.push(new Contact("Rohit","Sharma","Tilak Sadak","Mumbai","Maharashtra","400672","+91 9627272772","rohit26627@gmail.com"));
contactsArr.push(new Contact("Virat","Kohli","Deshpran Marg","Delhi","New Delhi","100672","+91 8096456234","virat.business@gmail.com"));
}catch(e){
    console.log(e);
}
console.log(contactsArr);

//UC4
contactsArr.filter(contact=>contact.firstName=="Virat"&&contact.lastName=="Kohli")
            .forEach(contact=>{contact.address="Anand Bhawan Sadak";});
console.log('Number of Contacts in Array : '+contactsArr.reduce(countEntries,0));
console.log(contactsArr);

//UC5
let index;
contactsArr.filter(contact=>contact.firstName=="Virat"&&contact.lastName=="Kohli")
            .forEach(contact=>{if(contact.firstName=="Virat"&&contact.lastName=="Kohli")
        index=contactsArr.indexOf(contact);
        });
contactsArr.splice(index);
console.log(contactsArr);

//UC6
function countEntries(total){
    return total+1;
}
let countOfContacts=contactsArr.reduce(countEntries,0);
console.log('Number of Contacts in Array : '+countOfContacts);