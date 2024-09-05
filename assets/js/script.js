//Encapsulating the code and avoiding contamination of the global scope
(()=>{

document.addEventListener("DOMContentLoaded",()=>{
  
  const recommendBtn=document.getElementById("recommend_btn");
  const popupBtn=document.getElementById("popupBtn");
  const showPopup=(addRecommendation) => document.getElementById('popup').style.visibility = addRecommendation ?'visible':'hidden';
  
  recommendBtn.addEventListener("click",()=>{
    // Get the message of the new recommendation
    const recommendation = document.getElementById("new_recommendation");
    // If the user has left a recommendation, display a pop-up
    if (recommendation.value != null && recommendation.value.trim() != "") {
      console.log("New recommendation added");
      //Call showPopup here
      showPopup(true);
      // Create a new 'recommendation' element and set it's value to the user's message
      const element = document.createElement("div");
      element.setAttribute("class","recommendation");
      element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
      // Add this element to the end of the list of recommendations
      document.getElementById("all_recommendations").appendChild(element); 
      // Reset the value of the textarea
      recommendation.value = "";
    }
  });//End addEventListener

  popupBtn.addEventListener("click",()=>showPopup(false));

})//End DOMContentLoaded

})();//End IIFE
