const fs=require('fs')
fs.readFile('Abc.json',function(err,data){
    var ob=JSON.parse(data)
    console.log(ob.age)
});
