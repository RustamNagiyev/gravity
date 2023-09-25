

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
//button search bolmesi ucun
var scrollButton = document.getElementById('scrollButton');
    scrollButton.addEventListener('click', scrollToNextMatch);
var scrollButtonUp = document.getElementById('scrollButtonUp');
    scrollButtonUp.addEventListener('click', scrollToPreviousMatch);

//slayd ucun array
var testimonials = [
  {
    image: "./image/Placeholdersix.svg",
    text: "Professionals in their craft! All products were super great with strong attention to details, and overall vibe",
    name: "Polina Kuzina",
    manager: "Manager at Craftwork"
  },
  {
    image: "./image/man.jpg",
    text: "Amazing service! The team went above and beyond to deliver exceptional results. Highly recommended!",
    name: "John Smith",
    manager: "Marketing Director"
  },
  {
    image: "./image/girl.jpg",
    text: "Outstanding quality, exceptional customer support, and a consistent track record of exceeding expectations. ",
    name: "Emily Johnson",
    manager: "CEO at TechCo"
  }
];

var currentSlide = 0;



var currentSlide = 0;
var slides = document.getElementsByClassName('slide-img');





var searchIcon = document.querySelector(".search-icon");
var searchInputContainer = document.querySelector(".search-input-container");

searchIcon.addEventListener("click", function() {
  searchInputContainer.style.display = "block";
});






function showSlide(n) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[n].classList.add('active');
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function previousSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

showSlide(currentSlide);


function showSlide2() {
  var slide = testimonials[currentSlide];
  document.querySelector(".imggirl").src = slide.image;
  document.querySelector(".text4").textContent = slide.text;
  document.querySelector(".name").textContent = slide.name;
  document.querySelector(".manager").textContent = slide.manager;
  
}

function prevSlide2() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = testimonials.length - 1;
  }
  showSlide2();
}

function nextSlide2() {
  currentSlide++;
  if (currentSlide >= testimonials.length) {
    currentSlide = 0;
  }
  showSlide2();
}

showSlide2();



// Videonun üzerine klikledikde YouTube videosunu açan funksiya
function playYouTubeVideo() {
    const videoId = 'AvZFKQT8yTc'; // YouTube video kimliyi
    const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    const videoElement = document.createElement('iframe');
    videoElement.setAttribute('src', videoSrc);
    videoElement.setAttribute('allowfullscreen', '');
    videoElement.setAttribute('frameborder', '0');
  
    const lightboxContent = document.querySelector('.lightbox-content');
    lightboxContent.innerHTML = '';
    lightboxContent.appendChild(videoElement);
  }
  
  // Videonu kliklemek funksiyası
  function handleVideoClick() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'block';
    playYouTubeVideo();
  }
  
 
  


function search(event) {
    var searchValue = event.target.value.toLowerCase();
    var searchItems = document.querySelectorAll('.searchable');

    searchItems.forEach(function(item) {
        var itemText = item.textContent.toLowerCase();
        var highlightedText = itemText.replace(new RegExp(searchValue, 'gi'), function(match) {
            return '<span class="highlighted">' + match + '</span>';
        });
        item.innerHTML = highlightedText;
    });
}

function clearSearchHighlights() {
    var searchItems = document.querySelectorAll('.searchable');
    searchItems.forEach(function(item) {
        item.innerHTML = item.textContent;
    });
}






//filter

function showImages(category) {
  var images = document.getElementsByClassName("imghover");
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  
  switch (category) {
    case "all":
      for (var i = 0; i < images.length; i++) {
        images[i].style.display = "inline-block";
      }
      break;
    case "branding":
      images[0].style.display = "inline-block";
      break;
    case "web":
      images[3].style.display = "inline-block";
      images[4].style.display = "inline-block";
      break;
    case "development":
      images[1].style.display = "inline-block";
      break;
    case "films":
      images[2].style.display = "inline-block";
      images[5].style.display = "inline-block";
      break;
  }
}
//button search bolmesi ucun
    function toggleSearchInput() {
        var searchInputContainer = document.querySelector('.search-input-container');
        var searchInput = document.querySelector('#searchInput');
        searchInputContainer.classList.toggle('active');

        if (searchInputContainer.classList.contains('active')) {
            searchInput.focus();
        } else {
            searchInput.value = '';
            clearSearchHighlights();
        }
    }

    function search(event) {
        var searchValue = event.target.value.toLowerCase();
        var searchItems = document.querySelectorAll('.searchable');

        searchItems.forEach(function(item) {
            var itemText = item.textContent.toLowerCase();
            
            var highlightedText = itemText.replace(new RegExp(searchValue, 'gi'), function(match) {
                return '<span class="highlighted">' + match + '</span>';
            });
            
            item.innerHTML = highlightedText;
        });

        scrollToFirstMatch();
    }

    function clearSearchHighlights() {
        var searchItems = document.querySelectorAll('.searchable');
        searchItems.forEach(function(item) {
            item.innerHTML = item.textContent;
        });
    }

    function scrollToFirstMatch() {
        var firstMatch = document.querySelector('.highlighted');
        if (firstMatch) {
            var scrollOffset = firstMatch.offsetTop;
            window.scrollTo(0, scrollOffset);
        }
    }

    function scrollToNextMatch() {
        var highlightedItems = document.querySelectorAll('.highlighted');
        if (highlightedItems.length === 0) {
            return;
        }

        var currentHighlightIndex = -1;
        highlightedItems.forEach(function(item, index) {
            if (item.classList.contains('current')) {
                currentHighlightIndex = index;
            }
        });

        var nextHighlightIndex = currentHighlightIndex + 1;
        if (nextHighlightIndex >= highlightedItems.length) {
            nextHighlightIndex = 0;
        }

        var nextHighlightItem = highlightedItems[nextHighlightIndex];
        var scrollOffset = nextHighlightItem.offsetTop;
        window.scrollTo(0, scrollOffset);

        highlightedItems.forEach(function(item) {
            item.classList.remove('current');
        });

        nextHighlightItem.classList.add('current');
    }



    function scrollToPreviousMatch() {
      var highlightedItems = document.querySelectorAll('.highlighted');
      if (highlightedItems.length === 0) {
        return;
      }
    
      var currentHighlightIndex = -1;
      highlightedItems.forEach(function (item, index) {
        if (item.classList.contains('current')) {
          currentHighlightIndex = index;
        }
      });
    
      var previousHighlightIndex = currentHighlightIndex - 1;
      if (previousHighlightIndex < 0) {
        previousHighlightIndex = highlightedItems.length - 1;
      }
    
      var previousHighlightItem = highlightedItems[previousHighlightIndex];
      var scrollOffset = previousHighlightItem.offsetTop;
      window.scrollTo(0, scrollOffset);
    
      highlightedItems.forEach(function (item) {
        item.classList.remove('current');
      });
    
      previousHighlightItem.classList.add('current');
    }

    //menu
    function toggleMenu() {
      var menuPanel = document.getElementById("menuPanel");
      menuPanel.classList.toggle("open");
  }
  //menu scroll
  function toggleMenu() {
    var menuPanel = document.getElementById("menuPanel");
    menuPanel.classList.toggle("open");
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
   