import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getData().subscribe((data: any) => {
      console.log(data);
    })

  }
}
