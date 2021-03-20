// Create the prolog sesssion and load phandelver.prolog.
session = pl.create();
session.consult("phandelver.prolog");

// Array of variable bindings, one per answer, returned by prolog query
var bindings = [];
//var charTagArray = [toblin_stonehill,elmar_barthen,daren_edermath,linene_graywind,halia_thornton,qelline_alderleaf,sister_garaele,harbin_wester,sildar_hallwinter,narth,redbrands,elsa,lanar,trilena,pip,freda,ander,thistle,grista,carp,agatha,reidoth,gundren_rockseeker,hamun,droop,party];
var filterString = '';
var activeList = "character";
var char_tag_list = [];


function clear_all_lists() {
	let names_output = document.getElementById("names_output");
	names_output.innerHTML = "<div></div>"; 

	let locations_output = document.getElementById("locations_output");
	locations_output.innerHTML = "<div></div>"; 

	let information_output = document.getElementById("information_output");
	information_output.innerHTML = "<div></div>"; 
}

// On starting up, display list of characters

//console.log("Array is: " + charTagArray);
on_start();

function on_start() {
	get_character_tags();
	display_active_list();
}



function display_active_list() {
	if (activeList == "character") {
		display_character_list();
	} else if (activeList == "location") {
		display_location_list();
	} else if (activeList == "information") {
		display_information_list();
	} else {
		console.log("ERROR: Tried to display non-existant list");
	}
}

function display_character_list() {
	activeList = "character";
	clear_all_lists();
	//print_characters();
}

function display_location_list() {
	activeList = "location";
	clear_all_lists();
	print_locations();
}

function display_information_list() {
	activeList = "information";
	clear_all_lists();
	print_information();
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

// On start, get a list of the character tags in the game
function get_character_tags() {
	var get_all_bindings = function(bindings) {
		print_character_tags(bindings[0]);
	}
	bindings = [];
	session.query("findall([Tag], character(Tag), Char_Tag_List).");
	session.answers(get_callback(get_all_bindings));
}


function print_character_tags(binding) {
	if (binding != null) {
		var char_tag_list = binding.lookup("Char_Tag_List"); 
	}
}

function print_characters() {
	var get_all_bindings = function(bindings) {
		print_character(bindings[0]);
	}
	bindings = [];
	session.query("findall([CharInfoType, CharInfo], character_info(toblin_stonehill, CharInfoType, CharInfo), Char_List).");
	session.answers(get_callback(get_all_bindings));
}

function print_character(binding) {
	if (binding != null) {
		var char_info = binding.lookup("Char_List"); 
		// TODO update the HTML to add this to list
		console.log("Char list is: " + char_info);
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
			var locations_output = document.getElementById("locations_output");
			locations_output.innerHTML = locations_output.innerHTML + "<div>" + locName +  "</div>"; // Add name to HTML page
		}
	}
}



// Gets a list of all the locations and prints them out
function print_information() {
	var print_bindings = function(bindings) {
		for(var i = 0; i < bindings.length; i++) {
			print_information_piece(bindings[i]);
		}
	}
	bindings = [];
	session.query("info_desc(Info, Desc).");
	session.answers(get_callback(print_bindings));
}

// outputs a single location if they are found in the search
function print_information_piece(binding) {
	if (binding != null) {
		// Look up term that has been bound to variable "Name"
		let desc = binding.lookup("Desc"); 
		let infoDesc = desc.toString(); // Turn the Term into a string.
		// Check if the location matches the search
		if (infoDesc.toLowerCase().match(filterString.toLowerCase())) {
			var information_output = document.getElementById("information_output");
			information_output.innerHTML = information_output.innerHTML + "<div>" + infoDesc +  "</div>"; // Add description to HTML page
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
	display_active_list(); 
}