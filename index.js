const fs=require('fs')

//CREATE AND ADD FILE
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err)=>{
    if(err) console.log(err);
    console.log("CREATED EMPLOYEES.JSON FILE");
});

//READ FILE
fs.readFile('employees.json',"utf-8",(err,data)=>{
    if(err) console.log(err);
    console.log(data);
})

//UPDATE FILE
fs.appendFile("employees.json",',\n{"name": "Employee 2 Name", "salary": 3000}','utf-8',(err)=>{
    if(err) console.log(err);
    console.log("UPDATED FILE");
})

//FILE DELETED
fs.unlink('employees.json',(err)=>{
    if(err) console.log(err);
    console.log("FILE DELETED");
})
