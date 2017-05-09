import angular from 'angular';
import PhoneListComponent from './PhoneList.component';

const PhoneListModule = angular
.module('phoneList', [])
.component('phoneList', PhoneListComponent);

export default PhoneListModule;
