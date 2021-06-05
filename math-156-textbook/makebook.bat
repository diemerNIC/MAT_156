python c:/users/diemer/documents/pretext/mathbook/pretext/pretext -vv -c latex-image -f svg -d ./output/html/images ./source/main.ptx

xsltproc --output .\output\html\ --stringparam exercise.divisional.solution "no" --stringparam publisher publisher.ptx ~\Documents\mathbook\xsl\pretext-html.xsl .\source\main.ptx
