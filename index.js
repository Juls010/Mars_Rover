function moverRover(x, y, dir, instrucciones) {
    for (let i = 0; i < instrucciones.length; i++) {
        const inst = instrucciones[i];
        
        if (inst === "L") {
            if (dir === "N") dir = "W";
            else if (dir === "W") dir = "S";
            else if (dir === "S") dir = "E";
            else if (dir === "E") dir = "N";
        }
        
        if (inst === "R") {
            if (dir === "N") dir = "E";
            else if (dir === "E") dir = "S";
            else if (dir === "S") dir = "W";
            else if (dir === "W") dir = "N";
        }
        
        if (inst === "M") {
            if (dir === "N") y++;
            if (dir === "S") y--;
            if (dir === "W") x--;
            if (dir === "E") x++;
        }
    }
    
    console.log(`${x} ${y} ${dir}`);
}

console.log("Resultado:");
moverRover(1, 2, "N", "LMLMLMLMM");
moverRover(3, 3, "E", "MMRMMRMRRM");

console.log("\nEsperado:");
console.log("1 3 N");
console.log("5 1 E");