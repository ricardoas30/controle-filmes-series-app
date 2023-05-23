import { AfterViewInit, Component } from '@angular/core';
// import * as $ from 'jquery';
import * as M from 'materialize-css';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit {

  titulo:string = 'Filmes e Series';

  ngAfterViewInit(): void {
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
      });
  }

}
