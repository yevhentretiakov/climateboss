$(document).ready(function() {
    /* Story Events */
    $('.skills_wrapper').on('click', '.skill_banner .button', function() { 
        var id = $(this).parent().attr("id");
       
        loadExam(id);
    });
    
    $('.examintaion').on('click', '.answer_options .option', function() {
        if ($(this).hasClass("disabled") == false) {
            
            var index = $(this).index() + 1;
            var current = $(this).parent().attr("correct");

            $(this).parent().parent().find(".ex_result").show();
            if (index == current) {
                $(this).parent().parent().find(".ex_result .ex_result_p_1").html("Correct!").addClass("correct");
                $(this).addClass("correct");
                $(this).parent().parent().addClass("correct");
            } else {
                $(this).parent().parent().find(".ex_result .ex_result_p_1").html("Wrong!").addClass("wrong");
                $(this).addClass("wrong");
                
                $(this).parent().parent().addClass("wrong");
            }
            $(this).parent().find(".option").addClass("disabled");
            $(this).parent().parent().find(".button").show();
        }
    });
    
    $('.examintaion').on('click', '.exam_quest .button', function() {
        var skillId = $(this).parent().parent().attr("skill");
        var skillIndex = skillsArray.findIndex(skill => skill.id === skillId);
        
        var currentIndex = $(this).parent().attr("id");
        var examPoints = skillsArray[skillIndex].points;
        var examName = skillsArray[skillIndex].title;
        var currentExamId = $(this).parent().parent().parent().attr("skill");
        
        var id = parseInt(currentIndex);
        
        var numberOfQuestions = $(this).parent().parent().find(".exam_quest").length;
        
        if (id + 1 <= numberOfQuestions) {
            $(this).parent().hide();
            var newId = id + 1;
            $(".exam_quest[id='" + newId + "']").show();
        } else {
            $('#ex').hide();
            $('#ac').show();
            
            var correctCount = 0;
             $('.exam_quest_wrapper .exam_quest').each(function() {
                 if ($(this).hasClass("correct")) {
                     correctCount += 1;
                 }
             })
             
             $('.exam_quest_wrapper').html("");
             
             if (correctCount == numberOfQuestions) {
                score += examPoints;
                $('.score_label').html(score);
               
                $.growl.examPassed({ message: "" });
                $.growl.points({ message: "+"+examPoints+" points" });
                 
                skillsArray[skillIndex].status = "achieved";
                loadSkills();
             } else {
                  $.growl.examFailed({ message: "" });

             }
        }
    });
    
    /* Story Events */
})