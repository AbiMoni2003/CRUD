import Movie from "../models/movie.models.js";

export const listAll = async(req,res)=>{
   try {
    const movie = await Movie.find();
    return res.json(movie);
   } catch (error) {
    res.status(500).json({message:error.message})
   }
}

export const createMovie = async(req,res)=>{
    const newMovie = new Movie({
        Name : req.body.Name,
        Age : req.body.Age
    })

    try {
        const movie = await newMovie.save();
        return res.status(201).json(movie);
    } catch (error) {
        return res.status(400).json({message:error.message})
    }    
}

export const getByID = async(req,res)=>{
    try {
        const movie =await Movie.findById(req.params.id);
        if(movie == null){
            return res.status(404).json({message:error.message})
        }
        else{
            res.json(movie);
        }
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const updateMovie = async (req,res)=>{
      try {
        const updatedMovie = await Movie.findByIdAndUpdate({_id:req.params.id},{
            Name : req.body.Name,
            Age : req.body.Age
        },
    {
        new :true
    })
        res.status(200).json(updatedMovie)
      } catch (error) {
        return res.status(500).json({message:error.message})
      }
}

export const deleteMovie = async (req,res)=>{
    
    try {
        await Movie.findByIdAndDelete({_id:req.params.id})
        res.status(200).json({message:"deleted"})
    } catch (error) {
       res.status(500).json({message:error.message}) 
    } 
}