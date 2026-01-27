const counter = {
   value:0,

   increment(){
    this.value +=1;
    console.log(this.value);

   },
   decrement(){
    this.value -=1;
    console.log(this.value);

   },
   reset(){
    this.value =0;
    console.log(this.value);

   },


};
counter.increment();
counter.increment();
counter.decrement();
counter.reset();