$(document).ready(function(){
    
    var timerDelay = 7000;
    
    function loadScene(index) {
        var scene = sceneArray[index];
        
        updateDate(scene.date);
        loadStories(scene.stories);
        addScore(0);
        updateLeftBarProjects();
        
        checkForSkills(scene.newSkills);
        checkForProjects(scene.newProjects);
    }
    
    /* Start Game */
    loadScene(activeScene);
    
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
    
    /* Story Events */
    $('.mainModal').on('click', '.storyButton.button', function() {
        
        const id = $(this).attr("id");
        if (id == "back_button") {
            $('.storyOne').hide();
            $('.storyOne#id_plato').show();
        } else if (id == "goToNextScene") {
            
            checkIfAllDone();
        } else if (id == "getRank") {
            $('.storyOne').hide();
            showRank();
        } else {
            $('.storyOne').hide();
            if (id != "ac" && id != "pr") {
                lastID = id;
            } else {
                if (id == "ac") {
                    loadSkills();
                }
                if (id == "pr") {
                    loadProjects();
                }
            }
            
            $('.storyOne#' + id).show();
        }
        
        var points = $(this).attr("points");
        if (points != null) {
            addScore(parseInt(points));
        }
    })
    
    function checkIfAllDone() {
        var availableProjects = projectsArray.filter(x => x.status === "available");
        var availableSkills= skillsArray.filter(x => x.status === "available");
        if (availableProjects.length > 0 || availableSkills.length > 0) {
           $('.overlay').fadeIn(100);
        } else {
            $('.storyOne').hide();
           goToNextSceneSure();
        }
    }
    
    $('#return').click(function() {
        $('.overlay').fadeOut();
    })
    
    $('#continue').click(function() {
        $('.storyOne').hide();
        $('.overlay').fadeOut(100);
        goToNextSceneSure();
    })
    
    function goToNextSceneSure() {
        activeScene += 1;
            
        showTimer();

        setTimeout(
          function() 
          {
              $('.timer').hide();
              loadScene(activeScene);
          }, timerDelay);

         lastID = "id_1";
    }
    
    function showTimer() {
        var unShowedElements = quotes.filter(x => x.showed === false);
             $('.timer .quote').hide();
            if (unShowedElements.length > 0) {
                 var randomIndex = parseInt(getRandomArbitrary(0, unShowedElements.length - 1));
            
                var quotev = unShowedElements[randomIndex];

                if (quotev.showed == false && quotev.quote != undefined && quotev.author != undefined) {
                    unShowedElements[randomIndex].showed = true;
                    $('.timer .quote .q_text').text(quotev.quote);
                    $('.timer .quote .author').text(quotev.author);
                    $('.timer .quote').show();
                }
            }
            
            $('.timer').show();
    }
    
    function showRank() {
        $('.regularStories').hide();
        showTimer();
        
        
        setTimeout(
          function() 
          {
              $('.timer').hide();
              $('.rankPage').show();
              var dt = new Date(2030, 5 - 1, 15);
              updateDate(dt);
              updateLeftBarProjects();
              
              if (score < 500) {
                    setRankInfo(0);
                } else if (score < 1000) {
                    setRankInfo(1);
                } else if (score < 2000) {
                    setRankInfo(2);
                } else if (score < 3000) {
                    setRankInfo(3);
                } else if (score < 3645) {
                    setRankInfo(4);
                } else {
                    setRankInfo(5);
                }
          }, timerDelay);
    }
    
    function setRankInfo(rankVal) {
        $('.rankPage .canmore').hide();
        
        let rankC = ranks[rankVal];
        $('.rankPage .rank').text(rankC.name);
        $('.rankPage .lozung').text(rankC.phrase);
        
        if (rankVal != 5) {
            let nextRank = ranks[rankVal + 1];
            $('.rankPage .canmore').show();
            $('.rankPage .canmore .needmore').text(nextRank.point - score);
            $('.rankPage .canmore .nextRank').text(nextRank.name);
        } else {
             $('.rankPage .canmore').hide();
        }
    }
    
    /* Project Events*/
    $('.projects').on('click', '.project_banner .button', function() {
        var activeProjectsCount = 0;
        projectsArray.forEach(function(project) {
            if (project.status == "progress") {
                activeProjectsCount += 1;
            }
        })
        
        var projectId = $(this).attr("id");
        var projectIndex = projectsArray.findIndex(x => x.id === projectId);
        projectsArray[projectIndex].status = "progress";
        projectsArray[projectIndex].startDate = date;
        loadProjects();
        var projectTitle = projectsArray[projectIndex].title;
        $.growl.projectStarted({ message: "" });

        updateLeftBarProjects();
    })
    
    $('#playAgain').click(function(){
        $('.rankPage').hide();
        $('.rankPage .canmore').hide();
        quotes.forEach(function(quote){
            quote.showed = false;
        });
        skillsArray.forEach(function(skill){
            skill.status = "hide";
        });
        projectsArray.forEach(function(project){
            project.status = "hide";
        });
        
        score = 0;
        activeScene = 0;
        $('.regularStories').show();
        
        showTimer();
        
        setTimeout(
          function() 
          {
              $('.timer').hide();
              loadScene(activeScene);
          }, timerDelay);
    })
})

