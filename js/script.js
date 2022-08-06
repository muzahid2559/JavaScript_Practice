// Switch(Conditions)

document.writeln("Select an option:\n a. Option 1 \n b. Option 2 \n c. Option 3 ");

choice = prompt();

var text;

switch (choice) {
    case "a": //if(choice=="a")
        text = "Option 1 Selected!";
        break;
    case "b":
        text = "Option 2 Selected!";
        break;
    case "c":
        text = "Option 3 Selected!";
        break;
    default: // else
        text = "No option is selected!";
        break;
}

document.writeln(text);