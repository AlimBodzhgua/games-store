
export const isUserLoggedIn = () => {
    return localStorage.hasOwnProperty('user');
} 

export const capitalizeFirstLetter = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1, word.length);
}

export const getFirstWord = (str: string) => {
    return str.split(' ')[0].toLowerCase();
}

export const removeTags = (str: string) => {
	return str.replace(/<p>|<\/p>|<br\s*\/?>/gi, '');
};