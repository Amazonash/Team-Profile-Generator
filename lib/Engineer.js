var Employee=require("./Employee")
class Engineer extends Employee{
    constructor(name,id,email,gitHub){
        super(name,id,email)
        this.gitHub=gitHub
    }
    getRole(){
        return "engineer"
    }
    getgitHub(){
        return `Github: ${this.gitHub}`
    }

}
module.exports = Engineer
