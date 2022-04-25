import adapter from '@sveltejs/adapter-auto';
// import { sass } from 'svelte-preprocess';


// const preprocess = require('svelte-preprocess');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};


export default config;
