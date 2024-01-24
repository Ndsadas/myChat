import axios from 'axios'

class Response {
	constructor() {
		this.request = axios.create({
			baseURL: 'https://api.github.com'
		})
	}

	get = (url) => {
		return this.request.get(url)
	}
	post = (url) => {
		return this.request.post(url)
	}
}

export const response = new Response()