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

  <p id="beginning"><a href="{{< ref "/" >}}" >Historien</a><br><a href="{{< ref "/map/chapters/chapter4/scene23" >}}">
    Slutningen
    </a></p>

  <div id="prismaScenes">
      <a href="{{< ref "/map/chapters/chapter2/scene07" >}}" class="map-icon">
        <p class="dPink" id="prisma">&#9661;</p>
      </a>
  </div>

  <div id="wellScenes">
      <a href="{{< ref "/map/chapters/chapter1/scene1" >}}" class="map-icon">
        <p id="well" class="orange">&#9737;</p>
      </a>
  </div>
  <div id="antennaScenes">
      <a href="{{< ref "/map/chapters/chapter3/scene13" >}}" class="map-icon yellow">
          <p id="antenna" class="yellow">&#8516;</p>
      </a>
  </div>

</div>

<script src="/js/map.js" type="module"></script>
