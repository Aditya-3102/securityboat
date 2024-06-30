document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:5000/api/movies');
        const movies = await response.json();
        
        const movieList = document.getElementById('movieList');
        movies.forEach(movie => {
            const listItem = document.createElement('li');
            listItem.textContent = `${movie.title} - ${movie.genre} - ${new Date(movie.showtime).toLocaleString()}`;
            movieList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error:', error);
    }
});
