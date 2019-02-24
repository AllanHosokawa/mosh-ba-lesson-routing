import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  year: number;
  month: number;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  
  ngOnInit(){
    let params = this.activatedRoute.snapshot.paramMap;
    this.year = +params.get('year');
    this.month = +params.get('month');
  }

  back(){
    this.router.navigate(['/']);
  }
}
