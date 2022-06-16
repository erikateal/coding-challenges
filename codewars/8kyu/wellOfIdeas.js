//OBJECTIVE
// Well of Ideas - Easy Version

//LINK
// https://www.codewars.com/kata/57f222ce69e09c3630000212

// INSTRUCTIONS
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// MY SOLUTION
function well(x){
    const goodCount = x.filter(x => x == 'good').length;
    if (goodCount > 2) {
      return 'I smell a series!';
    } else if (goodCount <= 2 && goodCount >= 1) {
      return 'Publish!';
    }
      return 'Fail!';
  }

// BEST PRACTICE
// const well = x => {
//   const good_count = x.filter(x => x == 'good').length;
//   return good_count < 1 ? 'Fail!' : 
//          good_count < 3 ? 'Publish!' : 'I smell a series!';
// }
