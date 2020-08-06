   /*
            **** This function checks:
            **** 1) If all field are full
            **** 2) If the password is equal Confirm password 
            */
            
     function  validateForm() {
           var fname = document.forms["myForm"]["fname"].value;
         var lname = document.forms["myForm"]["lname"].value;
          var email = document.forms["myForm"]["email"].value;
         var pass = document.forms["myForm"]["pwd"].value;
          var conpass = document.forms["myForm"]["cpwd"].value;
    
            
            
            if( fname == ""){
               alert(" First name must be filled out "); }
         else if (lname == ""){
            alert(" last name must be filled out ");  }
          else if (email == ""){
            alert("email must be filled out ");  }
        else if (pass == ""){
            alert(" password must be filled out ");  }
         else if (conpass == ""){
            alert(" Confirm password must be filled out");  }
         
         if(pass!= conpass){
               alert(" ______The password is not equal Confirm password_____  "); }
             
         else{
           return alert(" _____success_____  ");
    
         }
        
     }

    

    
