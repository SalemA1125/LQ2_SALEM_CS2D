let username = prompt("Register your Username:");
let password = prompt("Register your passcode:");
let reEnterPass = prompt("Re-enter your passcode:");

if (username === "admin" && password === "12345" && password === reEnterPass) {
  alert("Welcome to DSA.  ");
} else if (password !== reEnterPass) {
  alert("Password does not Match, Re-run the code!");
} else if (username !== "admin") {
  alert("Incorrect Username, Re-run the code!");
} else {
  alert("Incorrect Password, Re-run the code!");
}

let name = prompt("Name:");
let address = prompt("Address:");
let age = prompt("Age:");
let classRole = prompt("Class Role (Officer, Student, Teacher):");
let course = prompt("Course (BSCS, BSM, BAEL):");

if (course === "BSCS") {
  if (classRole === "Officer") {
    for (let i = 0; i < age / 4; i++) {
      console.log(`Iterations Name was Printed: ${name}`);
    }
  } else if (classRole === "Student") {
    for (let i = 0; i < age / 4; i++) {
      console.log(`Iterations Name was Printed: ${name}`);
    }
  } else if (classRole === "Teacher") {
    for (let i = 0; i < age / 4; i++) {
      console.log(`Iterations Name was Printed: ${name}`);
    }
  } else {
    alert("Invalid class role. Please enter Officer, Student, or Teacher.");
  }
} else if (course === "BSM") {
  if (classRole === "Officer") {
    for (let i = 0; i < age / 4; i++) {
      console.log(`Iterations Name was Printed: ${name}`);
    }
  } else if (classRole === "Student") {
    for (let i = 0; i < age / 4; i++) {
      console.log(`Iterations Name was Printed: ${name}`);
    }
  } else if (classRole === "Teacher") {
    for (let i = 0; i < age / 4; i++) {
      console.log(`Iterations Name was Printed: ${name}`);
    }
  } else {
    alert("Invalid class role. Please enter Officer, Student, or Teacher.");
  }
} else if (course === "BAEL") {
  if (classRole === "Officer") {
    for (let i = 0; i < age / 4; i++) {
      console.log(`Iterations Name was Printed: ${name}`);
    }
  } else if (classRole === "Student") {
    for (let i = 0; i < age / 4; i++) {
      console.log(`Iterations Name was Printed: ${name}`);
    }
  } else if (classRole === "Teacher") {
    for (let i = 0; i < age / 4; i++) {
      console.log(`Iterations Name was Printed: ${name}`);
    }
  } else {
    alert("Invalid class role. Please enter Officer, Student, or Teacher.");
  }
} else {
  alert("Invalid course. Please enter BSCS, BSM, or BAEL.");
}
