# The Haniffa Lab Website

This repository generates what goes on the <https://haniffalab.com> website. The website is hosted on [Github Pages](https://pages.github.com/) and is generated using [Jekyll](https://jekyllrb.com/).

## Contributions

If you notice spelling mistakes or other issues, please do submit a pull request.

## Generating publications list

The list of publications is manually exported from the National Library of Medicine page here:
https://pubmed.ncbi.nlm.nih.gov/?term=%28%28%28%28Haniffa+M%29+NOT+fish%29+NOT+ARG1%29+NOT+ppbp+NOT+Channa%29+NOT+Sri+Lanka+NOT+Polymer+NOT+ITPA+NOT+Coffin-Siris

It should be saved in the `_data` folder. In the header row, the spaces should be removed from the column names (not compatible with Jekyll). Additionally, the file should be opened in LibreCalc (or similar) and saved again. More precisely, the unnecessary double quotation marks should be removed from integer values in the CSV.

If you notice spelling mistakes or other issues, please do submit a pull request.