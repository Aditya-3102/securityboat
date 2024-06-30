document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
        window.location.href = 'login.html';
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/api/bookings', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const bookings = await response.json();

        const bookingList = document.getElementById('bookingList');
        bookings.forEach(booking => {
            const listItem = document.createElement('li');
            listItem.textContent = `Movie: ${booking.movie.title}, Seats: ${booking.seats}, Total: $${booking.total}, Showtime: ${new Date(booking.movie.showtime).toLocaleString()}`;
            bookingList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error:', error);
    }
});
