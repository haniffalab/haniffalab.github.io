---
layout: page
title: Internships
---
<div class="team-card text-left">
    <h3 class="m-0">2021</h3>
</div>
<div class="row">
    {% assign interns = site.internships | where: "year", "2021" %}
    {% for intern in interns %}
    <div class="col-lg-4 col-md-6 col-sm-6 d-flex">
        <a class="team-card flex-fill team-card-link" href="{{ intern.url }}">
        <img src="/assets/img/interns/{{ intern.thumbnail }}"  alt="{{ intern.name }}" />
        <span class="name">{{ intern.name }}</span>
        <div class="position">{{ intern.qualification }}</div>
        </a>
    </div>
    {% endfor %}          
</div>