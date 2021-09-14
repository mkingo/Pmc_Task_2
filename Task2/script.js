

function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank. Thank You💔");  
      return false;  
    }else if(password.length<6){  
      alert("Password must be at least 6 characters long. Thank You💔");  
      return false;  
      }else if((name==null || name=="") && password.length<6){
        alert("Username cannot be Empty and Password must be at least 6 characters long.Thank You💔");  
        return false;
      }
      else{
        alert("Data Saved Succesfully.Thank You👍👍"); 
      }
    } 