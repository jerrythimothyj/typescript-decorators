import { Component, OnInit } from '@angular/core';

// Method Decorator
function Confirmable(message: string) {
  return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor) {

    console.log('target=', target, 'key=', key, 'descriptor=', descriptor);

    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const allow = confirm(message);

      if (allow) {
        const result = original.apply(this, args);
        return result;
      } else {
        return null;
      }
    };

    return descriptor;
  };
}

@Component({
  selector: 'app-ice-cream-cream',
  templateUrl: './ice-cream-cream.component.html',
  styleUrls: ['./ice-cream-cream.component.scss']
})
export class IceCreamCreamComponent implements OnInit {

  toppings = [];

  @Confirmable('Are you sure?')
  @Confirmable('Are you super, super sure? There is no going back!')
  addTopping(topping) {
    this.toppings.push(topping);
  }

  constructor() { }

  ngOnInit() {

    this.addTopping('sprinkles')
  }

}
