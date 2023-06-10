const moment = require("moment");

function scheduleTask(cronPattern, task) {
    const patternParts = cronPattern.split(' ');

    const minute = patternParts[0];
    const hour = patternParts[1];
    const dayOfMonth = patternParts[2];
    const month = patternParts[3];
    const dayOfWeek = patternParts[4];

    const checkSchedule = () => {
        const now = moment();
        // console.log(now)
        let structured = `${moment().format('YYYY')}-${month}-${dayOfMonth} ${hour}:0${minute}`;
        structured = moment(structured, "YYYY-MM-DD HH:mm").format()
        // console.log(structured)
        //calculate the difference.
        let diff = moment(structured).diff(now)
        console.log(diff)

        // if (
        //     now.getMinutes().toString() === minute &&
        //     now.getHours().toString() === hour &&
        //     now.getDate().toString() === dayOfMonth &&
        //     (now.getMonth() + 1).toString() === month && // Month is zero-based in JavaScript
        //     now.getDay().toString() === dayOfWeek
        // ) {
        //     console.log("IN")
        //     task();
        // }

        task();

        // Check again in 1 minute
        setTimeout(checkSchedule, diff);
    };

    checkSchedule();
}

// Example usage
scheduleTask('5 13 1 8 *', () => {
    console.log('Task executed at 9:00 AM');
});
