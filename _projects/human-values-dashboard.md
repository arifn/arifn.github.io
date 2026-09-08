---
layout: page
title: Human Values Dashboard
description: A web tool that visualises how human values manifest in software repository artefacts.
img: assets/img/showcases/values-dashboard-1.webp
importance: 3
category: Research tools
status: Temporarily unavailable due to ongoing server maintenance.
---

<p><a href="{{ '/showcases/' | relative_url }}">&larr; Back to Portfolio</a></p>

## Overview

The **Human Values Dashboard** is a web-based analytical tool that visualises how
human values are expressed in software repository artefacts such as issues,
commits, and discussions. It grew out of my doctoral research at Monash
University as a proof-of-concept for automated human values detection.

<div class="row justify-content-center">
    <div class="col-sm-12 col-md-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/showcases/values-dashboard-1.webp" title="Human Values Dashboard interface" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Motivation

Human values — things like security, self-direction, or social justice — surface
implicitly in the text developers write while building software, but they are
rarely made visible or tracked. The dashboard demonstrates that these signals
can be detected automatically and surfaced back to a team in an interpretable
way.

## What it does

- Applies automated human values detection to software development artefacts.
- Aggregates the results into a dashboard so that the presence and distribution
  of values across a repository can be inspected visually.
- Serves as a demonstration vehicle for the detection methods developed during
  the underlying research.

## Related publications

- [Human values in software development artefacts](https://www.sciencedirect.com/science/article/abs/pii/S0950584921001828) — *Information and Software Technology*.
- [A human values dashboard for software development](https://link.springer.com/article/10.1007/s10664-023-10305-y) — *Empirical Software Engineering*, 2023.
- [Towards a human values operationalisation review](https://ieeexplore.ieee.org/abstract/document/9829732/) — *IEEE Access*, 2022.

## Status

The live instance is temporarily unavailable due to ongoing server maintenance.
