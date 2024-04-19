export const COOKIE_NAME ="gallery3"


export function getCookie() {
		
	let t = window.sessionStorage.getItem(COOKIE_NAME)
		
	if(t != null) {
		let data = JSON.parse(t)
		return data
	}
		
	return []
		
}