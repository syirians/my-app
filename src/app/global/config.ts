export class Configuration {

    public static lang: string = 'id';

    static get() {
        return {
            API: 'https://api.nytimes.com/svc/topstories',
            topMenu: 'https://developer.nytimes.com'
        }
    }
    static apiKey() {
        return 'zAy0Ftu13YHbFO1pvztOMdwisYdtXyCV';
    }
    static categories() {
        return ["home", "arts", "automobiles", "books", "business", "fashion", "food", "health", "insider", "magazine", "movies", "national", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "tmagazine", "travel", "upshot", "world"];
    }

}