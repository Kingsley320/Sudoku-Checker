let row = "";
let a=0;
let correct = false;
function column(arr){
  col = [];
  for(r=0;r<=arr.length-1; r++){
       col .push(arr[r][a]);
    if (col.length == 9){
//       console.log(col);
      return col;
    }
  }
}

function isSudoku(arr){
  for (i = 0; i<arr.length; i++){
    row=arr[i];
    column(arr);
    a++;
    check(row, col);
  }
  console.log(correct === true ? "Nothing Repeated In Sudoku" : "Repeated Number In Sudoku");
  
}
function check(row, col){
  if (row.filter(i => !i.includes(".")).some(a => col.filter(i => !i.includes(".")).includes(a))){
    correct = false
  }
  else{
    correct = true
  }
  return correct
}

isSudoku(
[[".","1",".",".","4",".",".","5","."],
 ["4",".","7",".",".",".","6",".","."],
 ["8","2",".","6",".",".",".","7","4"],
 [".",".",".",".","1",".","5",".","."],
 ["5",".",".",".",".",".",".",".","."],
 [".",".","4",".","5",".",".",".","6"],
 ["9","6",".",".","3",".",".","4","5"],
 ["3",".","5",".",".",".","8",".","1"],
 [".","7",".",".","2",".",".","3","."]]
);
