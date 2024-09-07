import toast from "react-hot-toast";

const USERS_KEY = 'users'
const CURRENT_USER= 'user'
export const userSignUp = ({email,password, fullName})=>{
    let users = localStorage.getItem(USERS_KEY) || '[]';
    let isExist = false;
    users = JSON.parse(users);
    isExist = users.find(user=>user.email === email) ? true: false;

    if(isExist){
        toast.error("Already Exist")
        return false;
    }

    users.push({email,password, fullName})
    localStorage.setItem('users',JSON.stringify(users));
}

export const userLogIn = ({email,password})=>{
    let users= localStorage.getItem(USERS_KEY)

    if(users){
        users = JSON.parse(users)
        const user = users.find(user=>user.email=== email);
        if(user && user.password == password){
            localStorage.setItem(CURRENT_USER,email)
            return user;
        }
        return false
    }
    return false;
}

export const checkLogin = ()=>{
    return localStorage.getItem(CURRENT_USER);
}

export const userLogOut = ()=>{
    localStorage.removeItem(CURRENT_USER)
}