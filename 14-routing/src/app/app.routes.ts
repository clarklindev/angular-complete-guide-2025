import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '', //<your-domain>/
    component: NoTaskComponent,
  },

  {
    path: 'users/:userId', //<your-domain>/users/<uid>
    component: UserTasksComponent,
    children: [
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
    ],
  },
  {
    // catchall route
    path: '**',
    component: NotFoundComponent,
  },
];
