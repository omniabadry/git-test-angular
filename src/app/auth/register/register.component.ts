import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/_model/person';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // person:{email,password,repeatedPassword}
  person: Person={email:'',password:'',repeatedPassword:''};
  constructor(private authService:AuthService) { }
  ngOnInit(): void {
  }
  onSubmit() {
    // console.log(form.value);
    console.log(typeof(this.person))
    this.authService.Register(this.person).subscribe(
      (response)=>{console.log(response)},
      (err)=>{console.log(err)},
      ()=>{}
    )
  }
// /
// /


}
