Stretch Goal 1: automatically generate the board! Instead of just typing out the global board object, write a function to create it.
•	Each cell will need row, col, isMine, isMarked, and hiddenproperties.
•	You could start by simply setting every isMine to true, but later you'll probably want to have a random number of mines scattered throughout the board.

Create a random board :

Create function creating a board object.
    Create one property for the board object: cells.
        Create value of cells : an array of objects
            Create 5 properties for each object :
                <!>Number of objects = value of column * value of row<!>  
                    Col
                        Create random value between 3 and 10
                    Row
                        Create random value between 3 and 10
                    isMine
                        Create random value true or false
                    isMarked
                        Create value false
                    hidden
                        Create value true

Call function on DOM load.
