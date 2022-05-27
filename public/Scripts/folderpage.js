$("ul#slide-out li.expander").on("click", () => {
    if ($("ul#slide-out").css("width") == "100px") {
        document.querySelector("ul#slide-out").style = "width:300px;";
        document.querySelector('li.expander span').textContent = "Collapse"
        document.querySelector('li.expander i').textContent = "arrow_backward"
        document.querySelector('li.home span').textContent = "Home"
        document.querySelector('body').style = "margin-left: 300px"
    } else {
        document.querySelector("ul#slide-out").style = "width:100px;";
        document.querySelector('li.expander span').textContent = ""
        document.querySelector('li.home span').textContent = ""
        document.querySelector('body').style = "margin-left: 100px"
    }
});

$('.chips-autocomplete').chips({
    placeholder: 'Enter a tag',
    secondaryPlaceholder: '+Tag',
    autocompleteOptions: {
        data: {
        'Homework': null,
        'Elective': null,
        'Out-Of-School': null
        },
        limit: Infinity,
        minLength: 0
    }
});

$(document).ready(function(){
    $('.datepicker').datepicker();
  });

document.querySelectorAll('i.active').forEach((elm) => {
    elm.classList.toggle('active')
})

document.querySelectorAll('.header-for-table').forEach((elm) => {
    elm.addEventListener('click', (event) => {
        document.querySelectorAll('.header-for-table i').forEach((element) => {
            if ((element.classList.contains('active'))) {
                element.classList.toggle('active')
            }
        })
        if ($(event.target).is('th')) {
            event.target.querySelector('i').classList.toggle('active')
        }
        else {
            event.target.parentElement.querySelector('i').classList.toggle('active')
        }
        
    })
})

document.querySelectorAll('li.dropdown-menu').forEach((elm) => {
    elm.addEventListener('click', (event) => {
        document.querySelector('p.dropdown-text').textContent=elm.textContent
    })
})

document.querySelector('a.refresh').addEventListener('click', (elm) => {
    window.location.reload()
})