---
layout: page
title: Bioinformatic analyses
permalink: /bioinformatic-analyses/
nav: true
nav_order: 2
display_categories: [Bulk RNA-seq, Single-cell RNA-seq, Spatial transcriptomics, Multi-omics, Statistical modeling]
horizontal: false
---
This portfolio presents a selection of bioinformatic methods I routinely use. While this list reflects my current expertise, I can also implement new analyses upon request, provided that relevant R packages or Python libraries are available.

To support computationally intensive projects, I have access to the <a href="https://meso.univ-fcomte.fr/" target="_blank" rel="noopener noreferrer">Mésocentre de Franche-Comté</a> supercomputing facilities. This includes high-memory nodes (up to 1TB RAM) for large-scale data processing (e.g., expression matrices with millions of cells) and Nvidia A100 40GB GPUs for machine learning and AI model training and inference (e.g. bioinformatic algorithms implemented in Python taking advantage of GPU-accelerated computing).

For questions or collaboration inquiries, you can reach me using the links in the navigation bar of the <a href="{{ '/' | relative_url }}">Contact</a> section.

Currently under construction, the various analyses will be progressively completed. In the meantime, the publication <a href="https://www.medrxiv.org/content/10.1101/2025.04.21.25324260">A subset of pro-inflammatory CXCL10+ LILRB2+ macrophages derives from recipient monocytes and drives renal allograft rejection</a> regroups most of the methods described here.

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
