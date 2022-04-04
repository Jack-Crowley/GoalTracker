let folderList = ["red", "green", "homework", "NYR"]
$("ul#slide-out li.expander").on("click", () => {
    if ($("ul#slide-out").css("width") == "100px") {
        document.querySelector("ul#slide-out").style = "width:300px;";
        document.querySelector('li.expander span').textContent = "Collapse"
        document.querySelector('li.expander i').textContent = "arrow_backward"
        document.querySelector('li.dashboard span').textContent = "Dashboard"
        document.querySelector('li.profile span').textContent = "Profile"
        document.querySelector('li.folder span').textContent = "Folders"
        document.querySelector('.folder-object1').textContent = "folder RED"
        document.querySelector('.folder-object2').textContent = "folder BLUE"
        document.querySelector('.folder-object3').textContent = "folder YELLOW"
        document.querySelector('.folder-object4').textContent = "folder FOLDER NAME"
        document.querySelector('.folder-object5').textContent = "add NEW FOLDER"
        document.querySelector('li.settings span').textContent = "Settings"
        document.querySelector('body').style = "margin-left: 300px"
    } else {
        document.querySelector("ul#slide-out").style = "width:100px;";
        document.querySelector('li.expander span').textContent = ""
        document.querySelector('li.expander i').textContent = "arrow_forward"
        document.querySelector('li.dashboard span').textContent = ""
        document.querySelector('li.profile span').textContent = ""
        document.querySelector('li.folder span').textContent = ""
        document.querySelector('.folder-object1').textContent = "folder"
        document.querySelector('.folder-object2').textContent = "folder"
        document.querySelector('.folder-object3').textContent = "folder"
        document.querySelector('.folder-object4').textContent = "folder"
        document.querySelector('.folder-object5').textContent = "add"
        document.querySelector('li.settings span').textContent = ""
        document.querySelector('body').style = "margin-left: 100px"
    }
});

$(document).ready(() => {
    $(".collapsible").collapsible();
});