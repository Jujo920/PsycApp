import { Meteor } from 'meteor/meteor'

Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var firstName = $('[name=firstName]').val();
        var lastName = $('[name=lastName]').val();
        var personNum = $('[name=personNum]').val();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            firstName: firstName,
            lastName: lastName,
            personNum: personNum,
            email: email,
            password: password
        },
        function(error){
            if(error){
                console.log(error.reason); // Output error if registration fails
            } else {
                Router.go("home"); // Redirect user if registration succeeds
            }
        });
        Router.go('home');//don't know if is to remove
    }
});


Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
            if(error){
                console.log(error.reason);
            } else {
                Router.go("home");
            }
        });
        Router.go('home');
    }
});

Template.login.onCreated(function(){
    console.log("The 'login' template was just created.");
});

Template.login.onRendered(function(){
    console.log("The 'login' template was just rendered.");
});

Template.login.onDestroyed(function(){
    console.log("The 'login' template was just destroyed.");
});
