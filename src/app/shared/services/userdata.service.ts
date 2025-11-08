import { Injectable } from "@angular/core";
import { UserDetails } from "../../models/UserDetails";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class UserDataService {
    private URL='http://localhost:3000/users'
    constructor(private http:HttpClient){}

 
    addUser(user: UserDetails) {
       this.http.post(this.URL,user)
       .subscribe(res => console.log(res))
        
    }
    loadUsers(){
       return this.http.get(this.URL)
    }
    deleteUser(id):Observable<void>{
        return this.http.delete<void>(`${this.URL}/${id}`)
    }
    updateUser(id,user:Partial<UserDetails>):Observable<UserDetails>{
        return this.http.put<UserDetails>(`${this.URL}/${id}`,user)
    }
}