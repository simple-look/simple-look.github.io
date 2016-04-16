import { Component } from 'angular2/core';

@Component({
    selector: 'example',
    template: require('./example.jade'),
})
export class ExampleComponent {}

@Component({
    selector: 'simple',
    styles: [require('./simple.styl')],
    template: require('./example.jade'),
})
export class SimpleComponent {}
