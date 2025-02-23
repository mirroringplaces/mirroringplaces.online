---
title: "Map"
date: "2024-05-03"
draft: false

layout: single
type: "_default"

params:
  cssClassSuffix: "scenes"

---

<div id="mapFolder">

  <img src="/images/Mirroring_map32.png" id="map">
  <div id="prismaScenes">
      <a href="{{< ref "/map-lund/chapters/chapter2/scene07" >}}" class="map-icon">
        <p class="dPink" id="prisma">&#9661;</p>
      </a>
  </div>

  <div id="wellScenes">
      <a href="{{< ref "/map-lund/chapters/chapter1/scene1" >}}" class="map-icon">
        <p id="well" class="orange">&#9737;</p>
      </a>
  </div>
  <div id=antennaScenes>
      <a href="{{< ref "/map-lund/chapters/chapter3/scene13" >}}" class="map-icon">
        <p id="antenna" class="yellow">&#8516;</p>
      </a>
  </div>
  <div id="map_menu">
  <h4><a href="{{< ref "/" >}}" >The Beginning</a><br><a href="{{< ref "/map/chapters/chapter4/scene23" >}}">
    The End</a></h4>
    </div>
</div>

<script src="/js/map.js" type="module"></script>
