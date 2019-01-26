export const type  = {
    USERTOKEN   : 'USERTOKEN',
};

export function userToken(userToken){
    return {
        type : type.USERTOKEN,
        userToken
    }
}


