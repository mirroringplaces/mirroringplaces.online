---
title: "Map"
date: "2024-05-03"
draft: false

params:
  cssClassSuffix: "scenes"

---

<div id="mapFolder">

  <img src="/images/Mirroring_map32.png" id="map">

  <a href="{{< ref "/" >}}" class="green" id="beginning">Begyndelsen</a>

  <div id="prismaScenes">
      <a href="{{< ref "/chapters/chapter2/scene07" >}}" class="map-icon orange">
        <p class="orange" id="prisma">&#9661;</p>
      </a>
  </div>

  <div id="wellScenes">
      <a href="{{< ref "/chapters/chapter1/scene1" >}}" class="map-icon blue">
        <p id="well" class="blue">&#9737;</p>
      </a>
  </div>
  <div id="antennaScenes">
      <a href="{{< ref "/chapters/chapter3/scene13" >}}" class="map-icon yellow">
        <p id="antenna" class="yellow">&#9508;</p>
      </a>
  </div>

  <a href="{{< ref "/chapters/chapter4/scene23" >}}" class="green" id="end">
    Slutningen
  </a>

</div>

<script src="/js/map.js" type="module"></script>