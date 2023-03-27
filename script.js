let field = document.querySelector('#field');
let size = 2;

function range(count) {
    let arr =[];
    
	for (let i = 1; i <= count; i++ ) {
         arr.push(i); 
    }

    return arr;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array
}

  function chunk(arr, n) {
    let newArr =[];
    let count = Math.ceil(arr.length / n)

    for (let i = 0; i < count; i++) {
        let subArr = arr.splice(0, n);
        newArr.push(subArr)
    }

    return newArr
  }

  function prepare(size) {
	let arr = []

    arr = range(Math.pow(size, 2))
    arr = shuffle(arr)
    arr = chunk(arr, size)
    console.log(arr)
    
    return arr
  }

  function build(field, arr) {
    field.innerHTML = '';
    let cells = [];
    for (let subArr of arr) {
        let tr = document.createElement('tr');
        for (let number of subArr) {
            let td = document.createElement('td');
            td.innerHTML = number;
            tr.appendChild(td);
            cells.push(td)
        }
        field.appendChild(tr)
    }
    return cells
  }
  
  function activate(cells, size) {
    let counter = 1;
    let lastNum = Math.pow(size, 2)

	for (let cell of cells) {
		cell.addEventListener('click', function() {

            if (this.innerHTML == counter) {
                this.classList.add('active');

                if (counter == lastNum) {
                    start(++size)
                }
                counter++;
            }
		});
	}
}

function start(size) {
    activate(build(field, prepare(size)), size)
}

start(size)


