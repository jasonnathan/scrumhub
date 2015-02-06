Router.configure({
    layoutTemplate: 'MasterLayout',
    //loadingTemplate: 'loading',
    //notFoundTemplate: 'pageNotFound',
    //    yieldTemplates: {
    //        nav: {
    //            to: 'MainMenu'
    //        },
    //    footer: {to: 'footer'},
    //}
});


Router.map(function () {
    this.route('home', {
        path: '/',
        onBeforeAction: function () {
            if (Meteor.userId()) {
                this.redirect('/Stories');
            }
            //this.redirect('/Stories')
            this.next();
        },
        template: 'loginForm',
        layoutTemplate: null
    });
    this.route('Sprint', {
        //path: '/Sprint/:_id/edit?',
        path: '/Sprint',

        //onBeforeAction: AccountsTemplates.ensureSignedIn,
        template: 'Sprint'
    });
    this.route('Sprints', {
        //path: '/Sprint/:_id/edit?',
        path: '/Sprints',

        //onBeforeAction: AccountsTemplates.ensureSignedIn,
        template: 'Sprints'
    });
    this.route('Stories', {
        path: 'Stories',
        template: 'Stories'
    });

    this.route('Profile', {
        path: '/Profile',
        template: 'Profile'
    });
    this.route('Admin', {
        path: '/Admin',
        template: 'Users'
    });
    this.route('forms', {
        path: '/forms',
        template: 'forms'
    });
    this.route('Admin', {
        path: '/Admin',
        template: 'Admin'
    });
});