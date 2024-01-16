import assert from 'assert';
import jsdom from 'jsdom';

import {
	createElementAttribute,
	createElement,
	createHeaderEl,
	createSectionEl,
	createMainEl,
	createFooterEl,
} from '../js/util.js';

const { JSDOM } = jsdom;

describe('DOM', () => {
	beforeEach(() => {
		const { document } = new JSDOM(
			`<!DOCTYPE html><html><body></body></html>`
		).window;
		global.document = document;
	});

	it("should be able to create element via 'createElement' function", () => {
		const headingOneEl = createElement('h1', 'title', 'Lorem ipsum');
		document.body.appendChild(headingOneEl);

		const isHeadingOneElElExist = !!document.querySelector('.title');
		assert.ok(isHeadingOneElElExist);
	});

	it("should be able to return element attribute data via 'createElementAttribute' function", () => {
		const srcData = createElementAttribute('width', 640);

		const expectedSrcData = {
			name: 'width',
			value: 640,
		};

		assert.deepEqual(srcData, expectedSrcData);
	});

	it("should be able to create header element via 'createHeaderEl' function", () => {
		const headerEl = createHeaderEl();
		document.body.appendChild(headerEl);

		const isHeaderElExist = !!document.querySelector('header');
		assert.ok(isHeaderElExist);
	});

	it("should be able to create section element via 'createSectionEl' function", () => {
		const sectionEl = createSectionEl();
		document.body.appendChild(sectionEl);

		const isSectionElExist = !!document.querySelector('.section');
		assert.ok(isSectionElExist);
	});

	it("should be able to create main element via 'createMainEl' function", () => {
		const mainEl = createMainEl();
		document.body.appendChild(mainEl);

		const isMainElExist = !!document.querySelector('main');
		assert.ok(isMainElExist);
	});

	it("should be able to create footer element via 'createFooterEl' function", () => {
		const footerEl = createFooterEl();
		document.body.appendChild(footerEl);

		const isFooterElExist = !!document.querySelector('footer');
		assert.ok(isFooterElExist);
	});
});
