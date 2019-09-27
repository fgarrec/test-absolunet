const bingo = () => {
    const $button = document.querySelector('[data-pick-num]'),
        $board = document.querySelector('[data-show-board]'),
        $pickedNums = document.querySelector('[data-show-picked-num]'),
        letters = ['b', 'i', 'n', 'g', 'o'],
        numsByLetter = 15;

    let board = [],
        pickedNums = [];

    if($button){
        const createBoard = () => {    
            for(let i = 0; i < letters.length; i++){
                const letter = letters[i];
                
                for(let n = 1; n <= numsByLetter; n++){
                    //Contruct the name before adding it to the board
                    //If i >= 1, we add to n
                    board = [...board, letter+(i >= 1 ? n + numsByLetter * i : n)]
                }
            }
        }
    
        const show = ($html, arr) => {
            $html.innerHTML = '';
            
            arr.forEach((el) => {
                $html.innerHTML += li(el);
            });
        }
    
        const li = (val) => "<li>"+val+"</li>"
    
        const pickNum = () => {
            const rand = Math.floor(Math.random()*board.length);
            const pickedNum = board[rand];
            board.splice(rand, 1);
            pickedNums = [...pickedNums, pickedNum]
            show($board, board);
            show($pickedNums, pickedNums);
        }
    
        $button.addEventListener("click", () => {    
            pickNum();
        })
    
        createBoard();
        show($board, board);
    }
}

bingo();