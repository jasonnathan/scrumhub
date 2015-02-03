ScrumHub = {
    version: '0.1',
    debug: true,
    extend: function (options) {
        options = options || {};
        options = _.extend(options, {
            debug: ScrumHub.debug
        });
        console.log(JSON.stringify(options));
        return options;
    }
};