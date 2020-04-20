install:
	npm install
even:
	npx node bin/brain-even.js
calc:
	npx node bin/brain-calc.js
lint:
	npx eslint .
publish:
	npm publish --dry-run
