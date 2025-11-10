---
layout: page
title: Pseudotime
img: assets/img/sc_pseudotime_front.png
importance: 3
category: Single-cell RNA-seq
related_publications: true
---
Pseudotime inference, or differentiation trajectory analysis in scRNA-seq, is a computational method used to model the continuous progression of cells as they differentiate from one state to another, such as from stem cells to specialized cell types. By analyzing transcriptomic similarities and differences among individual cells, this approach reconstructs trajectories that are typically visualized on dimensionality reduction spaces like PCA or UMAP, providing an abstract but informative representation of cellular transitions over inferred pseudotime. It uncovers the molecular steps and regulatory programs guiding cell fate decisions, helping identify key transition states, branching points (where trajectories separate), and the genes driving these processes.

<h3>slingshot</h3>
Among the <a href="https://github.com/agitter/single-cell-pseudotime">many methods</a> available to model differentiation trajectories on single-cell RNA-seq data, <a href="https://github.com/kstreet13/slingshot">slingshot</a>, and in particular its extension <a href="https://github.com/HectorRDB/condiments">condiments</a>, which can compute separate trajectories for different conditions in the same merged object, stand out. Unlike most other methods, they elegantly build smoothed curves on UMAP coordinates (figure 1A), which are visually more intuitive than tree-like structures (e.g., Minimum Spanning Tree (MST)-based approaches, like <a href="https://github.com/Winnie09/Lamian">Lamian</a>)  (figure 1B), and avoids the overfitting tendencies observed in tools like <a href="https://cole-trapnell-lab.github.io/monocle3/">Monocle3</a> (figure 1C).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sc_pseudotime_1A.jpg" title="slingshot" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sc_pseudotime_1B.jpg" title="Lamian" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sc_pseudotime_1C.jpg" title="Monocle3" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 1: Examples of pseudotime analysis on classical monocyte differentiation to non-classical monocytes or macrophages from {% cite Varin2025.04.21.25324260 %} with three methods. A: Trajectories obtained from slingshot. B: MST structure obtained from Lamian. C: Trajectories obtained from Monocle3.
</div>

<h3>tradeSeq</h3>
Determining which genes are differentially expressed between trajectories is key in understanding the biological switches responsible for cell fate decision.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sc_pseudotime_2A.jpg" title="RightOmicsTools tradeSeq heatmap" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sc_pseudotime_2B.jpg" title="RightOmicsTools tradeSeq scatterplot" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 2: Examples of different visualizations of smoothed gene expression from tradeSeq obtained using the <a href="https://Alexis.varin.github.io/RightOmicsTools">RightOmicsTools</a> package. A: Heatmap on a single trajectory. B: Scatterplot of normalized expression and average smoothed expression on all trajectories.
</div>


You can find additional examples of slingshot and tradeSeq use in {% cite Ramon2025-bm %}.
