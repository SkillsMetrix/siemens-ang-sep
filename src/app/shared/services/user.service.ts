import { Injectable } from "@angular/core";
import { User } from "../../models/User";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class UserService {

    loadUsers(): string[] {
        return ['admin', 'manager', 'qa']
    }
    private users:User[] =
        [
            { id: 1, name: 'Amar', active: true },
            { id: 2, name: 'Sam', active: false },
            { id: 3, name: 'simar', active: true }
        ]
    getUsers() {
        return this.users
    }
}