  <title>LAMAS 2023 Group 10</title>
  <link rel="stylesheet" href="styles.css">
  <script src="script.js"></script>
  <style>
    .tabs {
      display: flex;
      justify-content: center;
    }
  
    .tab {
      cursor: pointer;
      padding: 10px 20px;
      background-color: #ccc;
      border: none;
      border-radius: 4px;
      margin-right: 10px;
    }
  
    .tab:hover {
      background-color: #ddd;
    }
  
    .tab.active {
      background-color: #fff;
    }
  
    .tab-content {
      display: none;
    }
  </style>
  <script>
    function openTab(evt, tabName) {
      var tabContents = document.getElementsByClassName("tab-content");
      for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
      }
  
      var tabs = document.getElementsByClassName("tab");
      for (var i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
      }
  
      document.getElementById(tabName).style.display = "block";
      evt.currentTarget.className += " active";
    }
  
    document.getElementById("summary").style.display = "block";
    document.getElementsByClassName("tab")[0].className += " active";
  </script>
  <div class="tabs">
    <button class="tab" onclick="openTab(event, 'summary')">Project Summary</button>
    <button class="tab" onclick="openTab(event, 'report')">Report</button>
    <button class="tab" onclick="openTab(event, 'github')">GitHub</button>
  </div>
  
  <div id="summary" class="tab-content">
    Welcome to the LAMAS 2023 Group 10 project!
    <p>
      This project is an implementation of the Cheat! game with the topic of lying in public announcements.
      <br>
      The game is played with three agents, displaying a "Trusting" strategy, a "Distrusting" strategy and a "Hybrid" strategy, which is a mix of the first two. The card ranks involved in the game are Aces and Queens, each rank having three cards, with two cards per agent. There is also the option that the user can play against two of the three mentioned strategies (any possible combination).
      <br>
      More information can be found in the Report section.
    </p>
  </div>
  
<div id="report" class="tab-content">
  <object data="Logical_Aspects_of_Multi_Agent_Systems_Project_Report_Group_10_.pdf" type="application/pdf" width="900px" height="600px">
    <p>Unable to display PDF. <a href="Logical_Aspects_of_Multi_Agent_Systems_Project_Report_Group_10_.pdf">Download it here</a>.</p>
  </object>
</div>
  
  <div id="github" class="tab-content">
    The implementation of the game can be found at <a href="https://github.com/rares1609/LAMAS_Cheat">this GitHub repository</a>
  </div>
