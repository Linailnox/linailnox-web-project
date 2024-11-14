export default {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-recommended-scss',
		'stylelint-config-recommended-vue/scss',
		'stylelint-config-html/vue',
		'stylelint-config-recess-order',
		"stylelint-prettier/recommended"
	],
	overrides: [
		{
			files: ['**/*.{vue,html}'],
			customSyntax: 'postcss-html',
		},
		{
			files: ['**/*.{css,scss}'],
			customSyntax: 'postcss-scss',
		},
	],
	rules: {
		// 允许 global 、export 、v-deep等伪类
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['global', 'export', 'v-deep', 'deep'],
			},
		]
	},
}
