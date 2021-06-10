module.exports.sanitiseUser = (user) => {
    const { id, name, email, dob, gender, location, orientation, image, top_songs, likes } = user
    return {
       id, name, email, dob, gender, location, orientation, image, top_songs, likes
    }
}