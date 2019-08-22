import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  apptitle: String = 'Magic Holiday' // <-- typeScript way;;;; javascript way ---> apptitle = 'Magic Holiday' (also works)

  constructor() { }

  ngOnInit() {
  }

  myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
  }

  dbClickMethod(){
    
  }

  onClick(event){
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

}
