import type { Blogpost } from "./blogpost"
// Mock data for blogposts
	export let blogposts: Blogpost[] = [
		{
			title: 'How to tie a bowline',
			synopsis: 'This is synopsis and it can be of different length',
			image: '/bowline.jpg',
			slug: 'how-to-tie-a-bowline',
			tags: ['Sailing'],
			publicationDate: new Date('2022-04-11')
		},
		{
			title: 'Blogpost1',
			synopsis: 'Looking at this blogpost you might learn something new, it is very interesting',
			image: '/ocean2.jpg',
			slug: 'blogpost1',
			tags: ['Boat projects'],
			publicationDate: new Date('2022-04-11')
		},
		{
			title: 'This is test',
			synopsis:
				'Diam, vulputate ut pharetra sit amet, aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean.',
			image: '/ocean2.jpg',
			slug: 'blogpost1',
			tags: ['Destinations'],
			publicationDate: new Date('2022-04-11')
		},
		{
			title: 'Important blog',
			synopsis: 'This is synopsis',
			image: '/ocean2.jpg',
			slug: 'blogpost1',
			tags: ['Boat projects'],
			publicationDate: new Date('2022-04-11')
		},
		{
			title: 'Blogpost2',
			synopsis: 'This is synopsis',
			image: '/ocean2.jpg',
			slug: 'blogpost1',
			tags: ['Destinations', 'Boat projects'],
			publicationDate: new Date('2022-04-11')
		}
	];
