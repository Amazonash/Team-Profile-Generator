const inquirer=require("inquirer")
const fs=require("fs")
const Manager=require("./lib/Manager")
const Intern=require("./lib/Intern")
const Engineer=require("./lib/Engineer")


const employees=[]



function askManagerQuestions(){
    inquirer.prompt([
        {
            type:"input",
            name:"managerofficenumber",
            message:"what is the managers office number?"
        },
        {
            type:"input",
            name:"managerid",
            message:"what is the managers id?"
        },
        {
            type:"input",
            name:"manageremail",
            message:"what is the managers email?"
        },
        {
            type:"input",
            name:"managername",
            message:"what is the managers name?"
        },
        {
            type:"list",
            name:"newemployee",
            message:"what type of team member would you like to add?",
            choices:["Engineer","Manager","Intern", "I dont want to add any more team members"]
        },
        
        
    ]).then(data=>{
        console.log(data)
        var manager=new Manager(data.managername,data.managerid,data.manageremail,data.managerofficenumber)
employees.push(manager)
     if(data.newemployee==="I dont want to add any more team members"){
         return generatehtml()
     }   
     if(data.newemployee==="Engineer"){
        return askEngineerQuestions()
    }   
    if(data.newemployee==="Manager"){
        return askManagerQuestions()
    }   
    if(data.newemployee==="Intern"){
        return askInternQuestions()
    }   



    })
}
askManagerQuestions()

function askEngineerQuestions(){
    inquirer.prompt([
        {
            type:"input",
            name:"engineergithub",
            message:"what is the engineer github?"
        },
        {
            type:"input",
            name:"engineerid",
            message:"what is the engineer id?"
        },
        {
            type:"input",
            name:"engineeremail",
            message:"what is the engineer email?"
        },
        {
            type:"input",
            name:"engineername",
            message:"what is the engineer name?"
        },
        {
            type:"list",
            name:"newemployee",
            message:"what type of team member would you like to add?",
            choices:["Engineer","Manager","Intern", "I dont want to add any more team members"]
        },
        
        
    ]).then(data=>{
        var engineer=new Engineer(data.engineername,data.engineerid,data.engineeremail,data.engineergithub)
        employees.push(engineer)
             if(data.newemployee==="I dont want to add any more team members"){
                return generatehtml()
             }   
             if(data.newemployee==="Engineer"){
                return askEngineerQuestions()
            }   
            if(data.newemployee==="Manager"){
                return askManagerQuestions()
            }   
            if(data.newemployee==="Intern"){
                return askInternQuestions()
            } 
    })
}
function askInternQuestions(){
    inquirer.prompt([
        {
            type:"input",
            name:"internsschool",
            message:"what is the interns school?"
        },
        {
            type:"input",
            name:"internsid",
            message:"what is the intern id?"
        },
        {
            type:"input",
            name:"internsemail",
            message:"what is the interns email?"
        },
        {
            type:"input",
            name:"internsname",
            message:"what is the interns name?"
        },
        {
            type:"list",
            name:"newemployee",
            message:"what type of team member would you like to add?",
            choices:["Engineer","Manager","Intern", "I dont want to add any more team members"]
        },
        
        
    ]).then(data=>{
        var intern=new Intern(data.internsname,data.internsid,data.internsemail,data.internsschool)
        employees.push(intern)
             if(data.newemployee==="I dont want to add any more team members"){
                return generatehtml()
             }   
             if(data.newemployee==="Engineer"){
                return askEngineerQuestions()
            }   
            if(data.newemployee==="Manager"){
                return askManagerQuestions()
            }   
            if(data.newemployee==="Intern"){
                return askInternQuestions()
            } 
    })
}

function generatehtml(){
console.log(employees)
var employeescards=""
for (let i = 0; i < employees.length; i++) {
  employeescards += `
  <div class="card col-3">
  <div class="card-header">
  ${employees[i].name}
  ${employees[i].getRole()}
  </div>
  <div class="card-body">
    
    <p class="card-text">Id: ${employees[i].id}</p>
    <p class="card-text">Email: ${employees[i].email}</p>
    <p class="card-text">  ${employees[i].officeNumber? employees[i].getOfficenumber(): employees[i].gitHub? employees[i].getgitHub() : employees[i].school? employees[i].getschool(): ''}</p>
    
  </div>
</div>
  `
}
var basichtml=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
  <div class="container">
<div class="row">
 ${employeescards}
</div>
  </div>  

</body>
</html>`
fs.writeFileSync("dist/team.html",basichtml,"utf-8")
}