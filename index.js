const movie = {

    title: 'Spiderman No Way Home',
    releaseYear: 2020,
    rating:4.5,
    director: 'Taika Waitaka'
};

showProperties(movie);

function showProperties(obj){

    for(let key in obj){
        if(typeof obj[key] ==='string'){
        console.log(key,obj[key]);
        }
    }
}