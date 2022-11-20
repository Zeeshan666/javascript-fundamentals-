// Switch Statement

var studentGrade =prompt("enter your grade");


/*if ( studentGrade == "A" ) {
    
    document.write("Grade A student.");
    
} else if ( studentGrade == "B" ) {
    
    document.write("Grade B student.");
    
    
} else if ( studentGrade == "C" ) {
    
    document.write("Grade C student.");

} else {

    document.write("No grade found.");
}
*/

// switch statment
var a = prompt(Enter your number);
switch(studentGrade) {
        
        case '80':
			document.write("Grade A student.");
			break;
        
        case '70':
			document.write("Grade B student.");
			break;
        
        case '60':
			document.write("Grade C student.");
			break;
        case '50':
			document.write("Grade D student.");
			break;
        
        default:
			document.write(
                "No grade found.");
        
}



switch('a'){
    case '80':
        document.write("Grade A student.");
        break;
    
    case '70':
        document.write("Grade B student.");
        break;
    
    case '60':
        document.write("Grade C student.");
        break;
    case '50':
        document.write("Grade D student.");
        break;
        case 'a':
            document.write("Grade D student.");
            break;
    
    default:
        document.write(
            "No grade found.");

}
