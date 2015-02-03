Template.MainMenu.rendered = function () {
    $('.left.sidebar').sidebar(ScrumHub.extend({
        history: false,
        transition: 'scale',
        dimPage: false
    }));
};
Template.MasterLayout.events({
    'click #toggleSideBar': function (e) {

        e.preventDefault();
        $('.left.sidebar').sidebar('toggle');
    }
});