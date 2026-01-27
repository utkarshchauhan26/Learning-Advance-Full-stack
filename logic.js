let users =[];

const createUser =(name , email)=>{

    if(!name || !email){
        console.log("Name and email is required to enter");
        return;
    }
    if(!email.includes("@")){
        console.log("enter the valid email");
        return;
    }
    const dup=users.find(user =>user.email === email);
    if(dup){
        console.log("Already existing user ");
        return;

    }

    const newUser= {name,email};
    users.push(newUser);
    console.log("User Added successfully yayy");


}


function getAllUsers(){
    console.log("All users ",users);
    return users;

}
function getUserByEmail(email){
    const user=users.find(user => user.email===email);
    if(user){
        console.log("User email :",user);
    }
    else{
        console.log("user doesnot exist");
    }

}

function deleteUser(email){
    const index =users.findIndex(user=> user.email==email);
    if(index !==-1){
        const deletedUser=users.splice(index,1)[0];
        console.log("user deleted successfully");
    }
    else{
        console.log("error , user not found.");
    }

}
createUser("Alice", "alice@example.com");  // Should succeed
createUser("Bob", "bob@example.com");     // Should succeed
createUser("Alice", "alice@example.com"); // Error: duplicate
createUser("Charlie", "charlie");         // Error: no @
createUser("", "test@example.com");       // Error: no name

getAllUsers();  // Shows all users

getUserByEmail("alice@example.com");  // Finds Alice
getUserByEmail("notfound@example.com");  // Not found

deleteUser("bob@example.com");  // Deletes Bob
deleteUser("notfound@example.com");  // Not found

getAllUsers();  // Shows remaining users