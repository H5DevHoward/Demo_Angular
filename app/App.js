import angular from 'angular';

import './bower_components/bootstrap/dist/css/bootstrap.css';
import './style.css';

import Components from './components';
import AppComponent from './App.component';

angular.module('phonecatApp', [
    Components.name,
])
.directive('app', AppComponent);
