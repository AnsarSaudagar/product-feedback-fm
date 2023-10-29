import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-sidebar-roadmap',
  templateUrl: './sidebar-roadmap.component.html',
  styleUrls: ['./sidebar-roadmap.component.css'], 
  // standalone: true,
  // imports: [MatIconModule],
})
export class SidebarRoadmapComponent {
  roadmapCount:any = {};
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    //This will get the roadmap count
    this.dataService.getRoadmapCount().subscribe((roadmapCount:any)=>{
      this.roadmapCount = roadmapCount;
    })
  }
}
