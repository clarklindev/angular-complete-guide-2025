import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  interval$ = interval(1000);
  //NOTE: observables DO NOT have an initial value but Signals do...
  //we can set initial values on observables that originally dont have initial values
  //toSignal() auto cleans up the observable subscription if component where using signal gets removed
  intervalSignal = toSignal(this.interval$, { initialValue: 0 });

  customInterval$ = new Observable((subscriber) => {
    let timesExecuted = 0;

    const interval = setInterval(() => {
      subscriber.error();

      if (timesExecuted > 3) {
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      console.log('emitting value...');
      subscriber.next({ message: 'new value' });
      timesExecuted++;
    }, 2000);
  });

  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    //long-hand method for subscribe -> pass an object
    // const subscription = interval(1000).subscribe({
    //   next: (val) => console.log(val),
    // });
    //short-hand method for subscribe()
    //NOTE: using the rxjs 'pipe()' operator
    // const subscription = interval(1000)
    //   .pipe(map((val) => val * 2))
    //   .subscribe((val) => console.log(val));
    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // });
    this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('COMPLETED..'),
      error: (err) => console.log(err),
    });

    const subscription = this.clickCount$.subscribe({
      next: (val) => console.log(`click button ${this.clickCount()} times`),
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onClick() {
    this.clickCount.update((prevCount) => prevCount + 1);
  }
}
