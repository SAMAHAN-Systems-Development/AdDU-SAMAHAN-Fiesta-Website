const dayjs = require('dayjs');
dayjs().format();

var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin
dayjs.extend(utc)
dayjs.extend(timezone)

function FilterContents(contents) {

    function checkShow(content){
        const expiry = dayjs(content.expiry, "MMMM DD YYYY hh:mm A").tz("Asia/Manila");
        const start = dayjs(content.start, "MMMM DD YYYY hh:mm A").tz("Asia/Manila");
        if (dayjs().tz("Asia/Manila") < expiry) {
            console.log('expiry:' + expiry)
            return content;
        }
        if (dayjs().tz("Asia/Manila") < expiry) {
            console.log('expiry:' + expiry)
            return content;
        }
    }

    const filtered = contents.filter(checkShow);

    return filtered;
}

export { FilterContents }