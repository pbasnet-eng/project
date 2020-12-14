

function weeklyMeal(){

    var list = ["Breakfast", "MorningSnack","Lunch","EveningSnack","Dinner"];
    
    

    var results = document.querySelector(".results");
    
        list.forEach ((m,index) => {
        
        var meals = document.querySelectorAll("." + m + " .meal");
        
        results.innerHTML += m + ": " + "</br>" + "</br>";
        
        meals.forEach (p=>{
            
            results.innerHTML += p.value + "</br>";
        }
                      
                      );
        
        
        
        
        
        
    });
}
//This project created by:  Pratima Basnet
