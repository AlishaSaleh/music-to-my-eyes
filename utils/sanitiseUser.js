module.exports.sanitiseUser = (user) => {
    const { id, name, email, dob, gender, location, orientation, image } = user
    return {
       id, name, email, dob, gender, location, orientation, image
    }
}