import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  showIcon: boolean = true;
  obj:any = {};

  // For showing and removing sidebar modal in responsive view
  onClickNavBtn(btn:string){
    console.log(btn);
    if(btn==="hamburger"){
      this.showIcon= false;
      this.obj.show = true;
      this.obj.hide = false;
      
    }else{
      this.showIcon=true;
      this.obj = {}
    }
  }
}
