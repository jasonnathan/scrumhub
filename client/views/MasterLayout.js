Template.MasterLayout.events({
    'click #toggleSideBar': function (e) {

        e.preventDefault();
        $('.left.sidebar').sidebar('toggle');
    }
});