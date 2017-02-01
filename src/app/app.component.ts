import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn;

  ngOnInit() {
    /*
     // 實際上要由權限驗證後才决定是否能登入，但此部份邏輯先交由UnitTest實作
     this.isLoggedIn = ...;
    */
  }
}
