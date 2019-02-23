import View, {parseDOM} from 'dom-renderer';

import template from './index.html';

import data from './index.json';


let teacher = new View(parseDOM(template).firstChild.innerHTML), box = document.querySelector('#student');

Promise.all(data.map(async data => {

    const item = teacher.clone();

    await item.render(data);

    return item;
})).then(list => {
    for (let view of list){
        box.append(...view.topNodes);
    }
});
