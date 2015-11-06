/* EXAMPLES
var myColor = ['purple', 'blue', 'lavender'];

alert(myColor[1]); //how you would call one of your array values e.g. in an alert.

console.log(myColor[0]); //to test if scripts are running, not for any other reason really.

myColor[myColor.length] = egg; //can add another item into your array.

myColor.push(7,8,9); //another way to add a few more items to the array, to the end of the list.

myColor.unshift(7,8,9); //adds items to the beginning of the array list. */

function printList(list) {
	var listHTML ='<ol>';
	for (var i = 0; i < list.length; i+= 1){
		listHTML += '<li>' + list[i] + '</li>';
	}
	listHTML += '</ol>';
	print(listHTML);
}

function print(html) {
	document.write(html);
}
