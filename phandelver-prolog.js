// var Mutex = require('async-mutex').Mutex;
// var Semaphore = require('async-mutex').Semaphore;
// var withTimeout = require('async-mutex').withTimeout;

// Create the prolog sesssion and load mini_prom_week_example.prolog.
session = pl.create();
session.consult("phandelver.prolog");

// Array of variable bindings, one per answer, returned by prolog query
var bindings = [];
var filterString = '';

// In starting, render the UI
//print_characters();

const delay = ms => new Promise(res => setTimeout(res, ms));

// const displayLists = async () => {
//   await display_character_list();
//   await delay(50);
//   await display_location_list();
  
// };


function clear_all_lists() {
	var names_output = document.getElementById("names_output");
	names_output.innerHTML = "<div></div>"; 

	var locations_output = document.getElementById("locations_output");
	locations_output.innerHTML = "<div></div>"; 
}


// On starting up, display list of characters
display_character_list();

function display_character_list() {
	clear_all_lists();
	print_characters();
}

function display_location_list() {
	clear_all_lists();
	print_locations();
}


// Functionality for prolog / JS callbacks

/*
 * Returns a callback function to pass to session.answers(). 
 * The parameter is the function for the callback to call (with the bindings as parameter)
 * when prolog has found all the answers. 
*/
function get_callback(funcWhenDone) {
	var callbackFunc = function(answer) {
		if (answer == false) {
			funcWhenDone(bindings);
		}
		else {
			// We've gotten another non-false answer - add it to the bindings.
			bindings.push(answer);
		}
	}

	return callbackFunc;
} 


// Output the appropriate entities

// Gets a list of all the characters and prints them out
function print_characters() {
	var print_bindings = function(bindings) {
		for(var i = 0; i < bindings.length; i++) {
			print_character(bindings[i]);
		}
	}
	bindings = [];
	session.query("first_name(Char, FirstName), last_name(Char, LastName).");
	session.answers(get_callback(print_bindings));
}

// outputs a single character if they are found in the search
function print_character(binding) {
	if (binding != null) {
		// Look up term that has been bound to variable "Char"
		var firstName = binding.lookup("FirstName"); 
		var charFirstName = firstName.toString(); // Turn the Term into a string.
		var lastName = binding.lookup("LastName"); 
		var charLastName = lastName.toString(); // Turn the Term into a string.
		var charName = charFirstName.capitalize() + " " + charLastName.capitalize(); 
		// Check if the character matches the search
		if (charName.toLowerCase().match(filterString.toLowerCase())) {
			var names_output = document.getElementById("names_output");
			names_output.innerHTML = names_output.innerHTML + "<div>" + charName +  "</div>"; // Add name to HTML page
		}
	}
}


// Gets a list of all the locations and prints them out
function print_locations() {
	var print_bindings = function(bindings) {
		for(var i = 0; i < bindings.length; i++) {
			print_location(bindings[i]);
		}
	}
	bindings = [];
	session.query("location_name(Loc, Name).");
	session.answers(get_callback(print_bindings));
}

// outputs a single location if they are found in the search
function print_location(binding) {
	if (binding != null) {
		// Look up term that has been bound to variable "Name"
		let name = binding.lookup("Name"); 
		let locName = name.toString(); // Turn the Term into a string.
		// Check if the location matches the search
		if (locName.toLowerCase().match(filterString.toLowerCase())) {
			var names_output = document.getElementById("locations_output");
			locations_output.innerHTML = locations_output.innerHTML + "<div>" + locName +  "</div>"; // Add name to HTML page
		}
	}
}


// Adding new entities to the database

// Addds a new character to the world from input 
function add_character() { 
	// Get the values from the form 
	var tag = document.getElementById("tag").value;
	var first_name = document.getElementById("first_name").value;
	var last_name = document.getElementById("last_name").value;

	// Convert the values to strings 
	var charTag = tag.toString().lowercase();
	var charFirstName = first_name.toString().lowercase();
	var charLastName = last_name.toString().lowercase();

	// Update the UI and clear the form 
	var add_to_world = function(bindings) {
		display_character_list();
		document.getElementById("tag").value = "";
		document.getElementById("first_name").value = "";
		document.getElementById("last_name").value = "";
	}
	bindings = [];
	session.query("asserta(character(" + charTag + ")). asserta(first_name(" + charTag + " , " + charFirstName + " ))." + "asserta(last_name(" + charTag + " , " + charLastName + ")).");
	session.answers(get_callback(add_to_world));
}




// Utility functions


// Add method to the String prototype to capitalize the first letter of the String.
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

// Add method to the String prototype to capitalize the first letter of the String.
String.prototype.lowercase = function() {
    return this.charAt(0).toLowerCase() + this.slice(1);
}

// Updates the term being searched for when user hits search button
function update_filter_string() {
	var search_term = document.getElementById("search").value;
	filterString = search_term.toString();
	displayLists();
}