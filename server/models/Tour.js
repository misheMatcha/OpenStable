const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TourSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    duration: {
        type: Number, //Number of minutes
        required: true,
    },
    difficulty: {
        type: String, //Novice, Intermediate, Experienced
        required: true
    },
    terrain: {
        type: String, //Any like Desert, Mountain, Beach
        required: true
    },
    capacity: { //Should be calculated automaticall by # of horses
        type: Number,
        default: 0 //Defaults at 0 - since no horses yet
    },
    route: { //Meant to become array of long and lats, tracing the route
        type: [[Number, Number]],
    },
    start_time: {
        type: String, //Might have to revise this to DATE
        required: true
    }, 
    stable: { //Stable Tour belongs to
        type: Schema.Types.ObjectId, ref: 'Stable',
        required: true
    },
    
    // Tom - Old image version, kept it around just in case.
    // images:[{ type: Schema.Types.ObjectId, ref: 'Image'}],

    // Tom - New version, treats image like strings for AWS. Not sure if this syntax is correct?
    // image: { type: String },
    // images: { type: Array },

    // Tom - Older versions, kept them commented out just in case.
    // horses:[{ type: Schema.Types.ObjectId, ref: 'Horse'}],
    // reserved_horses:[{ type: Schema.Types.ObjectId, ref: 'Horse'}],

    images:[{ type: Schema.Types.ObjectId, ref: 'images'}],
    horses:[{ type: Schema.Types.ObjectId, ref: 'horses'}],
    reserved_horses:[{ type: Schema.Types.ObjectId, ref: 'horses'}]
}, { timestamps: true }
);

module.exports = mongoose.model("tours", TourSchema);