import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks = [
    {title: 'first task'},
    {title: 'second task'}
  ];

  invoked() {
    console.log("Invoked");
  }


  constructor() { }

  ngOnInit() {
  }

}
