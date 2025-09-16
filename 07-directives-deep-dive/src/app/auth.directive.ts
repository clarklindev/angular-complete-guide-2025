import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permission } from './auth/auth.model';
import { AuthService } from './auth/auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' });

  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef); //reference to template of where directive was added
  private viewContainerRef = inject(ViewContainerRef); //reference to DOM where this template is being used

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        console.log('SHOW ELEMENT');
        //.createEmbeddedView() render some new content into a certain place in the dom
        //renders the content between the <ng-template> instead of where directive is used <ng-template>
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        console.log('DO NOT SHOW ELEMENT');
        this.viewContainerRef.clear();
      }
    });
  }
}
