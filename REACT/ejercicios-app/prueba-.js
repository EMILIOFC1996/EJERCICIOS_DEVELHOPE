// function getInitials(fullName) {
//     const names = fullName.split(' ');
//     console.log(names)
//     if (names.length < 2) {
//       return null; // or handle this case as you prefer
//     }
//     const initials1 = names[0][0].toUpperCase();
//     console.log(initials1);
//     const initials2 = names[1][0].toUpperCase();
//     console.log(initials2);
   
//     return initials1 + '.' + initials2;
//   }
  
//   // Usage
// //   const name = 'John Doe';
//   console.log(getInitials('emilio fernandez')); // Output: J. 
function getInitials(fullName) {
    const names = fullName.split(' ');
    if (names.length < 2) {
      return null; // or handle this case as you prefer
    }
    const initials = [names[0][0].toUpperCase()];
    if (names.length > 1) {
      initials[initials.length] = names[names.length - 1][0].toUpperCase();
    }
    return initials.join('.');
  }
  
  // Usage
  
  console.log(getInitials('emilio fernandez'));