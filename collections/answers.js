Answers= new Mongo.Collection('answers');

Answers.allow({
    insert(){return false;},
    update(){return false;},
    remove(){return false;},
});

Answers.deny({
    insert(){return true;},
    update(){return true;},
    remove(){return true;},
});