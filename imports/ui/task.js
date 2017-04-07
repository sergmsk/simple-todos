import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './task.html';

Template.task.events({
    'click .toggle-checked'() {
        // Установить свойство в противоположность от его текущего значения
        Tasks.update(this._id, {
            $set: { checked: !this.checked },
        });
    },
    'click .delete'() {
        Tasks.remove(this._id);
    },
});