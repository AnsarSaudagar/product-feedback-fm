import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sidebar-categories',
  templateUrl: './sidebar-categories.component.html',
  styleUrls: ['./sidebar-categories.component.css']
})
export class SidebarCategoriesComponent{
  constructor(private dataService: DataService) { }
  
  // Getting the category array from the service
  categories:string[] = this.dataService.category;
}
