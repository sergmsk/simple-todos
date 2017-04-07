import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
    tasks: [
        { text: 'THis is task 1'},
        { text: 'THis is task 2' },
        { text: 'THis is task 3' },
    ],
});