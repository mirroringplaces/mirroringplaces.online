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
  <h4><a href="map-bix/chapters/cezalpina/scene1.md" class="black">I - cezalpina</a></h4>
     <h4><a href=".." class="black">II - genealogia</a></h4>
    <h4><a href=".." class="black">III - rio Bixiga</a></h4>
     <h4><a href=".." class="black">IV - Saracura</a></h4>
     <h4><a href=".." class="black">V - Portão</a></h4>
     <h4><a href=".." class="black">VII - mãe preta</a></h4>
     <h4><a href=".." class="black">VIII - chapéu</a></h4>
     <h4><a href=".." class="black">IX - Afrika</a></h4>
     <h4><a href=".." class="black">X - um ponto.</a></h4>
     <h4><a href=".." class="black">o fio</a></h4>
    </div>
</div>

<script src="/js/map.js" type="module"></script>
