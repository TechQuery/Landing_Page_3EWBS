import View, {parseDOM} from 'dom-renderer';

import template from './index.html';

import data from './index.json';

const class_schedule = new View(parseDOM(template).firstChild.innerHTML), box = document.querySelector('#class_schedule');

Promise.all(data.map(async data => {

    const item = class_schedule.clone();

    await item.render(data);

    return item;
})).then(list => {
    for (let view of list) {
        box.append(...view.topNodes);
    }
});
