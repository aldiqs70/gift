import{j as t,E as Be,r as v,a as ee,L as Ve,f as Ie,u as He,g as Ye,M as $e,H as Xe}from"./r3f-CsHYtfc3.js";import{ab as Y,a4 as Ge,s as Oe,h as ae,aj as Ue,au as We,a as b,av as J,v as Ae,aw as be,ax as le,I as Qe,ao as G,ay as Ke,az as Ze,i as Je}from"./three-DyQ_Pgp8.js";import{u as ue,S as H,a as et,c as tt,W as ot,e as Re,f as nt,h as st,v as ze,g as E,b as rt}from"./index-eqHWLSjJ.js";import{m as fe,S as at,u as it,w as ct,c as oe,d as ve}from"./glsl-jqHpiXrq.js";import{C as lt}from"./Caption-B3SI9BoA.js";import{D as ut}from"./Dust-od4XjYF2.js";import{a as Le,m as mt}from"./BufferGeometryUtils-hBC0Wgs3.js";import{c as we,f as me}from"./noise-DYNz5Usm.js";import"./post-B2-4r2lt.js";const ft=[{form:"rect",color:"#fff3e6",intensity:2.1,position:[0,6,.5],scale:[9,5]},{form:"rect",color:"#c9d2e0",intensity:.35,position:[0,2,-7],scale:[14,6]},{form:"rect",color:"#ffffff",intensity:1.6,position:[4.5,3.5,4],scale:[3,1.2]},{form:"rect",color:"#ffffff",intensity:3.4,position:[-6,1.2,1.5],scale:[1.4,7]},{form:"rect",color:"#e9c690",intensity:2.6,position:[6,.6,.8],scale:[1.2,7]},{form:"circle",color:"#ffffff",intensity:9,position:[3,4,5],scale:.9},{form:"rect",color:"#fff8ee",intensity:.9,position:[0,1.5,7],scale:[6,2]},{form:"rect",color:"#d8a6b5",intensity:.55,position:[0,-5,1],scale:[8,3]},{form:"ring",color:"#e9c690",intensity:3.2,position:[-2.5,3.5,-5],scale:2.2}];function pt({cosmos:e}){const n=Ie("space/udf-sm.webp");n.colorSpace=Ge;const o=v.useRef(),l=v.useRef(),i=v.useMemo(()=>{const a=fe(5),m=900,u=new Float32Array(m*3);for(let r=0;r<m;r++){const c=a()*2-1,d=a()*Math.PI*2,p=Math.sqrt(1-c*c);u.set([p*Math.cos(d)*18,c*18,p*Math.sin(d)*18],r*3)}const s=new Oe;return s.setAttribute("position",new ae(u,3)),s},[]);return ee(()=>{const a=e.current;o.current&&(o.current.opacity=a,o.current.visible=a>.001),l.current&&(l.current.material.opacity=a,l.current.visible=a>.001)}),t.jsxs(t.Fragment,{children:[t.jsxs("mesh",{scale:20,children:[t.jsx("sphereGeometry",{args:[1,48,32]}),t.jsx("meshBasicMaterial",{ref:o,map:n,side:Ue,transparent:!0,opacity:0,toneMapped:!1,color:[2.2,2.2,2.2]})]}),t.jsx("points",{ref:l,geometry:i,children:t.jsx("pointsMaterial",{size:2.2,sizeAttenuation:!1,color:[6,5.6,5.2],transparent:!0,opacity:0,toneMapped:!1})})]})}function ht({cfg:e,cosmos:n}){const o=v.useRef(),l=v.useMemo(()=>new Y(e.color),[e.color]);return ee(()=>{if(!o.current)return;const i=e.intensity*(1-n.current);o.current.material.color.copy(l).multiplyScalar(i),o.current.visible=i>.001}),t.jsx(Ve,{ref:o,form:e.form,color:e.color,intensity:e.intensity,position:e.position,scale:e.scale})}function dt({cosmos:e,live:n=!1,resolution:o=512}){return t.jsxs(Be,{resolution:o,frames:n?1/0:1,background:!1,children:[t.jsx("color",{attach:"background",args:["#030406"]}),ft.map((l,i)=>t.jsx(ht,{cfg:l,cosmos:e},i)),t.jsx(pt,{cosmos:e})]})}const ne=new b;function C(e,n,o,l,i,a){const m=2*Math.PI*i/4,u=Math.max(a-2*i,0),s=Math.PI/4;ne.copy(n),ne[l]=0,ne.normalize();const r=.5*m/(m+u),c=1-ne.angleTo(e)/s;return Math.sign(ne[o])===1?c*r:u/(m+u)+r+r*(1-c)}class vt extends We{constructor(n=1,o=1,l=1,i=2,a=.1){if(i=i*2+1,a=Math.min(n/2,o/2,l/2,a),super(1,1,1,i,i,i),i===1)return;const m=this.toNonIndexed();this.index=null,this.attributes.position=m.attributes.position,this.attributes.normal=m.attributes.normal,this.attributes.uv=m.attributes.uv;const u=new b,s=new b,r=new b(n,o,l).divideScalar(2).subScalar(a),c=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,S=c.length/6,y=new b,z=.5/i;for(let P=0,x=0;P<c.length;P+=3,x+=2)switch(u.fromArray(c,P),s.copy(u),s.x-=Math.sign(s.x)*z,s.y-=Math.sign(s.y)*z,s.z-=Math.sign(s.z)*z,s.normalize(),c[P+0]=r.x*Math.sign(u.x)+s.x*a,c[P+1]=r.y*Math.sign(u.y)+s.y*a,c[P+2]=r.z*Math.sign(u.z)+s.z*a,d[P+0]=s.x,d[P+1]=s.y,d[P+2]=s.z,Math.floor(P/S)){case 0:y.set(1,0,0),p[x+0]=C(y,s,"z","y",a,l),p[x+1]=1-C(y,s,"y","z",a,o);break;case 1:y.set(-1,0,0),p[x+0]=1-C(y,s,"z","y",a,l),p[x+1]=1-C(y,s,"y","z",a,o);break;case 2:y.set(0,1,0),p[x+0]=1-C(y,s,"x","z",a,n),p[x+1]=C(y,s,"z","x",a,l);break;case 3:y.set(0,-1,0),p[x+0]=1-C(y,s,"x","z",a,n),p[x+1]=1-C(y,s,"z","x",a,l);break;case 4:y.set(0,0,1),p[x+0]=1-C(y,s,"x","y",a,n),p[x+1]=1-C(y,s,"y","x",a,o);break;case 5:y.set(0,0,-1),p[x+0]=C(y,s,"x","y",a,n),p[x+1]=1-C(y,s,"y","x",a,o);break}}}function Ce(e){const n=e()*2-1,o=e()*Math.PI*2,l=Math.sqrt(1-n*n);return new b(l*Math.cos(o),n,l*Math.sin(o))}function gt(e,n,o=.25){const l=[],i=Math.PI*(3-Math.sqrt(5));for(let a=0;a<e;a++){const m=1-a/(e-1)*2,u=Math.sqrt(1-m*m),s=i*a,r=new b(Math.cos(s)*u,m,Math.sin(s)*u);r.add(Ce(n).multiplyScalar(o)).normalize(),l.push(r)}return l}function je(e){let n=new Qe(1,e);return n.deleteAttribute("normal"),n.deleteAttribute("uv"),n=mt(n,1e-6),n}function Fe({detail:e,seed:n,scale:o,bumpiness:l,cuts:i,depth:a,radius:m,rippleFreq:u,rippleStrength:s}){const r=fe(n),c=we(n+11),d=je(e),p=d.attributes.position,S=p.count,z=gt(i,r,.35).map(_=>{const I=m[0]+r()*(m[1]-m[0]),q=a[0]+r()*(a[1]-a[0]),R=1/Math.sqrt((_.x/o[0])**2+(_.y/o[1])**2+(_.z/o[2])**2),L=_.clone().multiplyScalar(q*R+I),A=Ce(r).cross(_).normalize(),B=L.clone().add(_.clone().multiplyScalar(-1).add(A.multiplyScalar(.3+r()*.3)).normalize().multiplyScalar(I));return{centre:L,R:I,impact:B,freq:u[0]+r()*(u[1]-u[0]),strength:s*(.35+r()*.65)}}),P=new Float32Array(S),x=new Float32Array(S*2),g=new b,k=new b;for(let _=0;_<S;_++){g.fromBufferAttribute(p,_);const I=g.clone().normalize(),q=1+l*me(c,I.x*1.4,I.y*1.4,I.z*1.4,4)+l*.25*me(c,I.x*5+9,I.y*5,I.z*5,3);g.set(I.x*o[0]*q,I.y*o[1]*q,I.z*o[2]*q);let R=-1;for(let L=0;L<2;L++)for(let A=0;A<z.length;A++){const B=z[A];k.subVectors(g,B.centre);const F=k.length();F<B.R&&(g.copy(B.centre).add(k.multiplyScalar(B.R/F)),R=A)}if(R>=0){const L=z[R],A=g.distanceTo(L.impact);P[_]=1,x[_*2]=A*L.freq,x[_*2+1]=L.strength*Math.exp(-A*1.1)}p.setXYZ(_,g.x,g.y,g.z)}return d.setAttribute("aFacet",new ae(P,1)),d.setAttribute("aRipple",new ae(x,2)),d.computeVertexNormals(),d}function De({detail:e,seed:n,scale:o,noiseAmp:l,flattenTop:i=0}){const a=we(n),m=je(e),u=m.attributes.position,s=new b;for(let r=0;r<u.count;r++){s.fromBufferAttribute(u,r);const c=1+l*me(a,s.x*.9,s.y*.9,s.z*.9,3);let d=s.y*o[1]*c;i>0&&d>0&&(d*=1-i*Math.pow(Math.max(0,s.y),.6)),u.setXYZ(r,s.x*o[0]*c,d,s.z*o[2]*c)}return m.computeVertexNormals(),m}function Te({detail:e,seed:n,scale:o,amp:l}){const i=we(n),a=je(e),m=a.attributes.position,u=new b;for(let s=0;s<m.count;s++){u.fromBufferAttribute(m,s);const r=1+l*me(i,u.x*1.6,u.y*1.6,u.z*1.6,5)+l*.3*Math.abs(i(u.x*7,u.y*7,u.z*7));let c=u.y*o[1]*r;c<0&&(c*=.55),m.setXYZ(s,u.x*o[0]*r,c,u.z*o[2]*r)}return a.computeVertexNormals(),a}function xt(e="high"){return Fe({detail:e==="high"?90:60,seed:23,scale:[1.3,.9,1.04],bumpiness:.1,cuts:46,depth:[.74,.92],radius:[.7,1.6],rippleFreq:[34,62],rippleStrength:1})}function bt(e="high"){return Fe({detail:e==="high"?64:44,seed:5,scale:[1.12,.94,1],bumpiness:.16,cuts:30,depth:[.76,.94],radius:[.8,1.8],rippleFreq:[14,24],rippleStrength:.35})}function yt(e,{r:n,len:o,tip:l}){const a=o*.45,m=e()*Math.PI,u=Array.from({length:6},()=>n*(.82+e()*.36)),s=(k,_=1)=>u.map((I,q)=>{const R=m+q/6*Math.PI*2;return new b(Math.cos(R)*I*_,k,Math.sin(R)*I*_)}),r=s(-a,1),c=s(o,1),d=new b((e()-.5)*n*.35,o+l,(e()-.5)*n*.35),p=[],S=[],y=[],z=[],P=o+l+a,x=(k,_)=>{p.push(k.x,k.y,k.z),S.push(k.y),y.push(_),z.push((k.y+a)/P)};for(let k=0;k<6;k++){const _=(k+1)%6;x(r[k],1),x(c[k],1),x(c[_],1),x(r[k],1),x(c[_],1),x(r[_],1),x(c[k],0),x(d,0),x(c[_],0)}const g=new Oe;return g.setAttribute("position",new le(p,3)),g.setAttribute("aAxis",new le(S,1)),g.setAttribute("aPrism",new le(y,1)),g.setAttribute("aTip",new le(z,1)),g}function wt(e="high"){const n=fe(31),o=Te({detail:e==="high"?40:28,seed:4,scale:[1.55,.62,1.2],amp:.22}),l=[],i=new b(0,1,0),a=19;for(let u=0;u<a;u++){const s=n()*Math.PI*2,r=Math.sqrt(n())*.78,c=Math.cos(s)*r*1.3,d=Math.sin(s)*r*1,p=1-r,S=.28+.18*p,y=new b(c*.55+(n()-.5)*.45,1,d*.55+(n()-.5)*.45).normalize(),z=u<3,P=z?.2+n()*.07:.07+n()*.11*(.5+p),x=z?.75+n()*.35:.2+n()*.55*(.4+p),g=P*(1.35+n()*.4),k=yt(n,{r:P,len:x,tip:g}),_=new J().setFromUnitVectors(i,y),I=new Ae().compose(new b(c,S,d),_,new b(1,1,1));k.applyMatrix4(I),l.push(k)}const m=Le(l);return m.computeVertexNormals(),{crystals:m,matrix:o}}function jt(e="high"){const n=fe(77),o=e==="high"?3:2,l=[],i=(r,c,d)=>{const p=new vt(r,r,r,o,r*.025),S=p.attributes.position,y=p.attributes.normal,z=new Float32Array(S.count*3),P=new Float32Array(S.count*3);for(let g=0;g<S.count;g++)z[g*3]=S.getX(g),z[g*3+1]=S.getY(g),z[g*3+2]=S.getZ(g),P[g*3]=y.getX(g),P[g*3+1]=y.getY(g),P[g*3+2]=y.getZ(g);p.setAttribute("aLocal",new ae(z,3)),p.setAttribute("aLocalN",new ae(P,3)),p.deleteAttribute("uv");const x=new Ae().compose(new b(...c),new J().setFromEuler(new be(...d)),new b(1,1,1));p.applyMatrix4(x),l.push(p)},a=[.32,.55,.12];i(1,[0,.12,0],a);const m=()=>a.map(r=>r+(n()-.5)*.7);i(.62,[.62,-.12,.38],m()),i(.5,[-.6,-.08,.32],m()),i(.44,[.12,-.2,-.64],m()),i(.34,[-.38,.62,-.28],m()),i(.28,[.58,.5,-.22],m()),i(.22,[-.82,.16,-.32],m()),i(.18,[.3,.66,.46],m()),i(.16,[.9,.18,-.1],m());const u=Le(l),s=Te({detail:e==="high"?32:22,seed:9,scale:[1,.34,.85],amp:.2});return s.translate(0,-.4,0),{cubes:u,matrix:s}}function Mt(e="high"){return De({detail:e==="high"?56:40,seed:3,scale:[1.3,.66,.98],noiseAmp:.07})}function _t(e="high"){return De({detail:e==="high"?56:40,seed:12,scale:[1.3,.56,1],noiseAmp:.07,flattenTop:.3})}function kt(e,n){const o=new b(...n).normalize();let l=-1/0;const i={position:new b,normal:new b(0,1,0)},a=new b;return e.forEach(m=>{const u=m.attributes.position,s=m.attributes.normal;for(let r=0;r<u.count;r+=3){a.fromBufferAttribute(u,r);const c=a.dot(o)+a.length()*.15;c>l&&(l=c,i.position.copy(a),s&&i.normal.fromBufferAttribute(s,r).normalize())}}),i}const Pt=`
// Bump mapping from an analytic height, using screen-space derivatives.
vec3 bumpNormal(vec3 surfPos, vec3 surfNorm, float h, float faceDir) {
  vec3 sx = dFdx(surfPos);
  vec3 sy = dFdy(surfPos);
  vec3 r1 = cross(sy, surfNorm);
  vec3 r2 = cross(surfNorm, sx);
  float det = dot(sx, r1) * faceDir;
  vec2 dh = vec2(dFdx(h), dFdy(h));
  vec3 grad = sign(det) * (dh.x * r1 + dh.y * r2);
  return normalize(abs(det) * surfNorm - grad);
}
`,ye={uKeyDirView:{value:new b(.3,.8,.5).normalize()},uTime:{value:0}};function U(e,n,o){return e.onBeforeCompile=l=>{Object.assign(l.uniforms,ye,o.uniforms||{}),l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vObjPos;
${o.vertexHead||""}`).replace("#include <begin_vertex>",`#include <begin_vertex>
vObjPos = position;
${o.vertexBody||""}`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uKeyDirView;
uniform float uTime;
varying vec3 vObjPos;
${at}
${Pt}
${o.fragmentHead||""}`).replace("#include <color_fragment>",`#include <color_fragment>
${o.color||""}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
${o.roughness||""}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
${o.normal||""}`).replace("#include <lights_physical_fragment>",`#include <lights_physical_fragment>
${o.afterMaterial||""}`).replace("#include <opaque_fragment>",`${o.outgoing||""}
#include <opaque_fragment>`)},e.customProgramCacheKey=()=>n,e}function Nt(){const e=new G({color:new Y("#050507"),roughness:.04,metalness:0,ior:1.49,specularIntensity:1,sheen:.5,sheenColor:new Y("#a8844f"),sheenRoughness:.28,envMapIntensity:1.5});return U(e,"obsidian",{vertexHead:"attribute vec2 aRipple; attribute float aFacet; varying vec2 vRipple; varying float vFacet;",vertexBody:"vRipple = aRipple; vFacet = aFacet;",fragmentHead:"varying vec2 vRipple; varying float vFacet;",color:`
      float skin = 1.0 - smoothstep(0.15, 0.85, vFacet);
      float skinN = fbm(vObjPos * 3.2);
      vec3 skinCol = vec3(0.016, 0.0155, 0.015) * (0.75 + 0.5 * skinN);
      // faint flow banding, visible only as a whisper in the glass
      float band = sin(vObjPos.y * 34.0 + fbm(vObjPos * 1.7) * 6.0) * 0.5 + 0.5;
      diffuseColor.rgb = mix(diffuseColor.rgb * (0.85 + 0.3 * band), skinCol, skin);
    `,roughness:`
      float skinR = 0.44 + 0.08 * fbm3(vObjPos * 3.0);
      float glassR = 0.022 + 0.03 * smoothstep(0.1, 0.9, fbm(vObjPos * 2.3 + 4.0));
      roughnessFactor = mix(glassR, skinR, skin);
    `,afterMaterial:`
      // the golden sheen lives in the glass, not in the weathered skin
      material.sheenColor *= (1.0 - skin) * (0.35 + 0.65 * smoothstep(-0.2, 0.6, fbm(vObjPos * 1.6 + 2.0)));
    `,normal:`
      {
        float ph = vRipple.x;
        float fw = fwidth(ph);
        float fade = 1.0 - smoothstep(0.7, 2.2, fw);
        float h = sin(ph + 0.6 * sin(ph * 0.31)) * vRipple.y * fade * 0.0016;
        float sk = snoise(vObjPos * 11.0) * 0.0022 + snoise(vObjPos * 4.0) * 0.004;
        sk *= 1.0 - smoothstep(0.25, 0.9, length(fwidth(vObjPos * 11.0)));
        h += skin * sk;
        normal = bumpNormal(-vViewPosition, normal, h, faceDirection);
      }
    `})}function zt(){const e=new G({color:new Y("#efc3cf"),roughness:.2,metalness:0,transmission:.42,thickness:2.2,ior:1.544,attenuationColor:new Y("#f1b9c9"),attenuationDistance:2.4,specularIntensity:1,sheen:.4,sheenColor:new Y("#ffe3ea"),sheenRoughness:.6,envMapIntensity:1.2});return U(e,"rose",{vertexHead:"attribute vec2 aRipple; attribute float aFacet; varying float vFacet; varying vec2 vRipple;",vertexBody:"vFacet = aFacet; vRipple = aRipple;",fragmentHead:"varying float vFacet; varying vec2 vRipple;",color:`
      float skin = 1.0 - smoothstep(0.2, 0.8, vFacet);
      float cloud = fbm3(vObjPos * 1.8);
      diffuseColor.rgb *= mix(vec3(1.0), vec3(0.9, 0.78, 0.83), smoothstep(-0.3, 0.6, cloud));
      // the weathered skin is paler and chalkier
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.93, 0.82, 0.85), skin * 0.55);
    `,roughness:`
      roughnessFactor = mix(0.1 + 0.08 * fbm3(vObjPos * 3.0), 0.48 + 0.08 * fbm3(vObjPos * 5.0), skin);
    `,afterMaterial:`
      material.transmission *= 1.0 - skin * 0.6;
    `,normal:`
      {
        float fade = 1.0 - smoothstep(0.7, 2.2, fwidth(vRipple.x));
        float h = sin(vRipple.x) * vRipple.y * fade * 0.0016;
        float sk = snoise(vObjPos * 10.0) * 0.0025 + snoise(vObjPos * 4.0) * 0.003;
        sk *= 1.0 - smoothstep(0.25, 0.9, length(fwidth(vObjPos * 10.0)));
        h += skin * sk;
        normal = bumpNormal(-vViewPosition, normal, h, faceDirection);
      }
    `})}function St(){const e=new G({color:new Y("#ffffff"),roughness:.05,metalness:0,transmission:.62,thickness:.3,ior:1.544,attenuationColor:new Y("#c39be6"),attenuationDistance:1.1,specularIntensity:1,envMapIntensity:1.4});return U(e,"amethyst",{vertexHead:"attribute float aAxis; attribute float aPrism; attribute float aTip; varying float vAxis; varying float vPrism; varying float vTip;",vertexBody:"vAxis = aAxis; vPrism = aPrism; vTip = aTip;",fragmentHead:"varying float vAxis; varying float vPrism; varying float vTip;",color:`
      // colour zoning: pale at the base, deepest violet at the tips
      vec3 pale = vec3(0.72, 0.62, 0.82);
      vec3 deep = vec3(0.34, 0.1, 0.62);
      float z = smoothstep(0.25, 0.95, vTip) * (0.8 + 0.2 * snoise(vObjPos * 3.0));
      diffuseColor.rgb = mix(pale, deep, z);
    `,roughness:`
      roughnessFactor = 0.035 + 0.05 * smoothstep(0.3, 1.0, snoise(vObjPos * 5.0));
    `,normal:`
      {
        // horizontal growth striations on the prism faces — a quartz signature
        float ph = vAxis * 210.0 + snoise(vObjPos * 6.0) * 2.0;
        float fade = 1.0 - smoothstep(0.6, 2.0, fwidth(ph));
        float h = sin(ph) * 0.00042 * vPrism * fade;
        normal = bumpNormal(-vViewPosition, normal, h, faceDirection);
      }
    `})}function It(){const e=new G({color:"#8a8a8f",roughness:.82,metalness:0,envMapIntensity:.7});return U(e,"geode",{color:`
      float n = fbm3(vObjPos * 2.5);
      float top = smoothstep(-0.1, 0.25, vObjPos.y + n * 0.12);
      vec3 basalt = vec3(0.03, 0.027, 0.026) * (0.8 + 0.5 * fbm3(vObjPos * 5.0));
      vec3 agate = mix(vec3(0.055, 0.052, 0.062), vec3(0.11, 0.1, 0.12), fbm3(vObjPos * 4.0) * 0.5 + 0.5);
      // druzy lining: a thin band of chalcedony between rock and crystals
      float rim = smoothstep(0.02, 0.0, abs(vObjPos.y + n * 0.12 - 0.05) - 0.04);
      diffuseColor.rgb = mix(basalt, agate, top);
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.2, 0.17, 0.24), rim * 0.6);
    `,roughness:`
      float spark = smoothstep(0.6, 0.9, snoise(vObjPos * 22.0));
      roughnessFactor = mix(0.86, 0.3, spark * top);
    `,normal:`
      {
        float h = snoise(vObjPos * 14.0) * 0.006 + snoise(vObjPos * 32.0) * 0.0015 * (1.0 - smoothstep(0.3, 1.0, length(fwidth(vObjPos * 32.0))));
        normal = bumpNormal(-vViewPosition, normal, h, faceDirection);
      }
    `})}function Ot(){const e=new G({color:new Y("#dcc285"),metalness:1,roughness:.24,iridescence:.06,iridescenceIOR:1.6,iridescenceThicknessRange:[180,420],envMapIntensity:1.9});return U(e,"pyrite",{vertexHead:"attribute vec3 aLocal; attribute vec3 aLocalN; varying vec3 vLocal; varying vec3 vLocalN;",vertexBody:"vLocal = aLocal; vLocalN = aLocalN;",fragmentHead:"varying vec3 vLocal; varying vec3 vLocalN;",color:`
      float tarnish = smoothstep(0.15, 0.8, fbm3(vObjPos * 1.4 + 2.0));
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.6, 0.48, 0.26), tarnish * 0.35);
    `,roughness:`
      roughnessFactor = 0.2 + 0.14 * tarnish + 0.04 * snoise(vObjPos * 5.0);
    `,normal:`
      {
        vec3 an = abs(vLocalN);
        float c;
        if (an.x > an.y && an.x > an.z) c = vLocal.y;
        else if (an.y > an.z) c = vLocal.z;
        else c = vLocal.x;
        float ph = c * 150.0 + snoise(vLocal * 2.5) * 0.5;
        float fade = 1.0 - smoothstep(0.5, 1.6, fwidth(ph));
        float h = (sin(ph) + 0.3 * sin(ph * 2.3 + 1.0)) * 0.00032 * fade;
        normal = bumpNormal(-vViewPosition, normal, h, faceDirection);
      }
    `})}function At(){const e=new G({color:"#3b3a3a",roughness:.9,envMapIntensity:.6});return U(e,"shale",{color:`
      float layers = sin(vObjPos.y * 60.0 + fbm(vObjPos * 3.0) * 4.0) * 0.5 + 0.5;
      diffuseColor.rgb = vec3(0.07, 0.068, 0.066) * (0.7 + 0.5 * layers) * (0.8 + 0.4 * fbm(vObjPos * 6.0));
    `,normal:`
      {
        float h = snoise(vObjPos * 22.0) * 0.004 + sin(vObjPos.y * 60.0) * 0.0008;
        normal = bumpNormal(-vViewPosition, normal, h, faceDirection);
      }
    `})}function Rt(){const e=new G({color:"#ffffff",roughness:.2,metalness:0,clearcoat:1,clearcoatRoughness:.035,envMapIntensity:1.1});return U(e,"malachite",{color:`
      vec3 p = vObjPos * 1.15;
      vec3 w = p + 0.12 * vec3(fbm3(p * 1.1), fbm3(p * 1.1 + 7.1), fbm3(p * 1.1 + 3.3));
      float d1 = length(w - vec3(0.55, 0.15, 0.2));
      float d2 = length(w - vec3(-0.55, -0.1, -0.15));
      float d3 = length(w - vec3(0.05, 0.4, -0.55));
      float k = 0.35;
      float h1 = clamp(0.5 + 0.5 * (d2 - d1) / k, 0.0, 1.0);
      float d = mix(d2, d1, h1) - k * h1 * (1.0 - h1);
      float h2 = clamp(0.5 + 0.5 * (d3 - d) / k, 0.0, 1.0);
      d = mix(d3, d, h2) - k * h2 * (1.0 - h2);
      float b = d * 26.0 + fbm3(w * 3.0) * 0.35;
      float t = fract(b);
      float wide = fract(b * 0.19);
      vec3 dark = vec3(0.0015, 0.03, 0.013);
      vec3 mid = vec3(0.008, 0.15, 0.055);
      vec3 light = vec3(0.03, 0.4, 0.14);
      vec3 col = mix(light, mid, smoothstep(0.0, 0.55, t));
      col = mix(col, dark, smoothstep(0.62, 0.9, t));
      col = mix(col, dark * 0.6, smoothstep(0.92, 0.985, t) * (1.0 - smoothstep(0.985, 1.0, t)));
      col *= 0.8 + 0.35 * smoothstep(0.2, 0.8, wide);
      diffuseColor.rgb = col;
    `,roughness:`
      roughnessFactor = 0.18 + 0.06 * snoise(vObjPos * 8.0);
    `})}function Lt(){const e=new G({color:"#ffffff",roughness:.3,metalness:0,clearcoat:.8,clearcoatRoughness:.08,envMapIntensity:.9});return U(e,"labradorite",{uniforms:{uLamella:{value:new b(.15,.75,.65).normalize()}},vertexHead:"uniform vec3 uLamella; varying vec3 vLamN;",vertexBody:"vLamN = normalize(normalMatrix * uLamella);",fragmentHead:"varying vec3 vLamN;",color:`
      float speck = smoothstep(0.55, 0.85, snoise(vObjPos * 14.0));
      float streak = smoothstep(0.65, 0.95, snoise(vec3(vObjPos.x * 4.0, vObjPos.y * 40.0, vObjPos.z * 4.0) + fbm(vObjPos * 2.0)));
      vec3 base = vec3(0.07, 0.078, 0.074) * (0.8 + 0.45 * fbm3(vObjPos * 2.5));
      base = mix(base, vec3(0.15, 0.155, 0.145), speck * 0.6);
      base = mix(base, vec3(0.008, 0.009, 0.009), streak * 0.8);
      diffuseColor.rgb = base;
    `,outgoing:`
      {
        // labradorescence: light interfering between thin inner layers.
        // It appears in broad sheets, only when those layers face you.
        vec3 V = normalize(vViewPosition);
        vec3 Ln = normalize(vLamN);
        vec3 H = normalize(V + uKeyDirView);
        float align = max(dot(Ln, H), 0.0);
        float facing = max(dot(Ln, V), 0.0);
        float lobe = pow(align, 6.0) * 0.85 + pow(facing, 5.0) * 0.35;
        float sheet = smoothstep(-0.25, 0.35, fbm3(vObjPos * 0.7 + 1.7));
        float lam = 0.85 + 0.15 * sin(dot(vObjPos, vec3(0.25, 0.15, 1.0)) * 52.0 + snoise(vObjPos * 2.0) * 3.0);
        float hue = clamp(0.25 + 0.55 * align + 0.25 * fbm3(vObjPos * 0.8 + 5.0), 0.0, 1.0);
        vec3 blue = vec3(0.02, 0.1, 0.46);
        vec3 teal = vec3(0.02, 0.3, 0.34);
        vec3 gold = vec3(0.4, 0.34, 0.06);
        vec3 flash = mix(blue, teal, smoothstep(0.15, 0.5, hue));
        flash = mix(flash, gold, smoothstep(0.62, 0.95, hue));
        outgoingLight += flash * lobe * sheet * lam * 1.9;
      }
    `})}const Ct={obsidian:e=>({size:1.16,parts:[{geometry:xt(e),material:Nt()}]}),amethyst:e=>{const{crystals:n,matrix:o}=wt(e);return{size:1.22,parts:[{geometry:o,material:It()},{geometry:n,material:St()}]}},rose:e=>({size:1.08,parts:[{geometry:bt(e),material:zt()}]}),pyrite:e=>{const{cubes:n,matrix:o}=jt(e);return{size:1.16,parts:[{geometry:o,material:At()},{geometry:n,material:Ot()}]}},malachite:e=>({size:1.12,parts:[{geometry:Mt(e),material:Rt()}]}),labradorite:e=>({size:1.14,parts:[{geometry:_t(e),material:Lt()}]})},ge=new Map;function Ee(e,n){const o=`${e}:${n}`;if(ge.has(o))return ge.get(o);const l=Ct[e](n),i=new Ke;l.parts.forEach(r=>{r.geometry.computeBoundingBox(),i.union(r.geometry.boundingBox)});const a=i.getBoundingSphere(new Ze),m=l.size/a.radius,u=a.center.clone().multiplyScalar(-m),s={...l,scale:m,offset:u};return ge.set(o,s),s}function Ft(e,n){const o=()=>Ee(e,n);"requestIdleCallback"in window?window.requestIdleCallback(o,{timeout:1500}):setTimeout(o,200)}const se=["I","II","III","IV","V","VI","VII","VIII"],re=1.7,xe=7.2,Z=5.4,Se=new b(2.5,4,3).normalize();function Dt({fade:e}){const n=v.useMemo(()=>new Je({depthWrite:!1,uniforms:{uFade:{value:0},uAspect:{value:1.6}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
          varying vec2 vUv; uniform float uFade;
          void main() {
            vec2 p = vUv - vec2(0.5, 0.56);
            p.x *= 1.7;
            float r = length(p);
            vec3 col = mix(vec3(0.013, 0.015, 0.021), vec3(0.006, 0.008, 0.012), smoothstep(0.0, 0.55, r));
            col += vec3(0.02, 0.015, 0.01) * exp(-r * r * 16.0);
            col *= 1.0 - smoothstep(0.35, 0.75, r) * 0.6;
            gl_FragColor = vec4(col * (1.0 - uFade), 1.0);
          }
        `}),[]);return ee(()=>{n.uniforms.uFade.value=e.current}),t.jsx("mesh",{position:[0,.5,-6],material:n,children:t.jsx("planeGeometry",{args:[34,20]})})}function Tt({quality:e,fade:n}){const o=v.useRef();return ee(()=>{o.current&&(o.current.visible=n.current<.98),o.current?.material?.color&&o.current.material.color.setScalar(.055*(1-n.current))}),e!=="high"?t.jsx(Ye,{position:[0,-1.5,0],opacity:.55,scale:7,blur:2.6,far:2.6,resolution:512,color:"#000000"}):t.jsxs("mesh",{ref:o,"rotation-x":-Math.PI/2,position:[0,-1.5,0],children:[t.jsx("planeGeometry",{args:[30,30]}),t.jsx($e,{blur:[420,120],resolution:1024,mixBlur:1,mixStrength:2.2,mixContrast:1,roughness:1,depthScale:1.1,minDepthThreshold:.4,maxDepthThreshold:1.3,color:"#0e0f12",metalness:.6,mirror:.65})]})}function Et({index:e,data:n,position:o,normal:l,open:i,onToggle:a,visible:m}){const u=v.useRef(),s=v.useRef(),r=v.useMemo(()=>({p:new b,n:new b,c:new b,ndc:new b}),[]);return ee(({camera:c})=>{if(!u.current||!s.current)return;u.current.getWorldPosition(r.p),r.n.copy(l).transformDirection(u.current.matrixWorld),r.c.subVectors(c.position,r.p).normalize();const d=r.n.dot(r.c),p=m&&(d>.18||i);s.current.dataset.hidden=p?"false":"true",r.ndc.copy(r.p).project(c),s.current.dataset.side=r.ndc.x>.15?"left":"right"}),t.jsx("group",{ref:u,position:o,children:t.jsx(Xe,{center:!0,zIndexRange:[8,2],style:{pointerEvents:"none"},children:t.jsxs("div",{ref:s,className:`hotspot ${i?"is-open":""}`,"data-hidden":"true",children:[t.jsx("button",{className:"hotspot__dot",onClick:c=>{c.stopPropagation(),a(e)},"aria-expanded":i,"aria-label":n.title,children:t.jsx("span",{})}),t.jsxs("div",{className:"hotspot__card",role:"dialog","aria-hidden":!i,children:[t.jsx("p",{className:"hotspot__title",children:n.title}),t.jsx("p",{className:"hotspot__text",children:n.text}),t.jsx("button",{className:"hotspot__close",onClick:()=>a(null),"aria-label":"Close",children:t.jsx(Re,{})})]})]})})})}function qt({stone:e,mode:n,quality:o,onGone:l,showHotspots:i,openHotspot:a,setOpenHotspot:m}){const u=v.useRef(),s=v.useMemo(()=>Ee(e.id,o),[e.id,o]),r=v.useMemo(()=>e.hotspots.map(c=>kt(s.parts.map(d=>d.geometry),c.dir)),[s,e]);return v.useLayoutEffect(()=>{const c=u.current;if(!c)return;const d=n==="enter-right"?1:n==="enter-left"?-1:0;if(n.startsWith("enter"))E.fromTo(c.position,{x:3.4*d,y:.2},{x:0,y:0,duration:1.35,ease:"power3.out"}),E.fromTo(c.scale,{x:.45,y:.45,z:.45},{x:1,y:1,z:1,duration:1.35,ease:"power3.out"}),E.fromTo(c.rotation,{y:-1.4*d},{y:0,duration:1.6,ease:"power3.out"});else if(n.startsWith("exit")){const p=n==="exit-left"?-1:1;E.to(c.position,{x:3.4*p,y:-.15,duration:1,ease:"power3.in"}),E.to(c.scale,{x:.4,y:.4,z:.4,duration:1,ease:"power3.in"}),E.to(c.rotation,{y:1.2*p,duration:1,ease:"power2.in",onComplete:l})}},[n]),t.jsx("group",{ref:u,children:t.jsxs("group",{scale:s.scale,position:s.offset,children:[s.parts.map((c,d)=>t.jsx("mesh",{geometry:c.geometry,material:c.material,castShadow:!0},d)),i&&e.hotspots.map((c,d)=>t.jsx(Et,{index:d,data:c,position:r[d].position,normal:r[d].normal,open:a===d,onToggle:m,visible:!0},`${e.id}-${d}`))]})})}function Kt(){const e=ue(f=>f.quality),n=ue(f=>f.reducedMotion),{camera:o,gl:l}=He(),[i,a]=v.useState(0),[m,u]=v.useState([{id:H[0].id,key:"first",mode:"present"}]),[s,r]=v.useState(!1),[c,d]=v.useState(!1),[p,S]=v.useState(0),[y,z]=v.useState(null),[P,x]=v.useState(!1),[g,k]=v.useState(!1),[_,I]=v.useState(!1),q=v.useRef(0),R=v.useRef(0),L=v.useRef(1),A=v.useRef(),B=v.useRef(),F=v.useRef({theta:.06,dist:6.6,targetDist:Z,lookY:0,locked:!0}),$=v.useRef({dragging:!1,accX:0,accY:0,velX:0,velY:0,last:0,auto:0,boost:0,enabled:!1}),pe=v.useRef(!1),ie=v.useRef(0);ie.current=i;const W=v.useRef([]),Me=v.useRef(!1),_e=v.useRef(null);_e.current=y;const O=H[i];v.useEffect(()=>{et.getState().set({bloom:.42,threshold:.86,smoothing:.2,vignette:.62,dof:null})},[]),v.useEffect(()=>{H.slice(1).forEach(h=>Ft(h.id,e));const f=setTimeout(()=>{["space/arp273.webp","space/m51.webp","space/pillars.webp","space/udf.webp"].forEach(h=>Ie.preload(h))},4e3);return()=>clearTimeout(f)},[e]);const ke=it({outro:async()=>{Me.current=!0,W.current.forEach(clearTimeout),W.current=[],$.current.enabled=!1,d(!1),r(!1),z(null),k(!1),ie.current!==0&&(Pe(0,!0),await new Promise(w=>setTimeout(w,1300))),I(!0),F.current.locked=!0;const f=E.timeline();f.to(q,{current:1,duration:3.2,ease:"power2.inOut"},0).to(R,{current:1,duration:2.4,ease:"power2.inOut"},0).to(L,{current:0,duration:1.5},0).to(F.current,{dist:1.62,theta:.04,lookY:0,duration:4,ease:"power3.inOut"},.2).to($.current,{auto:.05,duration:3},0);const h=A.current.quaternion.clone(),j=new J().setFromEuler(new be(-.55,.35,0)),M={t:0};f.to(M,{t:1,duration:3.2,ease:"power2.inOut",onUpdate:()=>A.current.quaternion.slerpQuaternions(h,j,M.t)},0),await f.then(),await ze.toBlack(.9)}});v.useEffect(()=>{let f=!1;const h=F.current,j=$.current;return(async()=>{if(await ct(),f||Me.current)return;ke==="cinematic"?(h.theta=1.5,h.dist=2.5,j.boost=3.6,A.current.quaternion.identity(),ze.clear(.9,.05),E.to(h,{theta:.06,dist:Z,duration:n?.01:3.6,ease:"power3.inOut",delay:.3}),E.to(j,{boost:0,duration:4.2,ease:"power2.out"})):(h.theta=.1,h.dist=n?Z:6.8,E.to(h,{dist:Z,theta:.06,duration:n?.01:3.2,ease:"power2.out"})),h.targetDist=Z;const w=ke==="cinematic"?2.6:1;W.current.push(setTimeout(()=>r(!0),w*1e3)),W.current.push(setTimeout(()=>r(!1),(w+5.6)*1e3)),W.current.push(setTimeout(()=>{h.locked=!1,j.enabled=!0,d(!0),ue.getState().setIdle()},(w+6.2)*1e3))})(),()=>{f=!0,W.current.forEach(clearTimeout),W.current=[]}},[]),v.useEffect(()=>{const f=l.domElement,h=new Map;let j=0;const M=$.current,w=F.current,V=()=>{const[N,T]=[...h.values()];return Math.hypot(N.x-T.x,N.y-T.y)},Q=N=>{if(M.enabled){h.set(N.pointerId,{x:N.clientX,y:N.clientY});try{f.setPointerCapture(N.pointerId)}catch{}M.dragging=!0,M.velX=M.velY=0,M.last=performance.now(),h.size===2&&(j=V()),x(!0)}},te=N=>{const T=h.get(N.pointerId);if(!T||!M.enabled)return;const he=N.clientX-T.x,ce=N.clientY-T.y;if(T.x=N.clientX,T.y=N.clientY,h.size===1)M.accX+=ce*.0058,M.accY+=he*.0058;else if(h.size===2){const de=V();j>0&&(w.targetDist=oe(w.targetDist*(j/de),re,xe)),j=de}M.last=performance.now()},K=N=>{h.delete(N.pointerId),h.size<2&&(j=0),h.size===0&&(M.dragging=!1)},X=N=>{M.enabled&&(N.preventDefault(),w.targetDist=oe(w.targetDist*Math.exp(N.deltaY*.0011),re,xe),M.last=performance.now(),x(!0))};return f.addEventListener("pointerdown",Q),window.addEventListener("pointermove",te),window.addEventListener("pointerup",K),window.addEventListener("pointercancel",K),f.addEventListener("wheel",X,{passive:!1}),()=>{f.removeEventListener("pointerdown",Q),window.removeEventListener("pointermove",te),window.removeEventListener("pointerup",K),window.removeEventListener("pointercancel",K),f.removeEventListener("wheel",X)}},[l]);const D=v.useMemo(()=>({right:new b,up:new b,q:new J,q2:new J,yAxis:new b(0,1,0)}),[]);ee((f,h)=>{const j=Math.min(h,.05),M=F.current,w=$.current,V=A.current;if(!V)return;M.locked||(M.dist=ve(M.dist,M.targetDist,5,j));const Q=f.pointer.x,te=f.pointer.y,K=oe((M.dist-re)/(Z-re));o.position.set(Q*.18*K,Math.sin(M.theta)*M.dist+.12+te*.08*K,Math.cos(M.theta)*M.dist),o.lookAt(0,M.lookY,0),D.right.set(1,0,0).applyQuaternion(o.quaternion),D.up.set(0,1,0).applyQuaternion(o.quaternion);let X=0,N=0;w.dragging?(X=w.accX,N=w.accY,w.velX=ve(w.velX,X/j,18,j),w.velY=ve(w.velY,N/j,18,j),w.accX=w.accY=0):(w.velX*=Math.exp(-3.2*j),w.velY*=Math.exp(-3.2*j),X=w.velX*j,N=w.velY*j),(X||N)&&(D.q.setFromAxisAngle(D.right,X),D.q2.setFromAxisAngle(D.up,N),V.quaternion.premultiply(D.q).premultiply(D.q2));const T=(performance.now()-w.last)/1e3,he=w.dragging||_e.current!==null?0:oe((T-2.5)/2.5),ce=(.16+w.auto)*he+w.boost;ce>0&&(D.q.setFromAxisAngle(D.yAxis,ce*j),V.quaternion.premultiply(D.q)),B.current&&(B.current.position.y=Math.sin(f.clock.elapsedTime*.7)*.035),ye.uKeyDirView.value.copy(Se).transformDirection(o.matrixWorldInverse),ye.uTime.value=f.clock.elapsedTime});function Pe(f,h=!1){if(f===ie.current||pe.current)return;pe.current=!0;const j=f>ie.current?1:-1;z(null),S(0),u(Q=>[{...Q[Q.length-1],mode:j>0?"exit-left":"exit-right"},{id:H[f].id,key:`${H[f].id}-${Date.now()}`,mode:j>0?"enter-right":"enter-left"}]),a(f),rt.chime(.7);const M=A.current.quaternion.clone(),w=new J().setFromEuler(new be(.18,0,0)),V={t:0};E.to(V,{t:1,duration:h?1:1.4,ease:"power2.inOut",onUpdate:()=>A.current&&A.current.quaternion.slerpQuaternions(M,w,V.t)}),$.current.velX=$.current.velY=0,F.current.targetDist=Z,setTimeout(()=>pe.current=!1,h?1050:1400)}const qe=f=>u(h=>h.filter(j=>j.key!==f)),Ne=f=>{F.current.targetDist=oe(F.current.targetDist*f,re,xe),$.current.last=performance.now(),x(!0)};return t.jsxs(t.Fragment,{children:[t.jsx(dt,{cosmos:q,live:_,resolution:e==="high"?512:256}),t.jsx("fog",{attach:"fog",args:["#090b10",8,19]}),t.jsx("directionalLight",{position:Se.clone().multiplyScalar(8).toArray(),intensity:1.7,color:"#fff1e0"}),t.jsx("directionalLight",{position:[-3,1.5,-4],intensity:1.4,color:"#e6c38c"}),t.jsx("directionalLight",{position:[0,-3,2],intensity:.25,color:"#d8a6b5"}),t.jsx(Dt,{fade:R}),t.jsx(Tt,{quality:e,fade:R}),t.jsx(ut,{count:e==="high"?220:110,area:[9,5,6],center:[0,.6,-1],color:"#f1d9b5",size:.03,opacity:.4,speed:.05,fade:L}),t.jsx("group",{ref:B,children:t.jsx("group",{ref:A,rotation:[.18,0,0],children:m.map(f=>{const h=H.find(j=>j.id===f.id);return t.jsx(qt,{stone:h,mode:f.mode,quality:e,onGone:()=>qe(f.key),showHotspots:c&&!f.mode.startsWith("exit"),openHotspot:y,setOpenHotspot:z},f.key)})})}),t.jsx(tt.In,{children:t.jsxs("div",{className:`within ${c?"is-ui":""}`,children:[t.jsx(lt,{text:ot,show:s,className:"within__caption"}),t.jsxs("aside",{className:"within__info interactive","aria-live":"polite",children:[t.jsxs("p",{className:"eyebrow",children:["Specimen ",se[i]," ",t.jsxs("span",{className:"within__of",children:["of ",se[H.length-1]]})]}),t.jsx("h2",{className:"within__name display",children:O.name}),t.jsx("p",{className:"within__name-ar",lang:"ar",children:O.nameAr}),t.jsx("p",{className:"within__kind",children:O.kind}),t.jsx("dl",{className:"within__specs",children:O.specs.map(([f,h])=>t.jsxs("div",{children:[t.jsx("dt",{children:f}),t.jsx("dd",{children:h})]},f))}),t.jsxs("div",{className:"within__fact",children:[t.jsx("p",{className:"within__fact-text",children:O.facts[p]},p),t.jsxs("div",{className:"within__fact-nav",children:[t.jsxs("span",{children:[String(p+1).padStart(2,"0")," / ",String(O.facts.length).padStart(2,"0")]}),t.jsxs("button",{className:"within__fact-next",onClick:()=>S(f=>(f+1)%O.facts.length),children:[p+1<O.facts.length?"Next fact":"From the start"," ",t.jsx("span",{"aria-hidden":"true",children:"→"})]})]})]})]},`info-${O.id}`),t.jsxs("aside",{className:"within__note",children:[t.jsx("p",{className:"eyebrow",children:"A little note"}),t.jsx("p",{className:"within__note-en",children:O.note}),t.jsx("p",{className:"within__note-ar",lang:"ar",children:O.noteAr})]},`note-${O.id}`),t.jsxs("div",{className:"within__mobile-head",children:[t.jsxs("p",{className:"eyebrow",children:[se[i]," / ",se[H.length-1]]}),t.jsx("h2",{className:"within__name display",children:O.name}),t.jsx("p",{className:"within__name-ar",lang:"ar",children:O.nameAr})]},`mh-${O.id}`),t.jsx("button",{className:"chip within__sheet-toggle",onClick:()=>k(!0),children:"About this stone"}),t.jsxs("div",{className:`within__sheet ${g?"is-open":""}`,role:"dialog","aria-hidden":!g,children:[t.jsx("button",{className:"icon-btn within__sheet-close",onClick:()=>k(!1),"aria-label":"Close",children:t.jsx(Re,{})}),t.jsx("p",{className:"within__kind",children:O.kind}),t.jsx("dl",{className:"within__specs",children:O.specs.map(([f,h])=>t.jsxs("div",{children:[t.jsx("dt",{children:f}),t.jsx("dd",{children:h})]},f))}),t.jsx("ol",{className:"within__facts-list",children:O.facts.map((f,h)=>t.jsx("li",{children:f},h))}),t.jsxs("div",{className:"within__sheet-note",children:[t.jsx("p",{className:"eyebrow",children:"A little note"}),t.jsx("p",{className:"within__note-en",children:O.note}),t.jsx("p",{className:"within__note-ar",lang:"ar",children:O.noteAr})]})]}),t.jsxs("div",{className:"within__zoom",children:[t.jsx("button",{className:"icon-btn",onClick:()=>Ne(.78),"aria-label":"Look closer",children:t.jsx(nt,{})}),t.jsx("button",{className:"icon-btn",onClick:()=>Ne(1.28),"aria-label":"Step back",children:t.jsx(st,{})})]}),t.jsx("p",{className:`within__hint ${P?"is-gone":""}`,children:"Drag to turn it · Scroll or pinch to look closer · Touch the gold points"}),t.jsx("nav",{className:"within__selector","aria-label":"Specimens",children:H.map((f,h)=>t.jsxs("button",{className:`within__pick ${h===i?"is-active":""}`,onClick:()=>Pe(h),"aria-current":h===i,children:[t.jsx("span",{className:"within__pick-num",children:se[h]}),t.jsx("span",{className:"within__pick-name",children:f.name})]},f.id))}),t.jsxs("button",{className:"cta within__continue",onClick:()=>ue.getState().next(),children:["Look beyond ",t.jsx("span",{className:"arrow",children:"→"})]})]})})]})}export{Kt as default};
