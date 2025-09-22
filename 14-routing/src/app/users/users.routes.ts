import { Routes } from '@angular/router';
import { TasksComponent } from '../tasks/tasks.component';
import { NewTaskComponent } from '../tasks/new-task/new-task.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    //pathMatch:'prefix' takes current 'path' combined with parent 'path' and checks if url starts with... the path
    //pathMatch: 'full' takes current 'path' combined with parent 'path' and checks if url is EXACTLY the path
    pathMatch: 'full',
  },
  {
    path: 'tasks', //<your-domain>/users/<uid>/tasks
    component: TasksComponent,
  },
  {
    path: 'tasks/new',
    component: NewTaskComponent,
  },
];
