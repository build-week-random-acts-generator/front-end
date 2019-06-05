class Auth {
    constructor() {
        this.authenticated = false
    }

    login(cb) {
        this.athenticated = true
        cb()
    }

    logout(cb) {
        this.authenticated = false
        cb()
    }

    isAuthenticated(){
        return this.athenticated;
    }
}

export default new Auth();