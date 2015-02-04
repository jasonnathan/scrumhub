Template.MainMenu.rendered = function () {
    $('.left.sidebar').sidebar(ScrumHub.extend({
        history: false,
        transition: 'scale',
        dimPage: false
    }));
};
