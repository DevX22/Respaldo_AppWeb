import { Component, OnInit } from '@angular/core';
import { LoadJsService } from '../service/load-js.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loadJs:LoadJsService) {
  }

  ngOnInit(): void {
    this.loadJs.changeJS(['animate-login'],'div');
  }

}
