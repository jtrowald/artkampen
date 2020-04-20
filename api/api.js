import { Auth } from "aws-amplify";


getOwnUser, isAuthenticated, removeCredentials getOwnUser, isAuthenticated, removeCredentials 

export const getOwnUser = () => {
    Auth.currentAuthenticatedUser().then((user)=>{
        return user      
    })
}