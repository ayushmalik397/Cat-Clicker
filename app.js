//-------------------------MODEL-------------------------//
let model = {
  cats : [
    {
      click_count: 0,
      name: "cat1",
      imgsrc: "cat.jpg"
    },
    {
      click_count: 0,
      name: "cat2",
      imgsrc: "cat2.jpg"
    }
  ]
}

//--------------------------View-------------------------//
var catView = {
  init: function() {
    model.cats.forEach(function(element){
      
    })
  }
}

catView.init();



//
// let count=0;
// var elem = document.getElementById('cat');
// elem.addEventListener('click', function(){
//   //the element has been clicked... do stuff here
//   document.getElementById("count").innerHTML = count;
//   count=count+1;
// }, false);
