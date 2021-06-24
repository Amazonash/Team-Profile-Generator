var Employee=require("./Employee")
class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email)
        this.school=school
    }
    getRole(){
        return "intern"
    }
    getschool(){
        return `School: ${this.school}`
    }

}
module.exports = Intern