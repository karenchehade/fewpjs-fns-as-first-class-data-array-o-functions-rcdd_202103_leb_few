function wakeDog(dogName, dogBreed) {
  const str=`Wake ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}
function leashDog(dogName, dogBreed) {
  const str=`leash ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}
function walkToPark(dogName, dogBreed) {
  const str=`Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}
function throwFrisbee(dogName, dogBreed) {
  const str=`Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}
function walkHome(dogName, dogBreed) {
  const str=`Walk home with ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}
function unleashDog(dogName, dogBreed) {
  const str=`Unleash ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}
let routine =[wakeDog(dogName, dogBreed),leashDog(dogName, dogBreed),walkToPark(dogName, dogBreed),throwFrisbee(dogName, dogBreed),walkHome(dogName, dogBreed),unleashDog(dogName, dogBreed)];
function exerciseDog(dogName, dogBreed) {
  const result = [];
  for(i=0 ;i< routine.length;i++){
    result[i]+= routine[i](dogName, dogBreed);
  }
  return result;
}
