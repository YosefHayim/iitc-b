2. **Fix Event Listeners**: Use **event delegation** to handle buttons:
   - Attach one listener to the parent container (e.g., movie list) and handle clicks on the specific buttons (like, data, etc.) using `ev.target.matches('.btn-class')`.
