import { Component, OnInit } from '@angular/core';

// Property Decorator
function Emoji() {
  return function(target: Object, key: string | symbol, descriptor: PropertyDescriptor) {

    console.log('target=', target, 'key=', key, 'descriptor=', descriptor);
    let val = target[key];

    const getter = () =>  {
        return val;
    };
    const setter = (next) => {
        console.log('updating flavor...');
        val = `🍦 ${next} 🍦`;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });

  };
}

@Component({
  selector: 'app-ice-cream',
  templateUrl: './ice-cream.component.html',
  styleUrls: ['./ice-cream.component.scss']
})
export class IceCreamComponent implements OnInit {
  @Emoji()
  flavor = 'vanilla';

  constructor() { }

  ngOnInit() {
  }

}


