var Employee=require("./Employee")
class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email)
        this.officeNumber=officeNumber
    }
    getRole(){
        return "manager"
    }
    getOfficenumber(){
        return `Office number: ${this.officeNumber}`
    }

}
module.exports = Manager

