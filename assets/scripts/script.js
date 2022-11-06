function change_season(expression){

    // List of what content is going to be here.
    let seasonName;
    
    // Evaluate which season the user wants to view
    // Define the values that go in each type of content.
    switch(expression){
        
        case 0: //Spring
            console.log("Switching to spring...");
            seasonName = 'Spring';
            break;

        case 1: //Summer
            console.log("Switching to summer...");
            seasonName = 'Summer';
            break;

        case 2: //Autumn
            console.log("Switching to autumn...");
            seasonName = 'Autumn';
            break;

        case 3: //Winter
            console.log("Switching to winter...");
            seasonName = 'Winter';
            break;

        default:
            console.log("What season is it?");
    }

    // Replace the content on screen based on the user's choice of season.
    document.getElementById("season_name").innerHTML = seasonName;
}