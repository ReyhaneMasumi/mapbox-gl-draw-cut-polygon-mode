(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{29:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var o=n(5),i=n(3),a=n.n(i),r=n(14),s=n.n(r),c=(n(29),n(6)),u=n(15),l=n(16),d=n(7),p=n.n(d),f=n(9),m=(n(42),n(0)),g=n(22),h={onSetup:function(){var e=this.getSelected().filter((function(e){return"Polygon"===e.type||"MultiPolygon"===e.type})).map((function(e){return e.toGeoJSON()}));if(e.length<1)throw new Error("Please select a feature/features (Polygon or MultiPolygon) to split!");return{main:e}},toDisplayFeatures:function(e,t,n){var o=this;n(t),this.changeMode("passing_mode_polygon",(function(t){e.main.forEach((function(e,n){if(e.geometry.type===m.k.POLYGON||e.geometry.type===m.k.MULTI_POLYGON){var i=Object(g.a)(e,t),a=o.newFeature(i);a.id=e.id,o.deleteFeature(e.id),o.addFeature(a),o.fireUpdate()}else console.info("The feature is not Polygon/MultiPolygon!")}))}))},fireUpdate:function(){this.map.fire(m.j.UPDATE,{action:m.q.CHANGE_COORDINATES,features:this.getSelected().map((function(e){return e.toGeoJSON()}))})},onMouseOut:function(e){this.fireUpdate()}};h.onTouchEnd=h.onMouseUp=function(e){this.fireUpdate()};var O,y,M,j=h,v=n(23),b=(n(43),function(){function e(t){Object(u.a)(this,e);var n=this;n.draw=t.draw,n.buttons=t.buttons||[],n.onAddOrig=t.draw.onAdd,n.onRemoveOrig=t.draw.onRemove}return Object(l.a)(e,[{key:"onAdd",value:function(e){var t=this;return t.map=e,t.elContainer=t.onAddOrig(e),t.buttons.forEach((function(e){t.addButton(e)})),t.elContainer}},{key:"onRemove",value:function(e){var t=this;t.buttons.forEach((function(e){t.removeButton(e)})),t.onRemoveOrig(e)}},{key:"addButton",value:function(e){var t=document.createElement("button");t.className="mapbox-gl-draw_ctrl-draw-btn",e.classes instanceof Array&&e.classes.forEach((function(e){t.classList.add(e)})),t.addEventListener(e.on,e.action),this.elContainer.appendChild(t),e.elButton=t}},{key:"removeButton",value:function(e){e.elButton.removeEventListener(e.on,e.action),e.elButton.remove()}}]),e}());var T=function(){"unavailable"===p.a.getRTLTextPluginStatus()&&p.a.setRTLTextPlugin("https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",(function(e){e&&console.error(e)}),!0);var e=Object(i.useRef)(null);Object(i.useEffect)((function(){O=new p.a.Map({container:e.current||"",style:"https://map.ir/vector/styles/main/mapir-xyz-light-style.json",center:[51.3857,35.6102],zoom:10,pitch:0,interactive:!0,hash:!0,attributionControl:!0,customAttribution:"\xa9 Map \xa9 Openstreetmap",transformRequest:function(e){return{url:e,headers:{"x-api-key":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiZWU0YWU4OTk4OTA3MmQ3OTFmMjQ4ZDE5N2VhZTgwZWU2NTUyYjhlYjczOWI2NDdlY2YyYzIzNWRiYThiMzIzOTM5MDkzZDM0NTY2MmU3In0.eyJhdWQiOiI5NDMyIiwianRpIjoiZGJlZTRhZTg5OTg5MDcyZDc5MWYyNDhkMTk3ZWFlODBlZTY1NTJiOGViNzM5YjY0N2VjZjJjMjM1ZGJhOGIzMjM5MzkwOTNkMzQ1NjYyZTciLCJpYXQiOjE1OTA4MjU0NzIsIm5iZiI6MTU5MDgyNTQ3MiwiZXhwIjoxNTkzNDE3NDcyLCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.M_z4xJlJRuYrh8RFe9UrW89Y_XBzpPth4yk3hlT-goBm8o3x8DGCrSqgskFfmJTUD2wC2qSoVZzQKB67sm-swtD5fkxZO7C0lBCMAU92IYZwCdYehIOtZbP5L1Lfg3C6pxd0r7gQOdzcAZj9TStnKBQPK3jSvzkiHIQhb6I0sViOS_8JceSNs9ZlVelQ3gs77xM2ksWDM6vmqIndzsS-5hUd-9qdRDTLHnhdbS4_UBwNDza47Iqd5vZkBgmQ_oDZ7dVyBuMHiQFg28V6zhtsf3fijP0UhePCj4GM89g3tzYBOmuapVBobbX395FWpnNC3bYg7zDaVHcllSUYDjGc1A","Mapir-SDK":"reactjs"}}}}),y=new f.a({modes:Object(c.a)(Object(c.a)({},f.a.modes),{},{cutPolygonMode:j,passing_mode_polygon:Object(v.a)(f.a.modes.draw_polygon)}),userProperties:!0}),M=new b({draw:y,buttons:[{on:"click",action:t,classes:["split-icon"]}]}),O.once("load",(function(){O.resize(),O.addControl(M,"top-right"),y.set({type:"FeatureCollection",features:[{type:"Feature",properties:{},id:"example-id",geometry:{type:"Polygon",coordinates:[[[51.41742415918904,35.73019558439101],[51.31319413385742,35.702773908694724],[51.378997493472525,35.665562843119986],[51.45008537540798,35.67776544979942],[51.46619566741822,35.70822028156377],[51.41742415918904,35.73019558439101]]]}}]}),O.on("draw.update",(function(e){console.log(e)}))}))}),[]);var t=function(){try{var e;null===(e=y)||void 0===e||e.changeMode("cutPolygonMode")}catch(t){alert(t.message),console.error(t)}};return Object(o.jsx)("div",{className:"map-wrapper",children:Object(o.jsx)("div",{id:"map",ref:e})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),o(e),i(e),a(e),r(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(T,{})}),document.getElementById("root")),z()}},[[44,1,2]]]);
//# sourceMappingURL=main.60f49c24.chunk.js.map