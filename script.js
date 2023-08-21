const fill = document.querySelector('.fill');
const drops = document.querySelectorAll('.drop');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for(const drop of drops){
    drop.addEventListener('dragover', dragOver);
    drop.addEventListener('dragenter', dragEnter);
    drop.addEventListener('dragleave', dragLeave);
    drop.addEventListener('drop', dragDrop);
}


function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'drop' ;
}

function dragDrop() {
    this.className = 'drop';
    this.append(fill);
}