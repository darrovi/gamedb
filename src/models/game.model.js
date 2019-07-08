class Game {
    /**
     * @param {string} id
     * @param {string} userId
     * @param {string} name
     * @param {string} description
     * @param {string} categories
     * @param {Date} releaseDate
     * @param {string} originalPlatform
     * @param {string} publishers
     * @param {string} developers
     * @param {string} serie
     * @param {boolean} completed
     * @param {boolean} playing
     * @param {Date} lastStarted
     * @param {Date} lastFinished
     * @param {Date} createdAt
     * @param {Date} updatedAt
     * @param {number} score
     * @param {GameEntry} gameEntry
     */
    constructor(id,
                userId,
                name,
                image,
                description,
                categories,
                releaseDate,
                originalPlatform,
                publishers,
                developers,
                serie,
                completed,
                playing,
                lastStarted,
                lastFinished,
                createdAt,
                updatedAt,
                score,
                gameEntry) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.image = image;
        this.description = description;
        this.categories = categories;
        this.releaseDate = releaseDate;
        this.originalPlatform = originalPlatform;
        this.publishers = publishers;
        this.developers = developers;
        this.serie = serie;
        this.completed = completed;
        this.playing = playing;
        this.lastStarted = lastStarted;
        this.lastFinished = lastFinished;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.score = score;
        this.gameEntry = gameEntry;
    }
}
