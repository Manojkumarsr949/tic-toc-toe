var arr = "manoj"
String.prototype.reverse = function fun(arrr){
  var st =""
  
    for(let i=this.length-1;i>=0;i--){
      st = st+this[i];
    }
  
  return st
}

function capitalizeSentence ( str ) {
  // let's split the string after every '.', Since every sentence ends with a dot.
  if ( ! str ) { str = this; }
  let sentences = str.split('.');
  let updated = [];
  

  // let's map over our sentences array 
  sentences.map( function (sentence) {
    if ( sentence ) {
      // if the first character is not spaced
      if ( sentence[0] !== ' ' ) {
        let output = sentence.charAt(0).toUpperCase() + sentence.slice(1);
        updated.push( output );
      }
      // if the first character is spaced
      else {
        let output = sentence.charAt(1).toUpperCase() + sentence.slice(2);
        updated.push( ' ' + output );
      }
    }
  });

  // let's join our array with ., the same character we split it with.
  let final = updated.join('.');

  // if the sentence ends with ., let's add it to our final output as well.
  if ( str.endsWith('.') ) {
    final += '.';
  }

  return final;
}
String.prototype.capitalize = capitalizeSentence;

console.log("Manojkumar".capitalize())

//Debouncing function

 /* function onEntrytoimputbox(event){
    console.log(event.target.value)
  }

  function debouncer (fn,d){
    var debounceTimer
    return function(event){
      const contex = this
      const args = arguments
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(()=>{fn.apply(contex,arguments,event)},d)
    }
  }

  const betterFunction = debouncer(onEntrytoimputbox,1000) */