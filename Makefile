install:
	npm install
even:
	npx node bin/brain-even.js
calc:
	npx node bin/brain-calc.js
gcd:
	npx node bin/brain-gcd.js
lint:
	npx eslint .
publish:
	npm publish --dry-run
