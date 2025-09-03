---
layout: page
permalink: /showcases/
title: Portfolio
description: A collection of my featured projects and collaborations
nav: true
nav_order: 6
---

<div class="portfolio-page">

<!-- Read Eazy (Reazy) -->
<div class="portfolio-item">
    <h2 class="portfolio-title">Read Eazy (Reazy)</h2>
    
    <div class="row">
        <div class="col-sm-12 col-md-6 mt-3 mt-md-0">
            {% include figure.html path="assets/img/showcases/reazy-1.webp" title="Read Eazy App Interface" class="img-fluid rounded z-depth-1" %}
        </div>
        <div class="col-sm-12 col-md-6 mt-3 mt-md-0">
            {% include figure.html path="assets/img/showcases/reazy-2.webp" title="Read Eazy App Features" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    
    <div class="portfolio-description">
        <p>An Android application designed to provide educational support for students with dyslexia. Developed under the Going Global Diversity and Inclusion Partnership project, funded by the British Council in 2024.</p>
        
        <p><strong>Team Members</strong>: Dzikri Rahadian Fudholi, Arif Nurwidyantoro, Muhammad Oriza Nurfajri (UGM), Colin McClure (QUB)</p>
        
        <p><strong>Current Status</strong>: <a href="https://play.google.com/store/apps/details?id=org.readeazy.ugmqub" target="_blank">Available on Google Play Store</a></p>
    </div>
</div>

<hr class="portfolio-divider">

<!-- IndoClimate -->
<div class="portfolio-item">
    <h2 class="portfolio-title">IndoClimate</h2>
    
    <div class="row justify-content-center">
        <div class="col-sm-12 col-md-8 mt-3 mt-md-0">
            {% include figure.html path="assets/img/showcases/indoclimate.png" title="IndoClimate Chatbot Interface" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    
    <div class="portfolio-description">
        <p>A conversational AI system designed to facilitate the dissemination of climate change information and policy updates within the Indonesian context. Part of the KONEKSI project funded by the Indonesian and Australian governments (2023-2025).</p>
        
        <p><strong>Team Members</strong>: Arif Nurwidyantoro, Yunita Sari, Muhammad Oriza Nurfajri, Faturahman Yudanto (UGM), Xiao Liu, Oscar Wu (Deakin)</p>
        
        <p><strong>Current Status</strong>: <a href="https://counterinfodemic.org/tool/indo-chatbot" target="_blank">Operational at Counter Infodemic website</a></p>
    </div>
</div>

<hr class="portfolio-divider">

<!-- Human Values Dashboard -->
<div class="portfolio-item">
    <h2 class="portfolio-title">Human Values Dashboard</h2>
    
    <div class="row justify-content-center">
        <div class="col-sm-12 col-md-8 mt-3 mt-md-0">
            {% include figure.html path="assets/img/showcases/values-dashboard-1.webp" title="Human Values Dashboard Interface" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    
    <div class="portfolio-description">
        <p>A web-based analytical tool that visualizes the manifestation of human values within software repository artifacts. Emerged from doctoral research as a proof-of-concept demonstration of automated human values detection methodologies.</p>
        
        <p><strong>Current Status</strong>: Temporarily unavailable due to ongoing server maintenance activities.</p>
    </div>
</div>

</div>

<style>
.portfolio-page {
    padding: 20px 0;
}

.portfolio-item {
    margin-bottom: 30px;
}

.portfolio-title {
    color: #333;
    font-weight: 600;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
}

.portfolio-description {
    margin-top: 20px;
}

.portfolio-description p {
    line-height: 1.6;
    margin-bottom: 15px;
}

.portfolio-divider {
    margin: 40px 0;
    border: 0;
    height: 1px;
    background: #eee;
}

.portfolio-item:last-child .portfolio-divider {
    display: none;
}

.portfolio-item img {
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.portfolio-item img:hover {
    transform: translateY(-5px);
}
</style>
