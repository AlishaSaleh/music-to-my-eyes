module.exports = function ageValidate(data) {
    // var errors;
    
    var dob = new Date(data);
    // console.log(dob)
    //calculate month difference from current date in time
    var month_diff = Date.now() - dob.getTime();
    //convert the calculated difference in date format
    var age_dt = new Date(month_diff);
    //extract year from date    
    var year = age_dt.getUTCFullYear();
    //now calculate the age of the user
    var age = Math.abs(year - 1970);
    // console.log(age)

    if (age < 18) {
        // errors.dob = "You must be Over 18 to sign up";
        // console.log("under-age")
        return true;
    }
    return false
}