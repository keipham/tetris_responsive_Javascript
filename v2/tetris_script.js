var world = [
    [0,0,0,0,4,4,0,0,0,0],
    [0,0,0,0,4,4,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
];

var ruins = [
    [0,0,0,0,4,4,0,0,0,0],
    [0,0,0,0,4,4,0,0,0,0]
];

function drawWorld() {
    document.getElementById('world').innerHTML = "";
    for(var y=0; y<world.length; y++) {
        for(var x=0; x<world[y].length; x++) {
            if(world[y][x]=== 0){
                document.getElementById('world').innerHTML += "<div class='cell empty'></div>";
            } else if(world[y][x]=== 1 || world[y][x]=== 11){
                document.getElementById('world').innerHTML += "<div class='cell barShape'></div>";
            } else if(world[y][x]=== 2 || world[y][x]=== 12){
                document.getElementById('world').innerHTML += "<div class='cell lShape'></div>";
            } else if(world[y][x]=== 3 || world[y][x]=== 13){
                document.getElementById('world').innerHTML += "<div class='cell zShape'></div>";
            } else if(world[y][x]=== 4 || world[y][x]=== 14){
                document.getElementById('world').innerHTML += "<div class='cell squareShape'></div>";
            } else if(world[y][x]=== 5 || world[y][x]=== 15){
                document.getElementById('world').innerHTML += "<div class='cell reverseZshape'></div>";
            } else if(world[y][x]=== 6 || world[y][x]=== 16){
                document.getElementById('world').innerHTML += "<div class='cell pyramid'></div>";
            } else if(world[y][x]=== 7 || world[y][x]=== 17){
                document.getElementById('world').innerHTML += "<div class='cell reverseLshape'></div>";
            }
        }
        document.getElementById('world').innerHTML += "<br>";
    }
}

function drawRuins() {
    document.getElementById('ruins').innerHTML = "";
    for(var y=0; y<ruins.length; y++) {
        for(var x=0; x<ruins[y].length; x++) {
            if(ruins[y][x]=== 0){
                document.getElementById('ruins').innerHTML += "<div class='cell'></div>";
            } else if(ruins[y][x]=== 1){
                document.getElementById('ruins').innerHTML += "<div class='cell barShape'></div>";
            } else if(ruins[y][x]=== 2){
                document.getElementById('ruins').innerHTML += "<div class='cell lShape'></div>";
            } else if(ruins[y][x]=== 3){
                document.getElementById('ruins').innerHTML += "<div class='cell zShape'></div>";
            } else if(ruins[y][x]=== 4){
                document.getElementById('ruins').innerHTML += "<div class='cell squareShape'></div>";
            } else if(ruins[y][x]=== 5){
                document.getElementById('ruins').innerHTML += "<div class='cell reverseZshape'></div>";
            } else if(ruins[y][x]=== 6){
                document.getElementById('ruins').innerHTML += "<div class='cell pyramid'></div>";
            } else if(world[y][x]=== 7){
                document.getElementById('ruins').innerHTML += "<div class='cell reverseLshape'></div>";
            }
        }
        document.getElementById('ruins').innerHTML += "<br>";
    }
}
function moveShapesDown() {
    canMove = true;
    for(var y=world.length-1; y>=0; y--) {
        for(var x=0; x<world[y].length; x++) {
            if(world[y][x] > 0 && world[y][x] < 10 ){
                if(y+1 === world.length || world[y+1][x] > 10){
                    canMove = false;
                    freeze();
                }
            }
        }
    }
    if (canMove) {
        for(var y=world.length-1; y>=0; y--) {
            for(var x=0; x<world[y].length; x++) {
                if(world[y][x] > 0 && world[y][x] < 10 ){
                    world[y+1][x] = world[y][x];
                    world[y][x] = 0;
                }
            }
        }
        drawWorld();
    }
    checkLines();
}
function moveShapesLeft() {
    canMove = true;
    for(var y=world.length-1; y>=0; y--) {
        for(var x=0; x<world[y].length; x++) {
            if(world[y][x] > 0 && world[y][x] < 10 ){
                if(x === 0 || world[y][x-1] > 10){
                    canMove = false;
                }
            }
        }
    }
    if (canMove) {
        for(var y=world.length-1; y>=0; y--) {
            for(var x=0; x<world[y].length; x++) {
                if(world[y][x] > 0 && world[y][x] < 10 ){
                    world[y][x-1] = world[y][x];
                    world[y][x] = 0;
                }
            }
        }
        drawWorld();
    }
}
function moveShapesRight() {
    canMove = true;
    for(var y=world.length-1; y>=0; y--) {
        for(var x=0; x<world[y].length; x++) {
            if(world[y][x] > 0 && world[y][x] < 10 ){
                if(x === 9 || world[y][x+1] > 10){
                    canMove = false;
                }
            }
        }
    }
    if (canMove) {
        for(var y=world.length-1; y>=0; y--) {
            for(var x=world[y].length; x>=0; x--) {
                if(world[y][x] > 0 && world[y][x] < 10 ){
                    world[y][x+1] = world[y][x];
                    world[y][x] = 0;
                }
            }
        }
        drawWorld();
    }
}
function rotateShapeRight() {
    canMove = true;
    for(var y=world.length-1; y>=0; y--) {
        for(var x=0; x<world[y].length; x++) {
            if(world[y][x] > 0 && world[y][x] < 10 ){
                if(world[y+1][x] > 10 || world[y-1][x] > 10){
                    canMove = false;
                }
            }
        }
    }
    if (canMove) {
        var turn = 0;
        //the variable "turn" allows the function to work only once when the first cell of the shape is met by the loop AND not for EVERY cell of the shape
        for(var y=world.length-1; y>=0; y--) {
            for(var x=0; x<world[y].length; x++) {
                if(world[y][x] > 0 && world[y][x] < 10 ){
                    if (world[y][x] === 1 && turn === 0){
                        if (world[y-1][x] === 1){
                            //The barShape (value=1) is VERTICAL
                            if (count%3 === 0){
                                //My shape will rotate on the second cell of my shape (from the top)
                                if (world[y-2][x+1] != 0 && world[y-2][x-1] === 0 && world[y-2][x-2] === 0 && world[y-2][x-3] === 0){
                                    //If my shape is blocked on the right side but free on the left side
                                    world[y-2][x-1] = world[y][x];
                                    world[y-2][x-2] = world[y-1][x];
                                    world[y-2][x-3] = world[y-3][x];
                                    //I reset to 0 the cases that should now be empty
                                    world[y][x] = 0;
                                    world[y-1][x] = 0;
                                    world[y-3][x] = 0;
                                } else if (world[y-2][x-1] != 0 && world[y-2][x+1] === 0 && world[y-2][x+2] === 0 && world[y-2][x+3] === 0){
                                    //If my shape is blocked on the left side (no space on the left) but free on the right side
                                    world[y-2][x+1] = world[y][x];
                                    world[y-2][x+2] = world[y-1][x];
                                    world[y-2][x+3] = world[y-3][x];  
                                    //I reset to 0 the cases that should now be empty
                                    world[y][x] = 0;
                                    world[y-1][x] = 0;
                                    world[y-3][x] = 0;
                                } else if (world[y-2][x-1] === 0 && world[y-2][x-2] === 0 && world[y-2][x+1] === 0){
                                    //If the shape can move freely
                                    world[y-2][x-1] = world[y-3][x];
                                    world[y-2][x+1] = world[y-1][x];
                                    world[y-2][x-2] = world[y][x];
                                    //I reset to 0 the cases that should now be empty
                                    world[y-3][x] = 0;
                                    world[y-1][x] = 0;
                                    world[y][x] = 0;
                                }
                            } else if (count%3 !== 0){
                                //My shape will rotate on the third cell of my shape (from the top)
                                if (world[y-1][x-1] != 0 && world[y-1][x+1] === 0 && world[y-1][x+2] === 0 && world[y-1][x+3] === 0){
                                    //If my shape is blocked on the left side but free on the right side
                                    world[y-1][x+1] = world[y][x];
                                    world[y-1][x+2] = world[y-2][x];
                                    world[y-1][x+3] = world[y-3][x];  
                                    //I reset to 0 the cases that should now be empty
                                    world[y][x] = 0;
                                    world[y-2][x] = 0;
                                    world[y-3][x] = 0;
                                } else if (world[y-1][x+1] != 0 && world[y-1][x-1] === 0 && world[y-1][x-2] === 0 && world[y-1][x-3] === 0) {
                                    //If my shape is blocked on the right side but free on the left side
                                    world[y-1][x-1] = world[y][x];
                                    world[y-1][x-2] = world[y-2][x];
                                    world[y-1][x-3] = world[y-3][x];
                                    //I reset to 0 the cases that should now be empty
                                    world[y][x] = 0;
                                    world[y-2][x] = 0;
                                    world[y-3][x] = 0;
                                } else if (world[y-1][x-1] === 0 && world[y-1][x+1] === 0 && world[y-1][x+2] === 0){
                                    //my shape is free to move
                                    world[y-1][x-1] = world[y-2][x];
                                    world[y-1][x+1] = world[y][x];
                                    world[y-1][x+2] = world[y-3][x];
                                    //I reset to 0 the cases that should now be empty
                                    world[y-3][x] = 0;
                                    world[y-2][x] = 0;
                                    world[y][x] = 0;
                                }
                            }
                        } else if (world[y-1][x] === 0){
                            //The barShape (value=1) is HORIZONTAL
                            if (count%3 === 0){
                                world[y-1][x+1] = world[y][x];
                                world[y+1][x+1] = world[y][x+2];
                                world[y+2][x+1] = world[y][x+3];
                                //I reset to 0 the cases that should now be empty
                                world[y][x] = 0;
                                world[y][x+2] = 0;
                                world[y][x+3] = 0;
                            } else if (count%3 !== 0){
                                world[y-1][x+2] = world[y][x+1];
                                world[y-2][x+2] = world[y][x];
                                world[y+1][x+2] = world[y][x+3];
                                //I reset to 0 the cases that should now be empty
                                world[y][x+1] = 0;
                                world[y][x+3] = 0;
                                world[y][x] = 0;
                            }                                
                        }
                    } else if (world[y][x] === 2 && turn === 0){
                        //value 2 = L shape
                        if (world[y][x+1] === 2 && world[y-1][x] === 2 && world[y-2][x] === 2){
                            //The shape points to the top and will rotate clockwise
                            if (world[y][x+2] !== 0 && world[y+1][x-1] === 0){
                                //If the shape is blocked on the right side
                                world[y][x-1] = world[y-1][x];
                                world[y+1][x-1] = world[y-2][x];
                                //I reset to 0 the cases that should now be empty
                                world[y-1][x] = 0;
                                world[y-2][x] = 0;
                              } else {
                                //If the shape can move freely
                                world[y+1][x] = world[y][x+1];
                                world[y][x+2] = world[y-2][x];
                                //I reset to 0 the cases that should now be empty
                                world[y-1][x] = 0;
                                world[y-2][x] = 0;
                            }
                        } else if (world[y-1][x] === 2 && world[y-1][x+1] === 2 && world[y-1][x+2] === 2){
                            //The shape points right and will rotate clockwise
                            if (world[y-1][x-1] !== 0 && world[y+1][x] === 0){
                                //The shape is blocked on the left side
                                world[y][x+1] = world[y][x];
                                world[y+1][x+1] = world[y-1][x+2];
                                //I reset to 0 the cases that should now be empty
                                world[y][x] = 0;
                                world[y-1][x+2] = 0;
                            } else if (world[y-1][x-1] === 0 && world[y+1][x] === 0){
                                //The shape can move freely
                                world[y-1][x-1] = world[y][x];
                                world[y+1][x] = world[y-1][x+1];
                                //I reset to 0 the cases that should now be empty
                                world[y-1][x+1] = 0;
                                world[y-1][x+2] = 0; 
                            }                      
                        } else if (world[y-1][x] === 2 && world[y-2][x] === 2 && world[y-2][x-1] === 2){
                            //The shape points to the bottom and will rotate clockwise
                            if (world[y-2][x-2] !== 0){
                                world[y-2][x+1] = world[y][x];
                                world[y-3][x+1] = world[y-1][x];
                                //I reset to 0 the cases that should now be empty
                                world[y][x] = 0;
                                world[y-1][x] = 0;
                            } else if (world[y-2][x-2] === 0){
                                world[y-2][x-2] = world[y][x];
                                world[y-3][x] = world[y-1][x];
                                //I reset to 0 the cases that should now be empty
                                world[y][x] = 0;
                                world[y-1][x] = 0; 
                            }
                        } else if (world[y][x+1] === 2 && world[y][x+2] === 2 && world[y-1][x+2] === 2){
                            //the shape points left and will rotate clockwise
                            world[y][x+3] = world[y-1][x+2];
                            world[y-2][x+2] = world[y][x+2];
                            //I reset to 0 the cases that should now be empty
                            world[y][x] = 0;
                            world[y][x+1] = 0;
                        }
                    } else if (world[y][x] === 3 && turn === 0){
                        // value 3 = Z shape
                        if (world[y][x+1] === 3 && world[y-1][x] === 3 && world[y-1][x-1] === 3){
                            //The shape looks like a Z and will rotate clockwise
                            world[y+1][x] = world[y-1][x-1];
                            world[y-1][x+1] = world[y-1][x];
                            //I reset to 0 the cases that should now be empty
                            world[y-1][x-1] = 0;
                            world[y-1][x] = 0;
                        } else if (world[y-1][x] === 3 && world[y-1][x+1] === 3 && world[y-2][x+1] === 3){
                            //The shape looks like a N and will rotate clockwise
                            if (world[y-1][x-1] === 0 && world[y][x+1] === 0){
                                //If my shape can move freely
                                world[y-1][x-1] = world[y-1][x+1];
                                world[y][x+1] = world[y-2][x+1];
                                //I reset to 0 the cases that should now be empty
                                world[y-1][x+1] = 0;
                                world[y-2][x+1] = 0;
                            } else if (world[y-1][x-1] !== 0 && world[y][x+1] === 0 && world[y][x+2] === 0){
                                //If my shape is blocked on the left side but is free on the right side
                                world[y][x+1] = world[y][x];
                                world[y][x+2] = world[y-2][x+1];
                                //I reset to 0
                                world[y][x] = 0;
                                world[y-2][x+1] = 0;
                            }
                          
                        }                      
                    } else if (world[y][x] === 5 && turn === 0){
                        //value 5 = S shape
                        if (world[y][x+1] === 5 && world[y-1][x+1] === 5 && world[y-1][x+2] === 5){
                            //The shape looks like a S
                            if (world[y+1][x+1] === 0 && world[y-1][x] === 0){
                                world[y+1][x+1] = world[y-1][x+2];
                                world[y-1][x] = world[y-1][x+1];
                                //I reset to 0
                                world[y-1][x+2] = 0;
                                world[y-1][x+1] = 0;
                            } else if (world[y+1][x+1] !== 0 && world[y-1][x] === 0){
                                world[y-2][x] = world[y-1][x+2];
                                world[y-1][x] = world[y][x];
                                //I reset to 0 the cases that should now be empty
                                world[y-1][x+2] = 0;
                                world[y][x] = 0;
                            }                             
                        } else if (world[y-1][x] === 5 && world[y-1][x-1] === 5 && world[y-2][x-1] === 5){
                            // The shape looks like a reverse N
                            if (world[y-1][x+1] === 0 && world[y][x-1] === 0){
                                //If my shape can move freely
                                world[y-1][x+1] = world[y-2][x-1];
                                world[y][x-1] = world[y-1][x-1];
                                //I reset to 0 the cases that should now be empty
                                world[y-2][x-1] = 0;
                                world[y-1][x-1] = 0;
                            } else if (world[y-1][x+1] !== 0 && world[y][x-1] === 0 && world[y][x-2] === 0){
                                //If my shape is blocked on the right side but free on the left side
                                world[y][x-1] = world[y][x];
                                world[y][x-2] = world[y-2][x-1];
                                //I reset to 0
                                world[y][x] = 0;
                                world[y-2][x-1] = 0;
                            }
                         
                        }
                    } else if (world[y][x] === 6 && turn === 0){
                        //value 6 = pyramid
                        if (world[y][x+1] === 6 && world[y][x+2] === 6){
                            //the pyramid points to the top and will rotate clock wise
                            if (world[y+1][x+1] === 0){
                                //shape can move freely
                                world[y+1][x+1] = world[y][x];
                                //I reset to 0
                                world[y][x] = 0;
                            }
                        } else if (world[y-1][x] === 6 && world[y-2][x] === 6 && world[y-1][x+1] === 6){
                            //the shape points right and will rotate clockwise
                            if (world[y-1][x-1] === 0){
                                //can move freely
                                world[y-1][x-1] = world[y-2][x];
                                //I reset to 0
                                world[y-2][x] = 0;
                            } else if (world[y-1][x-1] !== 0){
                                //shape blocked on the left side
                                world[y-1][x+2] = world[y][x];
                                world[y-2][x+1] = world[y-2][x];
                                //I reset to 0;
                                world[y][x] = 0;
                                world[y-2][x] = 0;
                            }
                        } else if (world[y-1][x-1] === 6 && world[y-1][x] === 6 && world[y-1][x+1] === 6){
                            //The shape points to the bottom and will rotate clockwise
                            if (world[y-2][x] === 0){
                                world[y-2][x] = world[y-1][x+1];
                                //I reset
                                world[y-1][x+1] = 0;
                            }
                        } else if (world[y-1][x-1] === 6 && world[y-1][x] === 6 && world[y-2][x] === 6){
                            //The shape points left
                            if (world[y-1][x+1] === 0){
                                world[y-1][x+1] = world[y][x];
                                world[y][x] = 0;
                            } else if (world[y-1][x+1] !== 0){
                                world[y-1][x-2] = world[y][x];
                                world[y-2][x-1] = world[y-2][x];
                                //I reset
                                world[y][x] = 0;
                                world[y-2][x] = 0;
                            }
                        }
                    } else if (world[y][x] === 7 && turn === 0){
                        //value 7 = reverse L shape
                        if (world[y][x+1] === 7 && world[y-1][x+1] === 7 && world[y-2][x+1] === 7){
                            //The shape points to the top and will rotate clockwise
                            if (world[y][x+2] !== 0 && world[y-1][x] === 0 && world[y-1][x-1] === 0 && world[y-2][x-1] === 0){
                                //If the shape is blocked on the right side
                                world[y-1][x] = world[y][x];
                                world[y-1][x-1] = world[y][x+1];
                                world[y-2][x-1] = world[y-2][x+1];
                                //I reset to 0 the cases that should now be empty
                                world[y][x] = 0;
                                world[y][x+1] = 0;
                                world[y-2][x+1] = 0;
                              } else if (world[y-1][x] === 0 && world[y-2][x] === 0 && world[y-1][x+2] === 0){
                                //If the shape can move freely
                                world[y-1][x] = world[y][x];
                                world[y-2][x] = world[y][x+1];
                                world[y-1][x+2] = world[y-2][x+1];
                                //I reset to 0 the cases that should now be empty
                                world[y][x] = 0;
                                world[y][x+1] = 0;
                                world[y-2][x+1] = 0;
                            }
                        } else if (world[y-1][x] === 7 && world[y][x+1] === 7 && world[y][x+2] === 7){
                            //The shape points right and will rotate clockwise
                            if (world[y+1][x] === 0 && world[y+2][x] === 0){
                                //The shape can move freely
                                world[y+1][x] = world[y-1][x];
                                world[y+2][x] = world[y][x+2];
                                //I reset to 0 the cases that should now be empty
                                world[y-1][x] = 0;
                                world[y][x+2] = 0; 
                            }                      
                        } else if (world[y-1][x] === 7 && world[y-2][x] === 7 && world[y-2][x+1] === 7){
                            //The shape points to the bottom and will rotate clockwise
                            if (world[y-1][x-1] !== 0 && world[y-1][x+1] === 0 && world[y-1][x+2] === 0 && world[y][x+2] === 0){
                                //The shape is blocked on the left side
                                world[y-1][x+1] = world[y][x];
                                world[y-1][x+2] = world[y-2][x];
                                world[y][x+2] = world[y-2][x+1];
                                //I reset to 0 the cases that should now be empty
                                world[y][x] = 0;
                                world[y-2][x] = 0;
                                world[y-2][x+1] = 0;
                            } else if (world[y-1][x-1] === 0 && world[y-1][x+1] === 0 && world[y][x+1] === 0){
                                //Shape can move freely
                                world[y-1][x-1] = world[y][x];
                                world[y-1][x+1] = world[y-2][x];
                                world[y][x+1] = world[y-2][x+1];
                                //I reset to 0 the cases that should now be empty
                                world[y][x] = 0;
                                world[y-2][x] = 0;
                                world[y-2][x+1] = 0; 
                            }
                        } else if (world[y-1][x] === 7 && world[y-1][x-1] === 7 && world[y-1][x-2] === 7){
                            //the shape points left and will rotate clockwise
                            if (world[y-2][x] === 0 && world[y-3][x] === 0){
                                world[y-2][x] = world[y][x];
                                world[y-3][x] = world[y-1][x-2];
                                //I reset to 0 the cases that should now be empty
                                world[y][x] = 0;
                                world[y-1][x-2] = 0;
                            }
                        }
                    }
                    turn++;
                }
            }
        }
        drawWorld();
    }
}
function freeze(){
    for(var y=world.length-1; y>=0; y--) {
        for(var x=0; x<world[y].length; x++) {
            if(world[y][x] > 0 && world[y][x] < 10 ){
                world[y][x] = world[y][x] + 10;
            }
        }
    }
    checkLines();
    var ran = Math.floor(Math.random()*7);
    if(ran === 0 && world[0][5] === 0 && world[1][5] === 0 && world[2][5] === 0 && world[3][5] === 0){
        //bar shape
        world[0][5] = 1;
        world[1][5] = 1;
        world[2][5] = 1;
        world[3][5] = 1; 
    } else if (ran === 1 && world[0][4] === 0 && world[1][4] === 0 && world[2][4] === 0 && world[2][5] === 0){
        //L shape
        world[0][4] = 2;
        world[1][4] = 2;
        world[2][4] = 2;
        world[2][5] = 2;
    } else if (ran === 2 && world[0][4] === 0 && world[0][5] === 0 && world[1][5] === 0 && world[1][6] === 0){
        //Z shape
        world[0][4] = 3;
        world[0][5] = 3;
        world[1][5] = 3;
        world[1][6] = 3;
    } else if (ran === 3 && world[0][4] === 0 && world[0][5] === 0 && world[1][4] === 0 && world[1][5] === 0){
        //cube
        world[0][4] = 4;
        world[0][5] = 4;
        world[1][4] = 4;
        world[1][5] = 4;
    } else if (ran === 4 && world[0][4] === 0 && world[0][5] === 0 && world[1][3] === 0 && world[1][4] == 0){
        //S shape
        world[0][4] = 5;
        world[0][5] = 5;
        world[1][3] = 5;
        world[1][4] = 5;
    } else if (ran === 5 && world[0][5] === 0 && world[1][4] === 0 && world[1][5] === 0 && world[1][6] === 0) {
        //Pyramid shape
        world[0][5] = 6;
        world[1][4] = 6;
        world[1][5] = 6;
        world[1][6] = 6;
    } else if (ran === 6 && world[0][4] === 0 && world[1][4] === 0 && world[2][4] === 0 && world[2][3] === 0){
        //reverseLshape
        world[0][4] = 7;
        world[1][4] = 7;
        world[2][4] = 7;
        world[2][3] = 7;
    } else {
        if (score >= localStorage.getItem('best-score')){
            alert("Congrats ! This is your new best score: "+score);
        } else if (score < localStorage.getItem('best-score')){
            alert("Too bad! Try again!");
        }     
    } 
}

function checkLines(){
    var nbFullLine = 0;
    for(var y=world.length-1; y>=0; y--) {
        fullLine = true;
        for(var x=0; x<world[y].length; x++) {
            if(world[y][x] < 10) {
                fullLine = false;
            }
        }
        if (fullLine) {
            world.splice(y, 1);
            world.splice(0, 0, [0,0,0,0,0,0,0,0,0,0]);
            //nbFullLine keeps track of the number of line destroyed at the same time to determine the appropriate score
            nbFullLine++;
            //line_count allows to track number of line remaining before next level
            line_count ++;
            //lines keeps track of the number of lines destroyed
            lines++;
            document.getElementById('lines').innerHTML = lines;
        }
    }
    if (nbFullLine === 1){
        score = score + 40*(level+1);
        document.getElementById('score').innerHTML = score;
    } else if (nbFullLine === 2){       
        score = score + 100*(level+1);
        document.getElementById('score').innerHTML = score;
        
    } else if (nbFullLine === 2){       
        score = score + 100*(level+1);
        document.getElementById('score').innerHTML = score;
    } else if (nbFullLine === 3){       
        score = score + 300*(level+1);
        document.getElementById('score').innerHTML = score;
    } else if (nbFullLine === 4){       
        score = score + 1200*(level+1);
        document.getElementById('score').innerHTML = score;
    }
        if (score > localStorage.getItem('best-score')){
            localStorage.setItem('best-score', score);
        }
        document.getElementById('best').innerHTML = localStorage.getItem('best-score');
    
}

function levelup(){
    if (line_count != 0 && line_count>=(5*level)){
        level++;
        document.getElementById('level').innerHTML = level;
        line_count = 0;
        if (game_speed <= 250 && game_speed >= 50){
            game_speed = game_speed-20;
        } else if (game_speed <= 50){
            //no change of speed
        } else {
            game_speed = game_speed-150;
        }
    }
}
document.onkeydown = function(e) {
    if (e.keyCode === 37){
        moveShapesLeft(); 
    } else if (e.keyCode === 39){
        moveShapesRight();
    } else if (e.keyCode === 40){
        moveShapesDown();
    } else if (e.keyCode === 38){
        rotateShapeRight();
        if (count === 3){
            count = 0;
        };
        count++;
    }
}
function gameLoop(){
    moveShapesDown();
    drawWorld();
    levelup();
    setTimeout(gameLoop, game_speed);
}

function ruinsLoop(){
    var raandom = Math.floor(Math.random()*6);
    if(raandom === 0){
        //bar shape
        ruins = [
            [0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,1,0,0,0,0,0]
            ];
    } else if (raandom === 1){
        //L shape
        ruins = [
            [0,0,0,0,2,0,0,0,0,0],
            [0,0,0,0,2,0,0,0,0,0],
            [0,0,0,0,2,2,0,0,0,0]
           
            ];
    } else if (raandom === 2){
        //Z shape
        ruins = [
            [0,0,0,3,3,0,0,0,0,0],
            [0,0,0,0,3,3,0,0,0,0]
         
            ];
    } else if (raandom === 3){
        //cube
        ruins = [
            [0,0,0,0,4,4,0,0,0,0],
            [0,0,0,0,4,4,0,0,0,0]
          
            ];
    } else if (raandom === 4){
        //S shape
        ruins = [
            [0,0,0,0,5,5,0,0,0,0],
            [0,0,0,5,5,0,0,0,0,0]
          
            ];
    } else if (raandom === 5) {
        //Pyramid shape
        ruins = [
            [0,0,0,0,6,0,0,0,0,0],
            [0,0,0,6,6,6,0,0,0,0]
          
            ];
    } else if (raandom === 6){
        //reverseLshape
        ruins = [
            [0,0,0,0,7,0,0,0,0],
            [0,0,0,0,7,0,0,0,0],
            [0,0,0,7,7,0,0,0,0]
        ]
    }
    drawRuins();
    setTimeout(ruinsLoop, 9000);
}
function night(){
      document.getElementById('body').classList.toggle('active');
      document.getElementById('mode').classList.toggle('active');
      document.getElementsByClassName('title')[1].classList.toggle('active');
      document.getElementsByClassName('title')[2].classList.toggle('active');
      document.getElementsByClassName('title')[3].classList.toggle('active');
      document.getElementById('score').classList.toggle('active');
      document.getElementById('lines').classList.toggle('active');
      document.getElementById('level').classList.toggle('active');
    }
//initial level, lines and game speed
var level = 0;
var lines = 0;
var score = 0;
var game_speed = 1000;

//line_count keeps the count to know how many lines must be destroyed before next level.The variable is reset at each levelup.
var line_count = 0;

//The variable 'count' is used for rotation of bar shape
var count = 0;

if (localStorage.getItem('best-score') !== null){
    document.getElementById('best').innerHTML = localStorage.getItem('best-score');
} else {
    document.getElementById('best').innerHTML = "0";
}
     
document.getElementById('lines').innerHTML = "0";
document.getElementById('level').innerHTML = "0";
document.getElementById('score').innerHTML = "0";
drawWorld();
drawRuins();
gameLoop();
ruinsLoop();