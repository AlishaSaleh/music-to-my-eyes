module.exports.sanitiseUser = (user) => {
    const {  name, email, dob, gender, location, orientation, image } = user
    return {
        name, email, dob, gender, location, orientation, image
    }
}