import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    //long-hand method for subscribe -> pass an object
    // const subscription = interval(1000).subscribe({
    //   next: (val) => console.log(val),
    // });

    //short-hand method for subscribe()
    const subscription = interval(1000).subscribe((val) => console.log(val));

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
