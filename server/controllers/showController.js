import axios from "axios"
import Movie from "../models/Movie.js";

// fun to get movies from tmdb api
export const getNowPlayingMovies = async(req,res)=>{
    try {
        const {data}=await axios.get('https://api.themoviedb.org/3/movie/now_playing',{
            headers:{Authorization:`Bearer ${process.env.TMDB_API_KEY}`}
        })
        const movies=data.results;
        res.json({success:true,movies:movies});
        
    } catch (error) {
        console.error(error);
        res.json({success:false,message: error.message})
        
    }
}

// fun to add a new show to data base

export const addShow = async (req,res)=>{
    try {
        const {movieId,showsInput,showPrices}= req.body
        let movie = await Movie.findById(movieId)
        if(!movie){
            // fetch detils from api
            
        }
    } catch (error) {
        console.error(error);
        res.json({success:false,message: error.message})
        
    }
}
