export class User {
    name: string;
    email: string;
    password: string;
    salt : string;

    constructor(name: string, email: string, password: string, salt: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.salt = salt;
    }
}