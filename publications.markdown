---
layout: page
title: Publications
---
<ul class="list-group">
    {% for pub in site.data.publications %}
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
