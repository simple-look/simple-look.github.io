import { Component } from 'angular2/core';
import { ShowcaseComponent } from './showcase';
import { ExampleComponent, SimpleComponent } from './example';

@Component({
    selector: 'homepage',
    directives: [ShowcaseComponent, ExampleComponent, SimpleComponent],
    styles: [require('./app.styl')],
    template: require('./app.jade'),
})
class AppComponent {}

export default AppComponent;
