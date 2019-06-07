// Get visible post

export default (posts, { text, sortBy, startDate, endDate }) => {
    return posts.filter((post) => {
        const startDateMatch = typeof startDate !== 'number' || post.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || post.createdAt <= endDate;
        const textMatch = post.note.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'type') {
            return a.createdAt < b.createdAt ? 1 : -1
        }
    })
};