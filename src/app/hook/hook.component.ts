import { Component } from '@angular/core';

function UseState(seed: any) {
  return function (target, key) {
    console.log('target=', target,'key=', key,'seed=', seed);
    target[key] = seed;
    target[`set${key.replace(/^\w/, c => c.toUpperCase())}`] = (val) => target[key] = val;
  };
}

function UseEffect() {
  return function (target, key, descriptor) {
    console.log('target=', target,'key=', key,'descriptor=', descriptor);
    target.ngOnInit = descriptor.value;
    target.ngAfterViewChecked = descriptor.value;
  };
}

@Component({
  selector: 'app-hook',
  template: `
    <p>You clicked {{count}} times</p>
    <button (click)="setCount(count + 1)">Click Me</button>
  `,
  styleUrls: ['./hook.component.scss']
})

export class HookComponent {
  @UseState(0) count;

  @UseEffect()
  onEffect() {
    document.title = `You clicked ${this.count} times`;
  }
}


