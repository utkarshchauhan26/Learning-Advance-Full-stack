let users=[];

function registerUser(email,password){
    
    if(!email || !password){
        console.log("enter the email and password");
        return;
    }
    
    if(!email.includes('@')){
        console.log("Enter the valid email");
        return;
    }
      if(password.length < 5){
        console.log('password must have 5 characters');
        return;
    }
    
   if (!/[!@#$%^&*]/.test(password)){
        console.log('Passsword must have speacial character');
        return;
    }
   
   const dup=users.find(user => user.email === email);
    if(dup){
        console.log('User Already Exist ');
        return;

    }
    
    const newUser={email,password};
    users.push(newUser);
    console.log("User Added successfully yayy");

}

function login(email,password){
    const user= users.find(u =>u.email===email);
     if (!user) {
    console.log('Email not found');
    return;
  }
  
  // Check password
  if (user.password === password) {
    console.log('Login successful');
  } else {
    console.log('Wrong password');
  }
    
    
    
}
registerUser("test@gmail.com", "12345!");
login("test@gmail.com", "12345!");  // Should succeed
login("test@gmail.com", "wrong");   // Wrong password
login("notregistered@gmail.com", "123");  // Email not found

