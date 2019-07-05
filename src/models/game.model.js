class Game {
    /**
     * @param {string} id
     * @param {string} userId
     * @param {string} name
     * @param {Date}releaseDate
     * @param {string} originalPlatform
     * @param {string} producer
     * @param {string} developer
     * @param {string} serie
     * @param {boolean} completed
     * @param {boolean} playing
     * @param {Date} lastStarted
     * @param {Date} lastFinished
     * @param {number} score
     * @param {GameEntry} gameEntry
     */
    constructor(id,
                userId,
                name,
                releaseDate,
                originalPlatform,
                producer,
                developer,
                serie,
                completed,
                playing,
                lastStarted,
                lastFinished,
                score,
                gameEntry) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.releaseDate = releaseDate;
        this.originalPlatform = originalPlatform;
        this.producer = producer;
        this.developer = developer;
        this.serie = serie;
        this.completed = completed;
        this.playing = playing;
        this.lastStarted = lastStarted;
        this.lastFinished = lastFinished;
        this.score = score;
        this.gameEntry = gameEntry;
    }
}
