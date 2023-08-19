let row = "";
let a = 0;
let correct = 0;
function column(board) {
    col = [];
    for (r = 0; r <= board.length - 1; r++) {
        col.push(board[r][a]);
        if (col.length == 9) {
                  console.log(col,row);
            return col;
        }
    }
}
function check(row, col) {
    if (row.filter(i => !i.includes(".")).some(a => col.filter(i => !i.includes(".")).includes(a))) {
        correct = correct
    }
    else {
        correct++

    }
    return correct
}
function isSudoku(board) {
    for (i = 0; i < board.length; i++) {
        row = board[i];
        column(board);
        a++;
        check(row, col);
    }
  console.log(correct)
//   console.log(correct === 9 ? "Sudoku Solvable" : "Unsolvable Sudoku")
//   return correct

};
isSudoku(
[["5","3",".",".","7",".",".",".","."],
 ["6",".",".","1","9","5",".",".","."],
 [".","9","8",".",".",".",".","6","."],
 ["8",".",".",".","6",".",".",".","3"],
 ["4",".",".","8",".","3",".",".","1"],
 ["7",".",".",".","2",".",".",".","6"],
 [".","6",".",".",".",".","2","8","8"],
 [".",".",".","4","1","9",".",".","5"],
 [".",".",".",".","8",".",".","7","9"]]
);
