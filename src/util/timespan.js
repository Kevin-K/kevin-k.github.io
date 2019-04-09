


/**
 * Converts a YYYY-MM-DD string to a JavaScript Date object.
 * @param {*} yearMonthDay a string in the YYYY-MM-DD format
 */
export const yearMonthDayDate = function(yearMonthDay)
{
    // fail if not a string
    if (typeof yearMonthDay !== 'string' && !(yearMonthDay instanceof String))
    {
        return undefined;
    }
    const [year, month, day] = yearMonthDay.split("-");
    
    // fail if not valid format
    if (!year || !month || !day)
    {
        return undefined;
    }

    // month index starts at 0, so subtract 1
    return new Date(year, month - 1, day);
};

const shortMonths = [ 
    'Jan', 
    'Feb', 
    'Mar', 
    'Apr', 
    'May', 
    'Jun', 
    'Jul', 
    'Aug', 
    'Sep', 
    'Oct', 
    'Nov', 
    'Dec'
];

export const monthYearString = function(date)
{
    // fail if not a date (if it lacks the functions needed)
    if (typeof date.getMonth !== 'function' || typeof date.getFullYear !== 'function')
    {
        return undefined;
    }
    // shortMonth starts at 0, and so does getmonth
    // gets the index from the date object and puts the shortMonth 
    // index in the string
    return `${shortMonths[date.getMonth()]} ${date.getFullYear()}`;
}