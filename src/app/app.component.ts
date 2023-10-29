import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  roadmapCount = {};
  allData = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    //This will get all the data from the api
    this.dataService.getData().subscribe((data: any) => {
      this.allData = data;
    })

    //This will get the roadmap count
    this.dataService.getRoadmapCount().subscribe((roadmapCount:any)=>{
      this.roadmapCount = roadmapCount;
    })

  }
}
