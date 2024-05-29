---
title: "Map"
date: "2024-05-03"
draft: false

layout: single

params:
  cssClassSuffix: "scenes"

---

<div id="mapFolder">

  <img src="/images/Mirroring_map32.png" id="map">

  <a href="{{< ref "/" >}}" class="green" id="beginning">The Beginning</a>

  <div id="prismaScenes">
      <a href="{{< ref "/map/chapters/chapter2/scene07" >}}" class="map-icon orange">
        <p class="orange" id="prisma">&#9661;</p>
      </a>
  </div>

  <div id="wellScenes">
      <a href="{{< ref "/map/chapters/chapter1/scene1" >}}" class="map-icon blue">
        <p id="well" class="blue">&#9737;</p>
      </a>
  </div>
  <div id=antennaScenes>
      <a href="{{< ref "/map/chapters/chapter3/scene13" >}}" class="map-icon yellow">
        <p id="antenna" class="yellow">&#9747;</p>
      </a>
  </div>

  <a href="{{< ref "/map/chapters/chapter4/scene23" >}}" class="green" id="end">
    The End
  </a>

</div>

<script src="/js/map.js" type="module"></script>
