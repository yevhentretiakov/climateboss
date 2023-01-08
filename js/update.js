function addScore(scr) {
     score += scr;
     $('.score_label').html(score);
     if (scr != 0) {
         
        $.growl.points({ message: "+"+scr+" points" });
     }
}

function updateDate(dates) {
    date = dates;
    $('.current_date').html(Date.parse(dates).toString('MMM dd, yyyy'));
}

function checkForProjects(projects) {
    if (projects.length > 0) {
        projects.forEach(function(proj) {
            var projectIndex = projectsArray.findIndex(x => x.id === proj);
            var project = projectsArray[projectIndex];
            
            if (project != null) {
                
                $.growl.newProjects({ message: "" });
                projectsArray[projectIndex].status = "available";
            }
        })
    }
}

function checkForSkills(skills) {
    if (skills.length > 0) {
        skills.forEach(function(skil) {
            var skillIndex = skillsArray.findIndex(x => x.id === skil);
            var skill = skillsArray[skillIndex];
            // window.alert(skill);
            if (skill != null) { 
                $.growl.newSkills({ message: "" });
                skillsArray[skillIndex].status = "available";
            }
            
        })
    }
}

/* Update Projects */
function updateLeftBarProjects() {
    
    $('.projects_box .project').remove();
    
    $('.mini_modal.projects').hide();
    
    projectsArray.forEach(function(item) {

        if (item.status == "progress") {
            var yearsLeft = item.startDate.getYear() + item.terms - date.getYear();
            
            if (yearsLeft != 0) {
                var div = $("<div>", {class: "project"});
                var projectTitle = $("<div>", {class: "projectTitle"});
                div.append(projectTitle);
                    var title = $("<p>", {class: "title", html: item.title});
                    projectTitle.append(title)

                    var days = $("<p>", {class: "days", html: yearsLeft + " years left"});
                    projectTitle.append(days)

                var yearsInProgress = item.terms - yearsLeft;
                var progress = $("<progress>", {class: "projectProgress", max: item.terms, value: yearsInProgress});
                div.append(progress);

                $('.projects_box').append(div);
                
                $('.mini_modal.projects').show();
            } else {
                
                // change project status
                var projectId = item.id;
                var projectIndex = projectsArray.findIndex(x => x.id === projectId);
                projectsArray[projectIndex].status = "finished";
                
                // show finished message
                $.growl.prjectFinished({ message: "" });
                
                // add points
                addScore(item.points)
            }
        }
    });
}