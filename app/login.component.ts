import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private router: Router) {}

  ngOnInit() {
  }

  autenticar() : void {
    
    //Consulta Backend
    
    if (0==0){
      this.router.navigate(['/categoria'], {relativeTo:this.route});
    }
  }

}
