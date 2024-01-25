const createElementAttribute = (name, value) => {
	return {
		name,
		value,
	};
};

const createElement = (tag, className, text, attributes) => {
	const newElement = document.createElement(tag);
	if (className) {
		newElement.className = className;
	}
	newElement.textContent = text || '';
	if (attributes && attributes.length > 0) {
		for (const attr of attributes) {
			newElement.setAttribute(attr.name, attr.value);
		}
	}
	return newElement;
};

const createHeaderEl = () => {
	const headerEl = createElement('header');

	const headerTitleEl = createElement(
		'h1',
		'sr-only',
		'Four card feature section'
	);

	headerEl.appendChild(headerTitleEl);

	return headerEl;
};

const createSectionEl = () => {
	const sectionEl = createElement('section', 'section');

	/* section head */
	const sectionHeadEl = createElement('div', 'section__head');

	const cardsSummaryTitleEl = createElement(
		'h2',
		'cards-summary__title',
		'Reliable, efficient delivery'
	);

	const cardsSummarySubtitleEl = createElement('p', 'cards-summary__subtitle');

	const cardsSummarySubtitleTextEl = createElement(
		'strong',
		null,
		'Powered by Technology'
	);

	cardsSummarySubtitleEl.appendChild(cardsSummarySubtitleTextEl);

	const cardsSummaryDescEl = createElement(
		'p',
		'cards-summary__desc',
		'Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful'
	);

	sectionHeadEl.appendChild(cardsSummaryTitleEl);
	sectionHeadEl.appendChild(cardsSummarySubtitleEl);
	sectionHeadEl.appendChild(cardsSummaryDescEl);

	/* section body */
	const sectionBodyEl = createElement('div', 'section__body');

	const cardListEl = createElement('div', 'cards');

	const cardBlocks = [
		{
			items: [
				{
					id: 'supervisor',
					title: 'Supervisor',
					description:
						'Monitors activity to identify project roadblocks',
					imageUrl: './images/icons/supervisor.svg',
				},
			],
		},
		{
			items: [
				{
					id: 'team-builder',
					title: 'Team Builder',
					description:
						'Scans our talent network to create the optimal team for your project',
					imageUrl: './images/icons/team-builder.svg',
				},
				{
					id: 'karma',
					title: 'Karma',
					description:
						'Regularly evaluates our talent to ensure quality',
					imageUrl: './images/icons/karma.svg',
				},
			],
		},
		{
			items: [
				{
					id: 'calculator',
					title: 'Calculator',
					description:
						'Uses data from past projects to provide better delivery estimates',
					imageUrl: './images/icons/calculator.svg',
				},
			],
		},
	];

	for (const cardBlock of cardBlocks) {
		const cardBlockEl = createElement('div', 'cards__block');

		for (const item of cardBlock.items) {
			const cardItemEl = createElement('div', `card card--${item.id}`);

			const cardItemTitleEl = createElement(
				'h3',
				'card__title',
				item.title
			);

			const cardItemDescriptionEl = createElement(
				'p',
				'card__desc',
				item.description
			);

			const cardItemImageWrapperEl = createElement('div', 'card__image');

			const cardItemImageEl = createElement('img', null, null, [
				createElementAttribute('src', item.imageUrl),
				createElementAttribute('alt', ''),
				createElementAttribute('width', 64),
				createElementAttribute('height', 64),
			]);

			cardItemImageWrapperEl.appendChild(cardItemImageEl);

			cardItemEl.appendChild(cardItemTitleEl);
			cardItemEl.appendChild(cardItemDescriptionEl);
			cardItemEl.appendChild(cardItemImageWrapperEl);

			cardBlockEl.appendChild(cardItemEl);
		}

		cardListEl.appendChild(cardBlockEl);
	}

	sectionBodyEl.appendChild(cardListEl);

	sectionEl.appendChild(sectionHeadEl);
	sectionEl.appendChild(sectionBodyEl);

	return sectionEl;
};

const createMainEl = () => {
	const mainEl = createElement('main');

	const mainContainerEl = createElement('div', 'container');

	const sectionEl = createSectionEl();

	mainContainerEl.appendChild(sectionEl);

	mainEl.appendChild(mainContainerEl);

	return mainEl;
};

const createFooterEl = () => {
	const footerEl = createElement('footer');

	const footerContainerEl = createElement('div', 'container');

	const footerTextEl = createElement('p', null, 'Challenge by ');

	const footerTextLinkCreatorEl = createElement(
		'a',
		'btn btn--link',
		'Frontend Mentor',
		[
			createElementAttribute(
				'href',
				'https://www.frontendmentor.io?ref=challenge'
			),
			createElementAttribute('rel', 'noopener'),
			createElementAttribute('target', '_blank'),
		]
	);

	const footerTextLinkCoderEl = createElement(
		'a',
		'btn btn--link',
		'al3xback',
		[
			createElementAttribute('href', 'https://github.com/al3xback'),
			createElementAttribute('rel', 'noopener'),
			createElementAttribute('target', '_blank'),
		]
	);

	footerTextEl.appendChild(footerTextLinkCreatorEl);
	footerTextEl.append('. Coded by ');
	footerTextEl.appendChild(footerTextLinkCoderEl);

	footerContainerEl.appendChild(footerTextEl);

	footerEl.appendChild(footerContainerEl);

	return footerEl;
};

export {
	createElementAttribute,
	createElement,
	createHeaderEl,
	createSectionEl,
	createMainEl,
	createFooterEl,
};
