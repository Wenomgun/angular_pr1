import { Component } from '@angular/core';
import {Router} from "@angular/router";

export interface INav {
  caption: string,
  path: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  navigator: INav[] = [
    {
      caption: 'Tasks',
      path: ''
    },
    {
      caption: 'Important tasks',
      path: 'important-tasks'
    }
  ]

  constructor(private router: Router) {
  }

  navigate(path: string): void {
    this.router.navigate([path])
  }

}
