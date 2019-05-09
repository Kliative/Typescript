"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function DateTimeStamp() {
    // Should show that its working 
    var time = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getMilliseconds();
    var date = new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear();
    return 'Types is working: ' + 'Date: ' + date + ' Time: ' + time;
}
exports.DateTimeStamp = DateTimeStamp;
