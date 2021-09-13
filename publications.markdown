---
layout: page
title: Publications
---
<ul class="list-group mb-5">
    {% assign pubs = site.data.publications | sort: "CreateDate" | reverse %}
    {% for pub in pubs %}
    <li class="list-group-item publication">
        <h5 class="title">
            <a href="https://pubmed.ncbi.nlm.nih.gov/{{ pub.PMID }}">{{ pub.Title }}</a></h5>
        <p class="authors">
            {{ pub.Authors }}</p>
        <p class="journal">
            {{ pub.Journal }}. {{ pub.CreateDate }}. DOI: {{ pub.DOI }}</p>
    </li>
    {% endfor %}
</ul>
<p>Publication list exported from <a href="https://pubmed.ncbi.nlm.nih.gov/?term=%28%28%28%28Haniffa+M%29+NOT+fish%29+NOT+ARG1%29+NOT+ppbp+NOT+Channa%29+NOT+Sri+Lanka+NOT+Polymer+NOT+ITPA+NOT+Coffin-Siris" target="_blank">National Library of Medicine</a>