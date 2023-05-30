function openTab(evt, tabName) {
  // Hide all tab content sections
  var tabContents = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
  
  // Remove 'active' class from all tabs
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(" active", "");
  }
  
  // Show the selected tab content and mark the tab as active
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Set the initial active tab
document.getElementById("summary").style.display = "block";
document.getElementsByClassName("tab")[0].className += " active";
