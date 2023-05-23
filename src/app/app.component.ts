import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('mobile') sideNav?: ElementRef;

  title = 'filmes-series-app';

  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);
  }
}
