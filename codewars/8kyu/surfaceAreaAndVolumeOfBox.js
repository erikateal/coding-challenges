//OBJECTIVE
// Surface Area and Volume of a Box

//LINK
// https://www.codewars.com/kata/565f5825379664a26b00007c

// INSTRUCTIONS
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// MY SOLUTION
function getSize(width, height, depth){
    let area= (2*width*depth)+(2* depth * height)+(2*height*width)
    let volume= width *height*depth
    return [area,volume]
}

// BEST PRACTICE
// function getSize(width, height, depth){
//   let box = { width: width, height:height, depth:depth};
  
//   return [getArea(box), getVolume(box)];
// }


// function getArea(box){
//   return (2 * (box.depth * box.height)) + (2 * (box.width * box.height)) + (2 * (box.width * box.depth));
// }

// function getVolume(box){
//   return box.width * box.height * box.depth;
// }
