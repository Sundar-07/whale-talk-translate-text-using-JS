let input='turpentine and turtles';
let vowels=['a','e','i','o','u'];
let resultArray=[]; //a place to store the vowels

for(let i=0;i<input.length;i++)
	{
//  console.log("imputs is= "+input[i]);
  	
    for(let j=0;j<vowels.length;j++)
  	{
  //  console.log("vowel is= "+vowels[j]);
    
      if(input[i]===vowels[j]) //a code block that compares the *input* letter to every letter in the *vowels* array.
    	{
    		if(input[i]==='e')
        //checks if each letter in the *input* string is equal to 'e'
          //Whales double their es and the us in their language.
        {  
          resultArray.push('ee');
              }  
      else if(input[i]==='u')
      	{
              resultArray.push('uu')
              }	
        else
        		{
                resultArray.push([input[i]])
              }
     
    }
  }
}
 console.log(resultArray.join('').toUpperCase())
//we want to capitalize the array elements and put them together as one string.