//Polyfill for map - Transform Each element , return an array
Array.prototype.myMap=function(callback){
  const result=[];
  for(let i=0;i<this.length;i++){
    const transformed=callback(this[i],i,this);
    result.push(transformed);
  }
  return result;
}

//Pollfill for reduce - Add values into single result 
Array.prototype.myReduce=function(callback,initialValue){
  let accumulator;  
  let startIndex;

  if (initialValue !== undefined) {
  startIndex = 0;  // If initial provided, start from 0
} else {
  startIndex = 1;  // Else, skip first element (start from 1)
}
  
  if (initialValue !== undefined) {
    accumulator = initialValue;  // If initial provided, use it
  } else {
    accumulator = this[0];  // Else, use first element
  }
  
  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);  // Update accumulator
  }
  return accumulator;
};

const habits = ['Drink water', 'Exercise', 'Read'];
const upperHabits = habits.myMap(habit => habit.toUpperCase());  // ['DRINK WATER', 'EXERCISE', 'READ']
const totalLength = habits.myReduce((acc, habit) => acc + habit.length, 0);  // Sum of lengths
console.log('Mapped:', upperHabits);
console.log('Reduced:', totalLength);
