import template from './PhoneList.template.html';
import controller from './PhoneList.controller';

const PhoneListComponet = {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'data',
    bindToController: true,
};

export default PhoneListComponet;
