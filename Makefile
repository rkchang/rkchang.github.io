publish: web

resume:
	cd resume && latexmk -pdf
	cp resume/Raymond_Chang_resume.pdf portfolio/public/

web: resume
	cd portfolio && npm run build
	cp -r portfolio/dist/* .

clean:
	ls portfolio/dist | xargs -I _ rm -rf _

.PHONY: clean publish resume