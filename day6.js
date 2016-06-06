/* for integers starting at zero, loop the integers given in a way that adds up each number and each time it adds a number, adds one to the counter.  then divide by the counter number  */
function average(numbers_list) {var sum = 0;
for( var i = 0; i < numbers_list.length; i++ ){
    sum +=numbers_list[i]; 
}
return sum/numbers_list.length;

; }
/* run an if/else statement, return the grade based on the number range, if the grade is above the minimum necessary for that letter grade, then print that letter grade, and continue with else/if statements until you get to below 60, at which point it's an F */
function assignGrade(grade) {
if (grade >=90) {
	return 'A';
}
else if (grade >=80) {
	return 'B';
}
else if (grade >=70) {
	return 'C';
}
else if (grade >=60) {
	return 'D';
}
else {
	return 'F';
}

;}
/*if number is greater than 1 return the number and noun plus an s, otherwise return number +noun */
function pluralize(num, noun) {
if (num>1){
	return num + " " + noun + "s";
} 
	return num + " " + noun;
}
/* run a for loop to measure the length of each word, and replace the word with the longest length with the current word when it is shorter than the longest one so far, return when no word is longer than the longest*/
function longestWord(sentence) {
var str= sentence.split(" ");
var longest= 0;
var word=null;
for (var i = 0; i < str.length; i++) {
	if (longest < str[i].length){
		longest = str[i].length; 
		word= str[i];
	}
} return word;
}

function palindrome(word) {
	//split the word, reverse its letters, join the reversed letter, if the new words are equal, return yes, otherwise return no //
	var pal = word.split("").reverse().join("")
	if (pal === word) {
		return "yes";
	}
	else if (pal != word) {
		return "no";
	}
}

function letterCounter(phrase, letter) {
	// split the word into letters, make a variable to count the equal letters, run a for loop with an if statement that adds one to count whenever i=letter//
	var cut = phrase.split("")
	var count = 0;
	for (var i = 0; i <= cut.length - 1; i++) {
	 	if (cut[i] === letter) {
	 		count++;
	 	}
	 } 
	return count 
}

function longestPalindrome(sentence) {
	//Add the code from longestword to the front of palindrome, return the proper statement //
	var str = sentence.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i <= str.length - 1; i++) {
         if (longest < str[i].length) {
             longest = str[i].length;
             word = str[i];
         }
     };
     var pal = word.split("").reverse().join("");
	 if (pal === word) {
	 	return word + " is a palindrome"
	 }
	 else {
	 	return word + " is not a palindrome"
	 }
}

function doItTwice(f) {
	//call the function twice
	return f() + f();
}

function objectFun(first, last, age, email, color) {
	//creat the properties of the person, store them in an object, call the object
	var person = {
		first_name: first,
		last_name: last,
		age: age,
		email: email,
		fav_color: color
	};
	return person;
}

function numChildren(obj) {
	//return the length of the children property
	return obj.children.length;
}

function greeting(name) {
	return name;
}

function sayHello(first, last, greet) {
	//return greet function and first and last
	return greet("Hello") + ", " + first + " " + last + "!";
}

function goodnight(name) {
	if (name === "Night")
	{
		return true
	}
	else {
		return false
	}
}

function sayGoodnight(name, status, message) {
	if (message(status)) {
		return "Goodnight, " + name + "!";
	}
	else {
		return "It's not bedtime!"
	}
}