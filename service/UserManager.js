let allUsers = [];
class UserManager{
    static getUserDetails(){
        let userDetails = JSON.parse(localStorage.getItem("userDetails")) || [];
        return userDetails;
    }
    static pushUserDetails(user){
        allUsers = this.getUserDetails();
        allUsers.push(user);
        localStorage.setItem("userDetails",JSON.stringify(allUsers));
    }
    static authenticateUser(username, password){
        let isValidUser = false;
        allUsers = this.getUserDetails();
        for(let i = 0; i < allUsers.length; i++){
            if(allUsers[i].name == username && allUsers[i].password == password){
                isValidUser = true;
                break;
            }
        }
        return isValidUser;
    }
}