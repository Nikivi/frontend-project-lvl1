install:
	npm install
even:
	npx node bin/brain-even.js
calc:
	npx node bin/brain-calc.js
gcd:
	npx node bin/brain-gcd.js
progression:
	npx node bin/brain-progression.js
prime:
	npx node bin/brain-prime.js
lint:
	npx eslint .
publish:
	npm publish --dry-run
