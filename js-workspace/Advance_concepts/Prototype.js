const user = {
  name: "xyz",
  number: 123,
};
let mayName = "akshay       ";
Object.prototype.trueLength = function (params) {
  return this.trim().length;
};
console.log(mayName.trueLength());
///////////////////

const Teacher = {
    makeVideo = true
};
const TaAssistant = {
    isAvailable = true,
    hasKnowledge = true
};
const TaSupport = {
    isFTE = true
};

Object.setPrototypeOf(TaAssistant) = Teacher