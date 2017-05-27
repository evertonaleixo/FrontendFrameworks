export class PhonebookEntity {
  constructor() {
    this.list = [];
  }
  
  addItem(name, phone) {
	 this.list.push(new PhonebookItemEntity(name, phone));
	}

  removeItem(name) {    
    this.list = this.list.filter( (it) => {
      return (it.name != name)
    })
  }

}

export class PhonebookItemEntity {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

}