import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tasks } from '../api/tasks.js';

import './task.js';
import './body.html';

Template.body.helpers({
    tasks() {
        return Tasks.find({}, { sort: {createdAt: -1} });
    },
});

Template.body.events({
    'submit .new-task'(event) {
        //Запретить отправку формы браузера по умолчанию
        event.preventDefault();

        //Получить значение из элемента формы
        const target = event.target;
        const text = target.text.value;

        //Вставка задачи в коллекцию
        Tasks.insert({
            text,
            createdAt: new Date(), //время создания задачи
        });

        //очищаем форму отправки задачи
        target.text.value = '';
        
    },
});

