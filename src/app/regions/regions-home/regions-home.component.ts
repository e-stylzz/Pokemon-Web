import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-regions-home',
  templateUrl: './regions-home.component.html',
  styleUrls: ['./regions-home.component.scss']
})
export class RegionsHomeComponent implements OnInit {

  Regions: any = [];

  constructor(public regionService: RegionService, private router: Router) { }

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions() {
    return this.regionService.getRegions().subscribe((res) => {
      console.log('Getting Regions', res);
      this.Regions = res;
    });
  }

  navigate(id: number) {
    this.router.navigate(['regions/' + id])
  }

}
