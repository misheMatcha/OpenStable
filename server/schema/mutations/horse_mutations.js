/********** HORSE MUTATIONS ************
    DONE:
        - Add new Horse
        - aadd horse image (Via Imagee mutations)

    TO BE DONE:
        - Remove horse
        - Edit horse

/********** TOUR MUTATIONS ************/

const graphql = require("graphql");
const { GraphQLString, 
        GraphQLInt,
        GraphQLFloat,
        GraphQLNonNull, 
        GraphQLID } = graphql;
const mongoose = require("mongoose");
const HorseType = require("../types/horse_type");
const Horse = mongoose.model("horses");

//Stable model to add horse to stable
const StableType = require("../types/stable_type");
const Stable = mongoose.model("stables");

const horseMutations = new Object({
    newHorse: {
        // creating a Horse type
        type: HorseType,
        args: {
            name: { type: new GraphQLNonNull(GraphQLString) },
            description: { type: new GraphQLNonNull(GraphQLString) },
            breed: { type: new GraphQLNonNull(GraphQLString) },
            color: { type: new GraphQLNonNull(GraphQLString) },
            height: { type: new GraphQLNonNull(GraphQLFloat) },
            stable: { type: new GraphQLNonNull(GraphQLID) },
        },
        resolve(parentValue, args) {
            
            return Stable.findById(args.stable)
                .then(stable => {
                    return newHorse = new Horse(args)
                        .save()
                        .then(horse => {
                            stable.horses.push(horse.id);
                            stable.save();
                            return horse;
                        })
                })
                .catch(err => err);

        }
    },
 
});

module.exports = horseMutations;