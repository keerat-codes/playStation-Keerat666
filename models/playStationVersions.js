const mongoose = require('mongoose');

const playStationVersionsSchema = new mongoose.Schema({
playStationName : { type:  String, description: "Required Field", required: true },
playStationReleaseDate : { type:  Number, description: "Required Field", required: true },
});

module.exports = mongoose.model('playStationVersions', playStationVersionsSchema);