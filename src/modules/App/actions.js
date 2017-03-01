export const STORE_PAGES = 'STORE_PAGES'

const storePages = (pages = []) => {
	return {
		type: STORE_PAGES,
		pages
	}
}

export const fetchPages = () => {
	return dispatch => fetch('/pages').then(r => r.json()).then(
		pages => dispatch(storePages(pages))
	)
}
