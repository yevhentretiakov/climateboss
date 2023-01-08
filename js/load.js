function loadSkills() {
    
    $('.available_skills').html("");
    $('.achieved_skills').html("");
    
    skillsArray.forEach(function(skill) {
        
        // Create skill container and append it to skills container
        var storyOne = $("<div>", {class: "skill_banner", id: skill.id});
            var skill_img_wrapper = $("<div>", {class: "skill_img"});
                var skill_img = $("<img>", {class: "skill_badger", src: "img/skills/" + skill.image});
                var points_badger = $("<div>", {class: "points_badge", html: "+" + skill.points + " points"});

                var skillTitle = $("<p>", {class: "skill_title", html: skill.title });
                var button = $("<a>", {class: "button", href: "#", html: "Start Test"});

            storyOne.append(skill_img_wrapper);
                skill_img_wrapper.append(skill_img);
                skill_img_wrapper.append(points_badger);
            storyOne.append(skillTitle);
            storyOne.append(button);

            if (skill.status == "available") {
                $('.available_skills').append(storyOne);
               
            } else if (skill.status == "achieved") {
                $('.achieved_skills').append(storyOne);
            }
    })
}

function loadProjects() {
    $('.available_projects').html("");
    $('.progress_projects').html("");
    $('.finished_projects').html("");
    
    projectsArray.forEach(function(item) {
        
        var project_banner = $("<div>", {class: "project_banner"});
            
            var banner_img = $("<div>", {class: "banner_img"});
                var time_badge = $("<div>", {class: "time_badge", html:  "~" + item.terms + " years"});
                var points_badge = $("<div>", {class: "points_badge", html: "+" + item.points + " points"});
                var project_image = $("<img>", {class: "project_image", src: "img/projects/" + item.image});
            
            var project_info = $("<div>", {class: "project_info"});
                var project_title = $("<p>", {class: "project_title", html: item.title});
                var project_body = $("<p>", {class: "project_body", html: item.description});
                
                var requirments = $("<div>", {class: "requirments"});
                    var req_h = $("<p>", {class: "req_h", html: "Skill Requirments:"});
                
                var button = $("<a>", {class: "button", href: "#", html: "Start a Project", id: item.id});
        
        project_banner.append(banner_img);
            banner_img.append(time_badge);
            banner_img.append(points_badge);
            banner_img.append(project_image);

        project_banner.append(project_info);
            project_info.append(project_title);
            project_info.append(project_body);
            
            var haveSkills = true;
            
            project_info.append(requirments);
                requirments.append(req_h);
                item.skills.forEach(function(skillId) {
                    
                    var skillIndex = skillsArray.findIndex(x => x.id === skillId);
                    var skillStatus = false;
                    
                    var skillTitle = skillsArray[skillIndex].title;
                    
                    var skill = $("<p>", {class: "req", html: skillTitle});
                    
                    if (skillsArray[skillIndex].status == "achieved") {
                        var icon = $("<i>", {class: "fa fa-check-circle"});
                        skill.prepend(icon);
                    } else {
                        var icon = $("<i>", {class: "fa fa-circle-xmark"});
                        skill.prepend(icon);
                        haveSkills = false;
                    }
                    requirments.append(skill);
                })
                
                if (haveSkills) {
                    project_info.append(button);
                }
            
        if (item.status == "available") {
            $('.available_projects').append(project_banner);
        } else if (item.status == "progress") {
            $('.progress_projects').append(project_banner);
        } else if (item.status == "finished") {
            $('.finished_projects').append(project_banner);
        }
    });
}

function loadStories(storiesArray) {
    
    $('.regularStories .story').remove();
    
    var index = 0;
    
    storiesArray.forEach(function(item){
        
        // Create story container for story
        var storyOne = $("<div>", {class: "story modal_section storyOne", id: item.id});

        if (index == 0) {
            storyOne.css("display", "block");
        } else {
            storyOne.css("display", "none");
        }
        
        index += 1;

        // Create text and append it to story container
        $(".regularStories").append(storyOne)
            var story_text = $("<p>", {class: "text_1", html: item.text});
            storyOne.append(story_text);
        
        // Create buttons and append it to story container
        item.buttons.forEach(function(button){
            var button = $("<a>", {class: "button storyButton", html: button.title, href: "#", id: button.goToID, points: button.points});

            storyOne.append(button);
            
            // Add aditional div to clear floating in buttons
            var delimiter = $("<div>");
            storyOne.append(delimiter);
        });
    });

}

function loadExam(skillId) {
        
    var skillIndex = skillsArray.findIndex(skill => skill.id === skillId);
    var skill = skillsArray[skillIndex];

    $('.examintaion .heads').html(skill.title);
    $('.exam_quest_wrapper').attr("skill", skill.id);

    skill.questions.forEach(function(question) {
        var exam_quest = $("<div>", {class: "exam_quest", id: question.index});
            var quest_header = $("<p>", {class: "header_2 quest_header", html: question.title});
            var examintaion_img = $("<img>", {class: "examintaion_img", src: "img/learning/" + question.image});
            var answer_options = $("<div>", {class: "answer_options", correct: question.correct});
                question.options.forEach(function(option) {
                    var option_div = $("<div>", {class: "option"});
                    var p = $("<p>", {html: option});
                    option_div.append(p);
                    answer_options.append(option_div);
                })
            var ex_result = $("<div>", {class: "ex_result" });
                var ex_result_p_1 = $("<p>", {class: "ex_result_p_1"});
                var ex_result_p_2 = $("<p>", {class: "ex_result_p_2", html: question.info});
                ex_result.append(ex_result_p_1);
                ex_result.append(ex_result_p_2);
            var button = $("<a>", {class: "button", html: "Continue", href: "#"});
            var clear = $("<div>", {class: "clear"});

            
            exam_quest.append(examintaion_img);
            exam_quest.append(quest_header);
            exam_quest.append(answer_options);
            exam_quest.append(ex_result);
            exam_quest.append(button);
            exam_quest.append(clear);

            $('.examintaion .exam_quest_wrapper').append(exam_quest);
    })

    $('.examintaion .exam_quest_wrapper .exam_quest:first-child').show();

    $('#ac').hide();
    $('#ex').show();
}