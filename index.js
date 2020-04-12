function getFirstSelector(selector) {
    return document.querySelector(selector);
};

function nestedTarget() {
    return document.querySelector('#nested .target');
};

function deepestChild() {
    return parent = document.querySelector('div#grand-node div div div div')
};

function increaseRankBy(n) {
    let list = document.querySelectorAll('.ranked-list li');
    for (let i = 0; i < list.length; i++) {
        list[i].innerHTML = parseInt(list[i].innerHTML) + n;
    }
}