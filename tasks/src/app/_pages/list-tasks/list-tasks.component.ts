import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.less']
})
export class ListTasksComponent implements OnInit {
  appTitle = 'Tasks application';
  constructor() { }

  ngOnInit(): void {
  }

}
