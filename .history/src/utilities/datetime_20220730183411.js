const dayjs = require('dayjs');
dayjs().format();

var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin
dayjs.extend(utc)
dayjs.extend(timezone)

function FilterContents(contents) {
    
    function CheckExpiry(content) {
        const expiry = dayjs(content.expiry, "MMMM DD YYYY hh:mm A").tz("Asia/Manila");
        const start = dayjs(content.start, "MMMM DD YYYY hh:mm A").tz("Asia/Manila");
        if (dayjs().tz("Asia/Manila") < expiry && start <= (dayjs().tz("Asia/Manila"))) {
            return content;
        }
    }

    function CheckEmpty(content) {
        const none = "No events.";
        if(content.start == null && content.start == "") {
            console.log(content.start)
            return none;
        }
    }

    const filtered = contents.filter(CheckExpiry);

    return filtered;
}

export { FilterContents }