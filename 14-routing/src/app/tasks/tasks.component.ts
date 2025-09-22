import { Component, input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent],
})
export class TasksComponent {
  //to get access need to set app.config.ts -> withRouterConfig({paramsInheritanceStrategy: 'always'});
  userId = input.required<string>();
  userTasks: Task[] = [];
}
