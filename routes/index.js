var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const OWM_API_KEY = process.env.OWM_API_KEY

router.get('/movies',(req, res) => {
    const options = {
        method: 'GET',
        headers: {
          accept: OWM_API_KEY,
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTE3M2IwMWRiNDJmYTZjNDczMWY5MGZhYTkxMTk1YiIsIm5iZiI6MTc0NTM5NjgzMy41MDQsInN1YiI6IjY4MDhhNDYxMTQyYjA5Y2VjZjg5ZjBlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u1wHPlDSdsB3uAEXyv9Ed5UFzXZOuLIA3GtxGGHCP6U'
        }
      };

      fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(res => res.json())
        .then(data=> {
            console.log(data.results)
            res.json({movies:data.results})
        })
        // .then(res => console.log(res))
        // .catch(err => console.error(err));
})




module.exports = router;



