import { Component } from 'angular2/core';

@Component({
    selector: 'homepage',
    styles: [require('./app.styl')],
    template: require('./app.jade'),
})
class AppComponent {}

export default AppComponent;
