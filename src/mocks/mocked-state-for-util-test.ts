export const mockedStateForUtilTest = {
	characters: [],
	comics: [],
	stories: [],
	charactersOptions: [],
	comicsOptions: [],
	storiesOptions: [],
	bookmarks: { characters: [], comics: [], stories: [] },
	hiddenResources: {
		characters: [
			{
				id: 1011334,
				name: '3-D Man',
				description: '',
				modified: '2014-04-29T14:18:17-0400',
				thumbnail: {
					path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
					extension: 'jpg',
				},
				resourceURI:
					'http://gateway.marvel.com/v1/public/characters/1011334',
				comics: {
					available: 12,
					collectionURI:
						'http://gateway.marvel.com/v1/public/characters/1011334/comics',
					items: [
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/comics/21366',
							name: 'Avengers: The Initiative (2007) #14',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/comics/24571',
							name: 'Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/comics/21546',
							name: 'Avengers: The Initiative (2007) #15',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/comics/21741',
							name: 'Avengers: The Initiative (2007) #16',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/comics/21975',
							name: 'Avengers: The Initiative (2007) #17',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/comics/22299',
							name: 'Avengers: The Initiative (2007) #18',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/comics/22300',
							name: 'Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/comics/22506',
							name: 'Avengers: The Initiative (2007) #19',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/comics/8500',
							name: 'Deadpool (1997) #44',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/comics/10223',
							name: 'Marvel Premiere (1972) #35',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/comics/10224',
							name: 'Marvel Premiere (1972) #36',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/comics/10225',
							name: 'Marvel Premiere (1972) #37',
						},
					],
					returned: 12,
				},
				series: {
					available: 3,
					collectionURI:
						'http://gateway.marvel.com/v1/public/characters/1011334/series',
					items: [
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/series/1945',
							name: 'Avengers: The Initiative (2007 - 2010)',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/series/2005',
							name: 'Deadpool (1997 - 2002)',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/series/2045',
							name: 'Marvel Premiere (1972 - 1981)',
						},
					],
					returned: 3,
				},
				stories: {
					available: 21,
					collectionURI:
						'http://gateway.marvel.com/v1/public/characters/1011334/stories',
					items: [
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/19947',
							name: 'Cover #19947',
							type: 'cover',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/19948',
							name: 'The 3-D Man!',
							type: 'interiorStory',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/19949',
							name: 'Cover #19949',
							type: 'cover',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/19950',
							name: "The Devil's Music!",
							type: 'interiorStory',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/19951',
							name: 'Cover #19951',
							type: 'cover',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/19952',
							name: 'Code-Name:  The Cold Warrior!',
							type: 'interiorStory',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/47184',
							name: 'AVENGERS: THE INITIATIVE (2007) #14',
							type: 'cover',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/47185',
							name: 'Avengers: The Initiative (2007) #14 - Int',
							type: 'interiorStory',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/47498',
							name: 'AVENGERS: THE INITIATIVE (2007) #15',
							type: 'cover',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/47499',
							name: 'Avengers: The Initiative (2007) #15 - Int',
							type: 'interiorStory',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/47792',
							name: 'AVENGERS: THE INITIATIVE (2007) #16',
							type: 'cover',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/47793',
							name: 'Avengers: The Initiative (2007) #16 - Int',
							type: 'interiorStory',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/48361',
							name: 'AVENGERS: THE INITIATIVE (2007) #17',
							type: 'cover',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/48362',
							name: 'Avengers: The Initiative (2007) #17 - Int',
							type: 'interiorStory',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/49103',
							name: 'AVENGERS: THE INITIATIVE (2007) #18',
							type: 'cover',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/49104',
							name: 'Avengers: The Initiative (2007) #18 - Int',
							type: 'interiorStory',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/49106',
							name: 'Avengers: The Initiative (2007) #18, Zombie Variant - Int',
							type: 'interiorStory',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/49888',
							name: 'AVENGERS: THE INITIATIVE (2007) #19',
							type: 'cover',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/49889',
							name: 'Avengers: The Initiative (2007) #19 - Int',
							type: 'interiorStory',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/54371',
							name: 'Avengers: The Initiative (2007) #14, Spotlight Variant - Int',
							type: 'interiorStory',
						},
					],
					returned: 20,
				},
				events: {
					available: 1,
					collectionURI:
						'http://gateway.marvel.com/v1/public/characters/1011334/events',
					items: [
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/events/269',
							name: 'Secret Invasion',
						},
					],
					returned: 1,
				},
				urls: [
					{
						type: 'detail',
						url: 'http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=ee8e8b79f0782b123e109fa19d7c3d03',
					},
					{
						type: 'wiki',
						url: 'http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=ee8e8b79f0782b123e109fa19d7c3d03',
					},
					{
						type: 'comiclink',
						url: 'http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=ee8e8b79f0782b123e109fa19d7c3d03',
					},
				],
			},
			{
				id: 1017100,
				name: 'A-Bomb (HAS)',
				description:
					"Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
				modified: '2013-09-18T15:54:04-0400',
				thumbnail: {
					path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
					extension: 'jpg',
				},
				resourceURI:
					'http://gateway.marvel.com/v1/public/characters/1017100',
				comics: {
					available: 4,
					collectionURI:
						'http://gateway.marvel.com/v1/public/characters/1017100/comics',
					items: [
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/comics/47176',
							name: 'FREE COMIC BOOK DAY 2013 1 (2013) #1',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/comics/40632',
							name: 'Hulk (2008) #53',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/comics/40630',
							name: 'Hulk (2008) #54',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/comics/40628',
							name: 'Hulk (2008) #55',
						},
					],
					returned: 4,
				},
				series: {
					available: 2,
					collectionURI:
						'http://gateway.marvel.com/v1/public/characters/1017100/series',
					items: [
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/series/17765',
							name: 'FREE COMIC BOOK DAY 2013 1 (2013)',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/series/3374',
							name: 'Hulk (2008 - 2012)',
						},
					],
					returned: 2,
				},
				stories: {
					available: 7,
					collectionURI:
						'http://gateway.marvel.com/v1/public/characters/1017100/stories',
					items: [
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/92078',
							name: 'Hulk (2008) #55',
							type: 'cover',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/92079',
							name: 'Interior #92079',
							type: 'interiorStory',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/92082',
							name: 'Hulk (2008) #54',
							type: 'cover',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/92083',
							name: 'Interior #92083',
							type: 'interiorStory',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/92086',
							name: 'Hulk (2008) #53',
							type: 'cover',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/92087',
							name: 'Interior #92087',
							type: 'interiorStory',
						},
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/105929',
							name: 'cover from Free Comic Book Day 2013 (Avengers/Hulk) (2013) #1',
							type: 'cover',
						},
					],
					returned: 7,
				},
				events: {
					available: 0,
					collectionURI:
						'http://gateway.marvel.com/v1/public/characters/1017100/events',
					items: [],
					returned: 0,
				},
				urls: [
					{
						type: 'detail',
						url: 'http://marvel.com/characters/76/a-bomb?utm_campaign=apiRef&utm_source=ee8e8b79f0782b123e109fa19d7c3d03',
					},
					{
						type: 'comiclink',
						url: 'http://marvel.com/comics/characters/1017100/a-bomb_has?utm_campaign=apiRef&utm_source=ee8e8b79f0782b123e109fa19d7c3d03',
					},
				],
			},
		],
		comics: [
			{
				id: 82970,
				digitalId: 0,
				title: 'Marvel Previews (2017)',
				issueNumber: 0,
				variantDescription: '',
				description: null,
				modified: '2020-02-07T09:35:32-0500',
				isbn: '',
				upc: '75960608839303111',
				diamondCode: '',
				ean: '',
				issn: '',
				format: '',
				pageCount: 112,
				textObjects: [],
				resourceURI: 'http://gateway.marvel.com/v1/public/comics/82970',
				urls: [
					{
						type: 'detail',
						url: 'http://marvel.com/comics/issue/82970/marvel_previews_2017?utm_campaign=apiRef&utm_source=ee8e8b79f0782b123e109fa19d7c3d03',
					},
					{
						type: 'purchase',
						url: 'http://comicstore.marvel.com/Marvel-Previews-0/digital-comic/52952?utm_campaign=apiRef&utm_source=ee8e8b79f0782b123e109fa19d7c3d03',
					},
				],
				series: {
					resourceURI:
						'http://gateway.marvel.com/v1/public/series/23665',
					name: 'Marvel Previews (2017 - Present)',
				},
				variants: [
					{
						resourceURI:
							'http://gateway.marvel.com/v1/public/comics/82967',
						name: 'Marvel Previews (2017)',
					},
					{
						resourceURI:
							'http://gateway.marvel.com/v1/public/comics/82965',
						name: 'Marvel Previews (2017)',
					},
					{
						resourceURI:
							'http://gateway.marvel.com/v1/public/comics/82969',
						name: 'Marvel Previews (2017)',
					},
					{
						resourceURI:
							'http://gateway.marvel.com/v1/public/comics/74697',
						name: 'Marvel Previews (2017)',
					},
					{
						resourceURI:
							'http://gateway.marvel.com/v1/public/comics/72736',
						name: 'Marvel Previews (2017)',
					},
					{
						resourceURI:
							'http://gateway.marvel.com/v1/public/comics/75668',
						name: 'Marvel Previews (2017)',
					},
					{
						resourceURI:
							'http://gateway.marvel.com/v1/public/comics/65364',
						name: 'Marvel Previews (2017)',
					},
					{
						resourceURI:
							'http://gateway.marvel.com/v1/public/comics/65158',
						name: 'Marvel Previews (2017)',
					},
					{
						resourceURI:
							'http://gateway.marvel.com/v1/public/comics/65028',
						name: 'Marvel Previews (2017)',
					},
					{
						resourceURI:
							'http://gateway.marvel.com/v1/public/comics/75662',
						name: 'Marvel Previews (2017)',
					},
					{
						resourceURI:
							'http://gateway.marvel.com/v1/public/comics/74320',
						name: 'Marvel Previews (2017)',
					},
					{
						resourceURI:
							'http://gateway.marvel.com/v1/public/comics/73776',
						name: 'Marvel Previews (2017)',
					},
				],
				collections: [],
				collectedIssues: [],
				dates: [
					{
						type: 'onsaleDate',
						date: '2099-01-29T00:00:00-0500',
					},
					{ type: 'focDate', date: '2020-01-06T00:00:00-0500' },
				],
				prices: [{ type: 'printPrice', price: 0 }],
				thumbnail: {
					path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada',
					extension: 'jpg',
				},
				images: [
					{
						path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada',
						extension: 'jpg',
					},
				],
				creators: {
					available: 1,
					collectionURI:
						'http://gateway.marvel.com/v1/public/comics/82970/creators',
					items: [
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/creators/10021',
							name: 'Jim Nausedas',
							role: 'editor',
						},
					],
					returned: 1,
				},
				characters: {
					available: 0,
					collectionURI:
						'http://gateway.marvel.com/v1/public/comics/82970/characters',
					items: [],
					returned: 0,
				},
				stories: {
					available: 1,
					collectionURI:
						'http://gateway.marvel.com/v1/public/comics/82970/stories',
					items: [
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/stories/183704',
							name: 'cover from Marvel Previews (2017)',
							type: 'cover',
						},
					],
					returned: 1,
				},
				events: {
					available: 0,
					collectionURI:
						'http://gateway.marvel.com/v1/public/comics/82970/events',
					items: [],
					returned: 0,
				},
			},
		],
		stories: [
			{
				id: 11,
				title: 'Interior #11',
				description: '',
				resourceURI: 'http://gateway.marvel.com/v1/public/stories/11',
				type: 'story',
				modified: '1969-12-31T19:00:00-0500',
				thumbnail: null,
				creators: {
					available: 0,
					collectionURI:
						'http://gateway.marvel.com/v1/public/stories/11/creators',
					items: [],
					returned: 0,
				},
				characters: {
					available: 0,
					collectionURI:
						'http://gateway.marvel.com/v1/public/stories/11/characters',
					items: [],
					returned: 0,
				},
				series: {
					available: 1,
					collectionURI:
						'http://gateway.marvel.com/v1/public/stories/11/series',
					items: [
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/series/10',
							name: 'Captain Britain Vol. I (1999)',
						},
					],
					returned: 1,
				},
				comics: {
					available: 1,
					collectionURI:
						'http://gateway.marvel.com/v1/public/stories/11/comics',
					items: [
						{
							resourceURI:
								'http://gateway.marvel.com/v1/public/comics/945',
							name: 'Captain Britain Vol. I (Trade Paperback)',
						},
					],
					returned: 1,
				},
				events: {
					available: 0,
					collectionURI:
						'http://gateway.marvel.com/v1/public/stories/11/events',
					items: [],
					returned: 0,
				},
				originalIssue: {
					resourceURI:
						'http://gateway.marvel.com/v1/public/comics/945',
					name: 'Captain Britain Vol. I (Trade Paperback)',
				},
			},
		],
	},
};
