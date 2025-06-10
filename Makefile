docs:
	mkdir -p docs
	cd portfolio && npm run build
	cp resume/Raymond_Chang_resume.pdf portfolio/public/
	cp -r portfolio/dist/* docs

clean:
	rm -rf docs

.PHONY: clean