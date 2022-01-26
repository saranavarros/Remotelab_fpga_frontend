const board = document.getElementById('programming-blocks')

const dragboard = document.getElementById('here-blocks')
new Sortable(dragboard, {
    group: {
        name: 'shared',
        pull: 'clone',
        put: false // Do not allow items to be put into this list
    },
    animation: 150,
    sort: false,
    filter: '.undrag'
});

let countcommands = 0;

new Sortable(board, {
    group: 'shared',
    animation: 150
});
const board2 = document.getElementById('programming-blocks2')
new Sortable(board2, {
    group: 'shared',
    animation: 150
})
const hereBlocks = document.getElementById('here-blocks')

const btndelete = document.getElementById('delete')

btndelete.addEventListener('click', () => {
    const div = document.getElementById("programming-blocks");
    countcommands = 0
    div.innerText = ''
})
const btndelete2 = document.getElementById('delete2')
btndelete2.addEventListener('click', () => {
    const div = document.getElementById("programming-blocks2");
    countcommands = 0
    div.innerText = ''
})
//chamando os inputs


