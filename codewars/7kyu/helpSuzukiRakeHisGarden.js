//OBJECTIVE
// Help Suzuki rake his garden!

//LINK
// https://www.codewars.com/kata/571c1e847beb0a8f8900153d

// INSTRUCTIONS
// You will be given a string representing the garden such as:

// garden = 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel'
// Rake out any items that are not a rock or gravel and replace them with gravel such that:

// garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
// Returns a string with all items except a rock or gravel replaced with gravel:

// garden = 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'

// MY SOLUTION
function rakeGarden(garden) {
  let rake = garden.split(" ");
  for (let i = 0; i < rake.length; i++) {
    if (rake[i] !== "gravel" && rake[i] !== "rock") {
      rake[i] = "gravel";
    }
  }
  return rake.join(" ");
}

// BEST PRACTICE
// const rakeGarden = garden =>
// garden
// .split(' ')
// .map(item => item === 'rock' ? 'rock' : 'gravel')
// .join(' ')
