/* Game Objects */
class Rank {
    constructor(image, point, name, phrase) {
        this.image = image
        this.point = point
        this.name = name
        this.phrase = phrase
    }
};

class Quote {
    constructor(quote, author, showed) {
        this.quote = quote
        this.author = author
        this.showed = false
    }
};

class Scene {
    constructor(date, newSkills, newProjects, stories) {
        this.date = date
        this.newSkills = newSkills
        this.newProjects = newProjects
        this.stories = stories
    }
};

class Story {
    constructor(id, text, buttons) {
        this.id = id
        this.text = text
        this.buttons = buttons
    }
};

class Button {
    constructor(title, goToID, points) {
        this.title = title
        this.goToID = goToID
        this.points = points
    }  
};

class Project {
    constructor(id, image, title, description, points, terms, status, skills) {
        this.id = id
        this.image = image
        this.title = title
        this.description = description
        this.points = points
        this.terms = terms
        this.status = status
        this.startDate = null
        this.skills = skills
    }
};

class Skill {
    constructor(id, image, title, points, status, questions) {
        this.id = id
        this.image = image
        this.title = title
        this.points = points
        this.status = status
        this.questions = questions
    }
};

class Question {
    constructor(index, title, image, correct, info, options) {
        this.index = index
        this.title = title
        this.image = image
        this.options = options
        this.correct = correct
        this.info = info
    }
};

