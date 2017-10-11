import Ember from 'ember';
import layout from '../templates/components/light-box';

export default Ember.Component.extend({
	layout: layout,
	tagName: 'a',
	attributeBindings: ['href', 'lazyload-src', 'data-lightbox', 'data-title', 'data-class'],
	inlineImage: true,
	classNames: ['ember-lightbox'],
	classNameBindings: ['inlineImage']
});
