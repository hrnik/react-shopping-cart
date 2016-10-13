import {expect} from 'chai';
import sort from '../../src/utils/sort';

const array = [
	{count: 3, name: "name 30"},
	{count: 1, name: "name Abba"},
	{count: 1, name: "name Babba"},
	{count: 1, name: "name Cica"},
	{count: 3, name: "name 31"},
	{count: 1, name: "name 1"}
];


describe('Stable sort', () => {
	it('should sort ask', ()=> {
		let field = 'count';
		let compare = (a, b) => {
			if (a[field] < b[field]) return -1;
			if (a[field] > b[field]) return 1;
			return 0;
		};
		console.log(sort(array, compare));
		expect(sort(array, compare)).to.eql([
			{count: 1, name: 'name Abba'},
			{count: 1, name: 'name Babba'},
			{count: 1, name: 'name Cica'},
			{count: 1, name: 'name 1'},
			{count: 3, name: 'name 30'},
			{count: 3, name: 'name 31'}
		]);
	});

	it('should sort desk', ()=> {
		let field = 'count';
		let compare = (a, b) => {
			if (a[field] < b[field]) return 1;
			if (a[field] > b[field]) return -1;
			return 0;
		};
		console.log(sort(array, compare));
		expect(sort(array, compare)).to.eql([
			{count: 3, name: 'name 30'},
			{count: 3, name: 'name 31'},
			{count: 1, name: 'name Abba'},
			{count: 1, name: 'name Babba'},
			{count: 1, name: 'name Cica'},
			{count: 1, name: 'name 1'}
		]);
	})

});
