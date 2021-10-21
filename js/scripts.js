function whatTri(num1, num2, num3) {
  console.log(num1, num2, num3);
  if (!num1 || !num2 || !num3) {
    return "Please enter a number for each field."
  } else if (num1 === num2 && num1 === num3) {
    return "You have an equilateral triangle.";
  } else if (num1 + num2 <= num3 || num1 + num3 <= num2 || num2 + num3 <= num1) {
    return "You don't have a triangle.";
  } else if (num1 === num2 || num1 === num3 || num2 === num3)  {
    return "You have an isoceles triangle.";
  } else {
    return "You have a scalene triangle.";
  }
}

$(document).ready(function() {
  $("#triangle").submit(function(event) {
    event.preventDefault();
    const side1 = parseInt($("#side-one").val());
    const side2 = parseInt($("#side-two").val());
    const side3 = parseInt($("#side-three").val());
    $("#results").text(whatTri(side1, side2, side3));
  });  
}); 


// if (side1 === side2 && side1 === side3) { //equilateral
    //   $("#results").text("You have an equilateral triangle.");
    // } else if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) { //not a triangle
    //   $("#results").text("You don't have a triangle.");
    // } else if (side1 === side2 || side1 === side3 || side2 === side3)  { //isosceles
    //   $("#results").text("You have an isoceles triangle.");
    // } else { //scalene
    //   $("#results").text("You have a scalene triangle.");
    // }