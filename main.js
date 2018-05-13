var myStorage = window.localStorage;
var TAB_NUM = 'tab_num';

if (myStorage.getItem(TAB_NUM)) {
    myStorage.setItem(TAB_NUM, parseInt(myStorage.getItem(TAB_NUM)) + 1);
    document.getElementById('num').innerHTML = 'You have opened ' + myStorage.getItem(TAB_NUM) + ' Browser Tab.';
} else {
    myStorage.setItem(TAB_NUM, 1);
}

window.onbeforeunload = function () {
    if (myStorage.getItem(TAB_NUM) === '1') {
        myStorage.clear();
    } else {
        myStorage.setItem(TAB_NUM, parseInt(myStorage.getItem(TAB_NUM)) - 1);
    }
};

window.addEventListener('storage', function () {
    document.getElementById('num').innerHTML = 'You have opened ' + myStorage.getItem(TAB_NUM) + ' Browser Tab.';
});