---
layout: page
permalink: /showcases/
title: Portfolio
description: A list of my featured projects and collaborations
nav: true
nav_order: 6
---

<ul class="project-list">
{% assign portfolio_projects = site.projects | sort: "importance" %}
{% for project in portfolio_projects %}
  <li class="project-list-item">
    {% if project.img %}
    <a class="project-list-thumb" href="{{ project.url | relative_url }}">
      <img src="{{ project.img | relative_url }}" alt="{{ project.title }}" loading="lazy" />
    </a>
    {% endif %}
    <div class="project-list-body">
      <h2 class="project-list-title">
        <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
      </h2>
      <p class="project-list-desc">{{ project.description }}</p>
      {% if project.status %}
      <p class="project-list-status"><strong>Status:</strong> {{ project.status }}</p>
      {% endif %}
      <a class="project-list-more" href="{{ project.url | relative_url }}">Read more &rarr;</a>
    </div>
  </li>
{% endfor %}
</ul>

<style>
.project-list {
    list-style: none;
    padding: 0;
    margin: 20px 0 0;
}

.project-list-item {
    display: flex;
    gap: 24px;
    padding: 24px 0;
    border-bottom: 1px solid var(--global-divider-color, #eee);
}

.project-list-item:last-child {
    border-bottom: 0;
}

.project-list-thumb {
    flex: 0 0 200px;
}

.project-list-thumb img {
    width: 200px;
    height: 130px;
    object-fit: cover;
    border-radius: 6px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.project-list-thumb img:hover {
    transform: translateY(-4px);
}

.project-list-body {
    flex: 1 1 auto;
}

.project-list-title {
    margin: 0 0 8px;
    font-weight: 600;
}

.project-list-desc {
    line-height: 1.6;
    margin-bottom: 10px;
}

.project-list-status {
    margin-bottom: 10px;
    font-size: 0.95rem;
}

.project-list-more {
    font-weight: 600;
}

@media (max-width: 576px) {
    .project-list-item {
        flex-direction: column;
        gap: 14px;
    }

    .project-list-thumb,
    .project-list-thumb img {
        width: 100%;
    }

    .project-list-thumb img {
        height: 180px;
    }
}
</style>
