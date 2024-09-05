const USERS_KEY = 'users'
export const userSignUp = ({email,password,fullName})=>{
    let users = localStorage.getItem(USERS_KEY) || '[]';
    let isExist = false;
    users = JSON.parse(users);
    isExist = users.find(user=>user.email=== email) ? true: false;

    if(isExist){
        return false;
    }

    users.push({email,password,fullName})
    localStorage.setItem('users',JSON.stringify(users));
}

export const userLogIn = ({email,password})=>{
    let users= localStorage.getItem(USERS_KEY)

    if(users){
        users = JSON.parse(users)
        const user = users.find(user=>user.email=== email);
        if(user && user.password == password){
            return user;
        }
        return false
    }
}