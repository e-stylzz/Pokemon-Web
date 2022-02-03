import { Component, OnInit } from '@angular/core';
import { SetService } from '../set.service';
import { Set } from '../set';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  Sets: any = [];

  constructor(public setService: SetService, private router: Router) {}

  ngOnInit(): void {
    this.getSets();
  }

  getSets() {
    return this.setService.getSets().subscribe((res) => {
      console.log('Getting Sets', res);
      this.Sets = res;
    });
  }

  openSet(set: Set) {
    this.router.navigate(['cards/sets/' + set.id]);
  }
}
