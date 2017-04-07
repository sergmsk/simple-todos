/*определяем новый модуль tasks, который создает коллекцию Монго и экспортирует его*/

import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');