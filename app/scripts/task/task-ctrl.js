define([
], function () {
    'use strict';

    var HomepageController = function (TaskList) {
        this.test = true;
        this.modal = {
            "title": "Title",
            "content": "Hello Modal<br />This is a multiline message!"
        };
    };

    return [ "TaskList", HomepageController ];
});
