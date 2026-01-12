---
layout: page
permalink: /code/
title: Code
nav: true
nav_order: 3
---
This section compiles repositories containing the code developed for published studies or preprints, ensuring reproducibility and transparency in the analyses. In addition, I am developing an R package called RightOmicsTools, which provides tools and functions to facilitate Omics analyses, with a particular focus on single-cell RNA-seq.

Note: Currently the rendering of the repositories below is broken due to an ongoing pause on the providing service, it may return shortly. See more <a href="https://github.com/anuraghazra/github-readme-stats/issues/3851">here</a>.

<br>
{% if site.data.repositories.github_users %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.github_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
