const dayjs = require('dayjs');
dayjs().format();

var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin
dayjs.extend(utc)
dayjs.extend(timezone)

function FilterContents(contents) {
    
    function CheckShow(content) {
        // console.log('hatdog1');
        const none = 'No Events';
        const expiry = dayjs(content.expiry, "MMMM DD YYYY hh:mm A").tz("Asia/Manila");
        const start = dayjs(content.start, "MMMM DD YYYY hh:mm A").tz("Asia/Manila");
        if (dayjs().tz("Asia/Manila") < expiry && start <= (dayjs().tz("Asia/Manila"))) {
            console.log('expiry' + expiry)
            return content;
        }else if (!expiry) {
            // console.log('hatdog2');
        }
    }

    const filtered = contents.filter(CheckShow);

    return filtered;
}

export { FilterContents }