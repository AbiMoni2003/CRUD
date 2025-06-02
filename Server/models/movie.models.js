import { model, Schema } from "mongoose";

const schema = new Schema ({
    Name :{
        type : String,
        required : true,
        unique :true
    },
    Age :Number
})

const Movie = model("Movie",schema);

export default Movie;