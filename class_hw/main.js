class Contact{
    constructor(name, phone){
        this.name = name;
        this.phone=phone;
    }
}

class Phonebook{
    constructor(){
        this.arrContact=[]
    } 
    addContact(contact){
        this.arrContact.push(contact)
    }
        
    // findContact(name){
    //     const foundContact= this.arrContact.find(contact => contact.name===name)
    //     return foundContact  ? foundContact.phone :'Contact not found';
    // }
        deleteContact(name){
            this.arrContact=this.arrContact.filter(contact=> contact.name!==name)
        }
    
}


const John = new Contact('John', 09776673878)
const Jane = new Contact('Jane', 0977698748)
const May = new Contact('May', 09776673878)
const Kate = new Contact('Kate', 09776673878)
const contactBook = new Phonebook()
contactBook.addContact(John)
contactBook.addContact(Jane)
contactBook.addContact(May)
contactBook.addContact(Kate)
console.log(contactBook)
contactBook.deleteContact('John')
console.log(contactBook)
// contactBook.findContact('Jane')
// console.log(contactBook)
