
1. **Fix Today Must Watch & Weekly Hits**: Ensure users can:
   - Click a movie to go to its single movie page.
   - Like the movie.
   - Copy the movie's URL.

2. **Fix Event Listeners**: Use **event delegation** to handle buttons:
   - Attach one listener to the parent container (e.g., movie list) and handle clicks on the specific buttons (like, data, etc.) using `ev.target.matches('.btn-class')`.

3. inputs placeholder color to white

4. fixing if there is no trailer and someone presses on the data icon to get the movie details on the day movies and week movies

5. fix the copy clipboard on favorite page