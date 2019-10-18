//-------------------------MODEL-------------------------//
let model = {
  activeCat: null,
  cats : [
    {
      click_count: 0,
      star: 0,
      name: "cat",
      imgsrc: "cat.jpg"
    },
    {
      click_count: 0,
      star: 0,
      name: "cat1",
      imgsrc: "cat1.jpg"
    },
    {
      click_count: 0,
      star: 0,
      name: "cat2",
      imgsrc: "cat2.jpg"
    },
    {
      click_count: 0,
      star: 0,
      name: "cat3",
      imgsrc: "cat3.jpg"
    },
    {
      click_count: 0,
      star: 0,
      name: "cat4",
      imgsrc: "cat4.jpg"
    }
  ]
}

//--------------------------Octopus----------------------//
let octopus = {

  init: function(){
    model.activeCat = model.cats[0];
    catListView.init();
    catView.init();
  },

  getAllCats: function(){
    return model.cats;
  },

  getCount: function() {
    model.activeCat.click_count++;
    catView.render();
  },

  getActiveCat: function(cat){
    return model.activeCat;
  },

  setActiveCat: function(cat){
    model.activeCat = cat;
  }
}


//--------------------------View-------------------------//
let catView = {

  init: function() {
    this.catContent = document.getElementById('main-content');
    this.catName = document.getElementById('cat-name');
    this.catImage = document.getElementById('cat-img');
    this.catClicks = document.getElementById('count');

    this.catImage.addEventListener('click',function() {
      octopus.getCount();
    });
    this.render();
  },

  render: function(){
    let currentCat = octopus.getActiveCat();
    this.catName.textContent = currentCat.name;
    this.catImage.src = currentCat.imgsrc;
    this.catClicks.textContent = currentCat.click_count;
  }
}

let catListView = {

  init: function() {
    this.listElem = document.getElementById('cat-ul');
    this.cats = octopus.getAllCats();
    this.render();
  },

  render: function(){

    let liElem, i;
    this.cats.forEach((cat) => {
      liElem = document.createElement('li');
      liElem.textContent = cat.name;

      liElem.addEventListener('click', (function(catCopy){
        return function() {
          octopus.setActiveCat(catCopy);
          catView.render();
        };
      })(cat));

      this.listElem.appendChild(liElem);
    });
  }
}

octopus.init();
