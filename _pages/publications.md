---
layout: page
permalink: /publications/
title: publications
description: An up to date list is available at <a href='https://scholar.google.co.id/citations?hl=en&user=LRNOs_AAAAAJ&view_op=list_works&sortby=pubdate'>Google Scholar</a>.
years: [2025, 2023, 2022, 2021, 2020, 2019]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
