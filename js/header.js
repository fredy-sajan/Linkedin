//----LEFT SIDE OF THE HEADER-----
// !.... SETTING SEARCH ....!
// when the user click the search icon then the serach box will be displayed otherwise it will hides.
let serachBox = document.querySelector('.search-box');
let searchIcon = serachBox.querySelector('.icon');
let searchArea = serachBox.querySelector('.input-area');
let iTag = searchIcon.querySelector('i');

let rightSideElements = document.querySelector('.right-side'); // class: right-side represent all the right side elements in the header

// while clicking the search icon on the nav bar. (only for mobiles)
searchIcon.addEventListener('click', ()=>{
    
    // if the searchIcon(icon class) contains class: hide, then remove the class: hide, and class: display apply.  it's change the design when the user click the icon
    if(searchIcon.classList.contains("hide")){

        searchIcon.classList.remove("hide");
        searchIcon.classList.add('display');
    
    } else {

        searchIcon.classList.remove("display");
        searchIcon.classList.add("hide");
    
    }
    
    // The classs: search-active for mobile responsive. When the class: search-active contains the search input will be displayed, else it will hide. With the help of class: search-unactive.
    if(searchArea.classList.contains("search-active")){

        searchArea.classList.remove('search-active');
        searchArea.classList.add("search-unactive");

        rightSideElements.classList.remove('right-side-hide'); // when the input area hiden other right side elements will be hidden
    
    } else {

        searchArea.classList.remove('search-unactive');
        searchArea.classList.add('search-active');

        rightSideElements.classList.add('right-side-hide'); // when the input area visible other right side elements will be visible
    
    }

});



//----RIGHT SIDE OF THE HEADER-----
// !.... SETTING NAV LINKS ACTIVE STATUS....!
// select ul element, which is (class="right-side-ul") from right side of the header
let ulElement = document.querySelector('.right-side-ul');

// selecting all ul(ulElement) elements child li.
let liElements =  ulElement.querySelectorAll('li');

// iterating all li.
liElements.forEach(li => {

    // when the user clilck any of li 
    li.addEventListener('click', () => {

        // Remove the active class from <li> element
        liElements.forEach(li => {
            li.classList.remove('active');
            li.querySelector('p').classList.remove('active');
        });
       
        // adding active class to respctive element (user clicked icons and text)
        li.classList.add('active');
        li.querySelector('p').classList.add('active');
    
    });

});