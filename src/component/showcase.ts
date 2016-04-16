import { Component } from 'angular2/core';

@Component({
    selector: 'showcase',
    styles: [require('./showcase.styl')],
    template: require('./showcase.jade'),
})
export class ShowcaseComponent {}

export default ShowcaseComponent;
