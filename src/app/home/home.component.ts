import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  sets() {
    this.router.navigate(['sets']);
  }

  pokemon() {
    this.router.navigate(['pokemon']);
  }

  regions() {
    this.router.navigate(['regions'])
  }
}
