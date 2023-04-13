export const BASE_API_URL = 'http://localhost:8080';
export const ACCESS_TOKEN = 'userToken';
export const CURRENT_USER = 'currentUser';

export const OAUTH2_REDIRECT_URI = 'http://localhost:19006/OAuth';

export const GOOGLE_AUTH_URL =
	BASE_API_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
