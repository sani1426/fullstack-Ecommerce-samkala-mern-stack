const backendDomain = "http://localhost:9000"

const SummaryApi = {
    SignUp : {
        url : `${backendDomain}/api/users/signup`,
        method : "post"
    },
    SignIn : {
        url : `${backendDomain}/api/users/signin`,
        method : "post"
    },
    UserDetail : {
        url : `${backendDomain}/api/users/user-details`,
        method : "get"
    },
    LogOut : {
        url : `${backendDomain}/api/users/logout`,
        method : "get"
    },
    AllUsers : {
        url : `${backendDomain}/api/users/`,
        method : "get"
    },
}


export default SummaryApi