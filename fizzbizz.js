for (count = 1; count <=100; count++) {
	var result = "";
	if (count%3 == 0) result += "Fizz";
	if (count%5 == 0) result += "Bizz";
	if (result == 0) result = count;
	console.log(result)
}

