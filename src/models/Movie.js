export class Movie {
    constructor(id, title, originalTitle, posterPath, language, releaseDate, runtime, tagline, homepage, overview, genres, languages, productionCompanies) {
        this.id = id,
        this.title = title,
        this.originalTitle = originalTitle && originalTitle !== 'null' ? originalTitle : '',
        this.posterPath = posterPath,
        this.language = language && language !== 'null' ? language : '',
        this.releaseDate = releaseDate && releaseDate !== 'null' ? releaseDate : '',
        this.runtime = runtime && runtime !== 'null' && runtime !== 0 ? runtime : 0,
        this.tagline = tagline && tagline !== 'null' ? tagline : '',
        this.homepage = homepage && homepage !== 'null' ? homepage : '',
        this.overview = overview && overview !== 'null' ? overview : '',
        this.genres = genres,
        this.languages = languages,
        this.productionCompanies = productionCompanies
    }
}