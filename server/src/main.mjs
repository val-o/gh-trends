import getRepos from './getRepos.mjs';
import getDevelopers from './getDevelopers.mjs';

function getUrl (section, language, since, spoken_language_code) {
  const BASE_URL = 'https://github.com/trending';

  let FETCH_URL = (section ? BASE_URL + '/developers' : BASE_URL);

  FETCH_URL = (language ? FETCH_URL + '/' + language : FETCH_URL) + '?since=' + since;

  FETCH_URL = spoken_language_code
    ? (FETCH_URL + '&spoken_language_code=' + spoken_language_code)
    : FETCH_URL;

  return FETCH_URL;
}

export default function githubTrends ({ section, language, since = 'daily', spoken_language_code } = {}) {

  const FETCH_URL = getUrl(section, language, since, spoken_language_code);

  return section ? getDevelopers(FETCH_URL) : getRepos(FETCH_URL);
}