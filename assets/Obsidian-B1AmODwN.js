import{j as t,E as $e,r as h,a as ee,L as He,g as Ie,u as Oe,H as Ye}from"./r3f-BVCAYyAT.js";import{p as H,aI as Xe,a5 as Ae,h as ae,aW as Ge,b3 as Ue,a as b,Q as J,t as Re,b4 as be,b5 as le,I as We,o as G,ap as Qe,aq as Ke,l as Le}from"./three-RqAEyvxP.js";import{u as ue,S as $,a as Ze,c as Je,W as et,e as Fe,f as tt,h as ot,v as ze,g as E,b as nt}from"./index-BDhsqg1o.js";import{m as fe,u as st,w as rt,c as oe,d as ve}from"./math-DZ68Y0-x.js";import{C as at}from"./Caption-BPeKn8ge.js";import{S as it,D as ct}from"./Dust-y3dKgHvE.js";import{m as Ce,a as lt}from"./BufferGeometryUtils-C2tCb-yT.js";import{c as we,f as me}from"./noise-Bib0BqY9.js";import"./post-BqHT5WsL.js";const ut=[{form:"rect",color:"#fff3e6",intensity:2.1,position:[0,6,.5],scale:[9,5]},{form:"rect",color:"#c9d2e0",intensity:.35,position:[0,2,-7],scale:[14,6]},{form:"rect",color:"#ffffff",intensity:1.6,position:[4.5,3.5,4],scale:[3,1.2]},{form:"rect",color:"#ffffff",intensity:3.4,position:[-6,1.2,1.5],scale:[1.4,7]},{form:"rect",color:"#e9c690",intensity:2.6,position:[6,.6,.8],scale:[1.2,7]},{form:"circle",color:"#ffffff",intensity:9,position:[3,4,5],scale:.9},{form:"rect",color:"#fff8ee",intensity:.9,position:[0,1.5,7],scale:[6,2]},{form:"rect",color:"#d8a6b5",intensity:.55,position:[0,-5,1],scale:[8,3]},{form:"ring",color:"#e9c690",intensity:3.2,position:[-2.5,3.5,-5],scale:2.2}];function mt({cosmos:e}){const o=Ie("space/udf-sm.webp");o.colorSpace=Xe;const n=h.useRef(),c=h.useRef(),i=h.useMemo(()=>{const a=fe(5),m=900,l=new Float32Array(m*3);for(let r=0;r<m;r++){const u=a()*2-1,d=a()*Math.PI*2,p=Math.sqrt(1-u*u);l.set([p*Math.cos(d)*18,u*18,p*Math.sin(d)*18],r*3)}const s=new Ae;return s.setAttribute("position",new ae(l,3)),s},[]);return ee(()=>{const a=e.current;n.current&&(n.current.opacity=a,n.current.visible=a>.001),c.current&&(c.current.material.opacity=a,c.current.visible=a>.001)}),t.jsxs(t.Fragment,{children:[t.jsxs("mesh",{scale:20,children:[t.jsx("sphereGeometry",{args:[1,48,32]}),t.jsx("meshBasicMaterial",{ref:n,map:o,side:Ge,transparent:!0,opacity:0,toneMapped:!1,color:[2.2,2.2,2.2]})]}),t.jsx("points",{ref:c,geometry:i,children:t.jsx("pointsMaterial",{size:2.2,sizeAttenuation:!1,color:[6,5.6,5.2],transparent:!0,opacity:0,toneMapped:!1})})]})}function ft({cfg:e,cosmos:o}){const n=h.useRef(),c=h.useMemo(()=>new H(e.color),[e.color]);return ee(()=>{if(!n.current)return;const i=e.intensity*(1-o.current);n.current.material.color.copy(c).multiplyScalar(i),n.current.visible=i>.001}),t.jsx(He,{ref:n,form:e.form,color:e.color,intensity:e.intensity,position:e.position,scale:e.scale})}function pt({cosmos:e,live:o=!1,resolution:n=512}){return t.jsxs($e,{resolution:n,frames:o?1/0:1,background:!1,children:[t.jsx("color",{attach:"background",args:["#030406"]}),ut.map((c,i)=>t.jsx(ft,{cfg:c,cosmos:e},i)),t.jsx(mt,{cosmos:e})]})}const ne=new b;function F(e,o,n,c,i,a){const m=2*Math.PI*i/4,l=Math.max(a-2*i,0),s=Math.PI/4;ne.copy(o),ne[c]=0,ne.normalize();const r=.5*m/(m+l),u=1-ne.angleTo(e)/s;return Math.sign(ne[n])===1?u*r:l/(m+l)+r+r*(1-u)}class ht extends Ue{constructor(o=1,n=1,c=1,i=2,a=.1){if(i=i*2+1,a=Math.min(o/2,n/2,c/2,a),super(1,1,1,i,i,i),i===1)return;const m=this.toNonIndexed();this.index=null,this.attributes.position=m.attributes.position,this.attributes.normal=m.attributes.normal,this.attributes.uv=m.attributes.uv;const l=new b,s=new b,r=new b(o,n,c).divideScalar(2).subScalar(a),u=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,S=u.length/6,y=new b,z=.5/i;for(let P=0,x=0;P<u.length;P+=3,x+=2)switch(l.fromArray(u,P),s.copy(l),s.x-=Math.sign(s.x)*z,s.y-=Math.sign(s.y)*z,s.z-=Math.sign(s.z)*z,s.normalize(),u[P+0]=r.x*Math.sign(l.x)+s.x*a,u[P+1]=r.y*Math.sign(l.y)+s.y*a,u[P+2]=r.z*Math.sign(l.z)+s.z*a,d[P+0]=s.x,d[P+1]=s.y,d[P+2]=s.z,Math.floor(P/S)){case 0:y.set(1,0,0),p[x+0]=F(y,s,"z","y",a,c),p[x+1]=1-F(y,s,"y","z",a,n);break;case 1:y.set(-1,0,0),p[x+0]=1-F(y,s,"z","y",a,c),p[x+1]=1-F(y,s,"y","z",a,n);break;case 2:y.set(0,1,0),p[x+0]=1-F(y,s,"x","z",a,o),p[x+1]=F(y,s,"z","x",a,c);break;case 3:y.set(0,-1,0),p[x+0]=1-F(y,s,"x","z",a,o),p[x+1]=1-F(y,s,"z","x",a,c);break;case 4:y.set(0,0,1),p[x+0]=1-F(y,s,"x","y",a,o),p[x+1]=1-F(y,s,"y","x",a,n);break;case 5:y.set(0,0,-1),p[x+0]=F(y,s,"x","y",a,o),p[x+1]=1-F(y,s,"y","x",a,n);break}}}function Te(e){const o=e()*2-1,n=e()*Math.PI*2,c=Math.sqrt(1-o*o);return new b(c*Math.cos(n),o,c*Math.sin(n))}function dt(e,o,n=.25){const c=[],i=Math.PI*(3-Math.sqrt(5));for(let a=0;a<e;a++){const m=1-a/(e-1)*2,l=Math.sqrt(1-m*m),s=i*a,r=new b(Math.cos(s)*l,m,Math.sin(s)*l);r.add(Te(o).multiplyScalar(n)).normalize(),c.push(r)}return c}function je(e){let o=new We(1,e);return o.deleteAttribute("normal"),o.deleteAttribute("uv"),o=lt(o,1e-6),o}function De({detail:e,seed:o,scale:n,bumpiness:c,cuts:i,depth:a,radius:m,rippleFreq:l,rippleStrength:s}){const r=fe(o),u=we(o+11),d=je(e),p=d.attributes.position,S=p.count,z=dt(i,r,.35).map(M=>{const I=m[0]+r()*(m[1]-m[0]),q=a[0]+r()*(a[1]-a[0]),R=1/Math.sqrt((M.x/n[0])**2+(M.y/n[1])**2+(M.z/n[2])**2),L=M.clone().multiplyScalar(q*R+I),A=Te(r).cross(M).normalize(),B=L.clone().add(M.clone().multiplyScalar(-1).add(A.multiplyScalar(.3+r()*.3)).normalize().multiplyScalar(I));return{centre:L,R:I,impact:B,freq:l[0]+r()*(l[1]-l[0]),strength:s*(.35+r()*.65)}}),P=new Float32Array(S),x=new Float32Array(S*2),g=new b,k=new b;for(let M=0;M<S;M++){g.fromBufferAttribute(p,M);const I=g.clone().normalize(),q=1+c*me(u,I.x*1.4,I.y*1.4,I.z*1.4,4)+c*.25*me(u,I.x*5+9,I.y*5,I.z*5,3);g.set(I.x*n[0]*q,I.y*n[1]*q,I.z*n[2]*q);let R=-1;for(let L=0;L<2;L++)for(let A=0;A<z.length;A++){const B=z[A];k.subVectors(g,B.centre);const C=k.length();C<B.R&&(g.copy(B.centre).add(k.multiplyScalar(B.R/C)),R=A)}if(R>=0){const L=z[R],A=g.distanceTo(L.impact);P[M]=1,x[M*2]=A*L.freq,x[M*2+1]=L.strength*Math.exp(-A*1.1)}p.setXYZ(M,g.x,g.y,g.z)}return d.setAttribute("aFacet",new ae(P,1)),d.setAttribute("aRipple",new ae(x,2)),d.computeVertexNormals(),d}function Ee({detail:e,seed:o,scale:n,noiseAmp:c,flattenTop:i=0}){const a=we(o),m=je(e),l=m.attributes.position,s=new b;for(let r=0;r<l.count;r++){s.fromBufferAttribute(l,r);const u=1+c*me(a,s.x*.9,s.y*.9,s.z*.9,3);let d=s.y*n[1]*u;i>0&&d>0&&(d*=1-i*Math.pow(Math.max(0,s.y),.6)),l.setXYZ(r,s.x*n[0]*u,d,s.z*n[2]*u)}return m.computeVertexNormals(),m}function qe({detail:e,seed:o,scale:n,amp:c}){const i=we(o),a=je(e),m=a.attributes.position,l=new b;for(let s=0;s<m.count;s++){l.fromBufferAttribute(m,s);const r=1+c*me(i,l.x*1.6,l.y*1.6,l.z*1.6,5)+c*.3*Math.abs(i(l.x*7,l.y*7,l.z*7));let u=l.y*n[1]*r;u<0&&(u*=.55),m.setXYZ(s,l.x*n[0]*r,u,l.z*n[2]*r)}return a.computeVertexNormals(),a}function vt(e="high"){return De({detail:e==="high"?66:46,seed:23,scale:[1.3,.9,1.04],bumpiness:.1,cuts:46,depth:[.74,.92],radius:[.7,1.6],rippleFreq:[34,62],rippleStrength:1})}function gt(e="high"){return De({detail:e==="high"?50:36,seed:5,scale:[1.12,.94,1],bumpiness:.16,cuts:30,depth:[.76,.94],radius:[.8,1.8],rippleFreq:[14,24],rippleStrength:.35})}function xt(e,{r:o,len:n,tip:c}){const a=n*.45,m=e()*Math.PI,l=Array.from({length:6},()=>o*(.82+e()*.36)),s=(k,M=1)=>l.map((I,q)=>{const R=m+q/6*Math.PI*2;return new b(Math.cos(R)*I*M,k,Math.sin(R)*I*M)}),r=s(-a,1),u=s(n,1),d=new b((e()-.5)*o*.35,n+c,(e()-.5)*o*.35),p=[],S=[],y=[],z=[],P=n+c+a,x=(k,M)=>{p.push(k.x,k.y,k.z),S.push(k.y),y.push(M),z.push((k.y+a)/P)};for(let k=0;k<6;k++){const M=(k+1)%6;x(r[k],1),x(u[k],1),x(u[M],1),x(r[k],1),x(u[M],1),x(r[M],1),x(u[k],0),x(d,0),x(u[M],0)}const g=new Ae;return g.setAttribute("position",new le(p,3)),g.setAttribute("aAxis",new le(S,1)),g.setAttribute("aPrism",new le(y,1)),g.setAttribute("aTip",new le(z,1)),g}function bt(e="high"){const o=fe(31),n=qe({detail:e==="high"?40:28,seed:4,scale:[1.55,.62,1.2],amp:.22}),c=[],i=new b(0,1,0),a=19;for(let l=0;l<a;l++){const s=o()*Math.PI*2,r=Math.sqrt(o())*.78,u=Math.cos(s)*r*1.3,d=Math.sin(s)*r*1,p=1-r,S=.28+.18*p,y=new b(u*.55+(o()-.5)*.45,1,d*.55+(o()-.5)*.45).normalize(),z=l<3,P=z?.2+o()*.07:.07+o()*.11*(.5+p),x=z?.75+o()*.35:.2+o()*.55*(.4+p),g=P*(1.35+o()*.4),k=xt(o,{r:P,len:x,tip:g}),M=new J().setFromUnitVectors(i,y),I=new Re().compose(new b(u,S,d),M,new b(1,1,1));k.applyMatrix4(I),c.push(k)}const m=Ce(c);return m.computeVertexNormals(),{crystals:m,matrix:n}}function yt(e="high"){const o=fe(77),n=e==="high"?3:2,c=[],i=(r,u,d)=>{const p=new ht(r,r,r,n,r*.025),S=p.attributes.position,y=p.attributes.normal,z=new Float32Array(S.count*3),P=new Float32Array(S.count*3);for(let g=0;g<S.count;g++)z[g*3]=S.getX(g),z[g*3+1]=S.getY(g),z[g*3+2]=S.getZ(g),P[g*3]=y.getX(g),P[g*3+1]=y.getY(g),P[g*3+2]=y.getZ(g);p.setAttribute("aLocal",new ae(z,3)),p.setAttribute("aLocalN",new ae(P,3)),p.deleteAttribute("uv");const x=new Re().compose(new b(...u),new J().setFromEuler(new be(...d)),new b(1,1,1));p.applyMatrix4(x),c.push(p)},a=[.32,.55,.12];i(1,[0,.12,0],a);const m=()=>a.map(r=>r+(o()-.5)*.7);i(.62,[.62,-.12,.38],m()),i(.5,[-.6,-.08,.32],m()),i(.44,[.12,-.2,-.64],m()),i(.34,[-.38,.62,-.28],m()),i(.28,[.58,.5,-.22],m()),i(.22,[-.82,.16,-.32],m()),i(.18,[.3,.66,.46],m()),i(.16,[.9,.18,-.1],m());const l=Ce(c),s=qe({detail:e==="high"?32:22,seed:9,scale:[1,.34,.85],amp:.2});return s.translate(0,-.4,0),{cubes:l,matrix:s}}function wt(e="high"){return Ee({detail:e==="high"?56:40,seed:3,scale:[1.3,.66,.98],noiseAmp:.07})}function jt(e="high"){return Ee({detail:e==="high"?56:40,seed:12,scale:[1.3,.56,1],noiseAmp:.07,flattenTop:.3})}function _t(e,o){const n=new b(...o).normalize();let c=-1/0;const i={position:new b,normal:new b(0,1,0)},a=new b;return e.forEach(m=>{const l=m.attributes.position,s=m.attributes.normal;for(let r=0;r<l.count;r+=3){a.fromBufferAttribute(l,r);const u=a.dot(n)+a.length()*.15;u>c&&(c=u,i.position.copy(a),s&&i.normal.fromBufferAttribute(s,r).normalize())}}),i}const Mt=`
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
`,ye={uKeyDirView:{value:new b(.3,.8,.5).normalize()},uTime:{value:0}};function U(e,o,n){return e.onBeforeCompile=c=>{Object.assign(c.uniforms,ye,n.uniforms||{}),c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vObjPos;
${n.vertexHead||""}`).replace("#include <begin_vertex>",`#include <begin_vertex>
vObjPos = position;
${n.vertexBody||""}`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uKeyDirView;
uniform float uTime;
varying vec3 vObjPos;
${it}
${Mt}
${n.fragmentHead||""}`).replace("#include <color_fragment>",`#include <color_fragment>
${n.color||""}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
${n.roughness||""}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
${n.normal||""}`).replace("#include <lights_physical_fragment>",`#include <lights_physical_fragment>
${n.afterMaterial||""}`).replace("#include <opaque_fragment>",`${n.outgoing||""}
#include <opaque_fragment>`)},e.customProgramCacheKey=()=>o,e}function kt(){const e=new G({color:new H("#050507"),roughness:.04,metalness:0,ior:1.49,specularIntensity:1,sheen:.5,sheenColor:new H("#a8844f"),sheenRoughness:.28,envMapIntensity:1.5});return U(e,"obsidian",{vertexHead:"attribute vec2 aRipple; attribute float aFacet; varying vec2 vRipple; varying float vFacet;",vertexBody:"vRipple = aRipple; vFacet = aFacet;",fragmentHead:"varying vec2 vRipple; varying float vFacet;",color:`
      float skin = 1.0 - smoothstep(0.15, 0.85, vFacet);
      float skinN = fbm3(vObjPos * 3.2);
      vec3 skinCol = vec3(0.016, 0.0155, 0.015) * (0.75 + 0.5 * skinN);
      // faint flow banding, visible only as a whisper in the glass
      float band = sin(vObjPos.y * 34.0 + fbm3(vObjPos * 1.7) * 6.0) * 0.5 + 0.5;
      diffuseColor.rgb = mix(diffuseColor.rgb * (0.85 + 0.3 * band), skinCol, skin);
    `,roughness:`
      float skinR = 0.44 + 0.08 * fbm3(vObjPos * 3.0);
      float glassR = 0.022 + 0.03 * smoothstep(0.1, 0.9, fbm3(vObjPos * 2.3 + 4.0));
      roughnessFactor = mix(glassR, skinR, skin);
    `,afterMaterial:`
      // the golden sheen lives in the glass, not in the weathered skin
      material.sheenColor *= (1.0 - skin) * (0.35 + 0.65 * smoothstep(-0.2, 0.6, fbm3(vObjPos * 1.6 + 2.0)));
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
    `})}function Pt(){const e=new G({color:new H("#efc3cf"),roughness:.2,metalness:0,transmission:.42,thickness:2.2,ior:1.544,attenuationColor:new H("#f1b9c9"),attenuationDistance:2.4,specularIntensity:1,sheen:.4,sheenColor:new H("#ffe3ea"),sheenRoughness:.6,envMapIntensity:1.2});return U(e,"rose",{vertexHead:"attribute vec2 aRipple; attribute float aFacet; varying float vFacet; varying vec2 vRipple;",vertexBody:"vFacet = aFacet; vRipple = aRipple;",fragmentHead:"varying float vFacet; varying vec2 vRipple;",color:`
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
    `})}function Nt(){const e=new G({color:new H("#ffffff"),roughness:.05,metalness:0,transmission:.62,thickness:.3,ior:1.544,attenuationColor:new H("#c39be6"),attenuationDistance:1.1,specularIntensity:1,envMapIntensity:1.4});return U(e,"amethyst",{vertexHead:"attribute float aAxis; attribute float aPrism; attribute float aTip; varying float vAxis; varying float vPrism; varying float vTip;",vertexBody:"vAxis = aAxis; vPrism = aPrism; vTip = aTip;",fragmentHead:"varying float vAxis; varying float vPrism; varying float vTip;",color:`
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
    `})}function zt(){const e=new G({color:"#8a8a8f",roughness:.82,metalness:0,envMapIntensity:.7});return U(e,"geode",{color:`
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
    `})}function St(){const e=new G({color:new H("#dcc285"),metalness:1,roughness:.24,iridescence:.06,iridescenceIOR:1.6,iridescenceThicknessRange:[180,420],envMapIntensity:1.9});return U(e,"pyrite",{vertexHead:"attribute vec3 aLocal; attribute vec3 aLocalN; varying vec3 vLocal; varying vec3 vLocalN;",vertexBody:"vLocal = aLocal; vLocalN = aLocalN;",fragmentHead:"varying vec3 vLocal; varying vec3 vLocalN;",color:`
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
    `})}function It(){const e=new G({color:"#3b3a3a",roughness:.9,envMapIntensity:.6});return U(e,"shale",{color:`
      float layers = sin(vObjPos.y * 60.0 + fbm3(vObjPos * 3.0) * 4.0) * 0.5 + 0.5;
      diffuseColor.rgb = vec3(0.07, 0.068, 0.066) * (0.7 + 0.5 * layers) * (0.8 + 0.4 * fbm3(vObjPos * 6.0));
    `,normal:`
      {
        float h = snoise(vObjPos * 22.0) * 0.004 + sin(vObjPos.y * 60.0) * 0.0008;
        normal = bumpNormal(-vViewPosition, normal, h, faceDirection);
      }
    `})}function Ot(){const e=new G({color:"#ffffff",roughness:.2,metalness:0,clearcoat:1,clearcoatRoughness:.035,envMapIntensity:1.1});return U(e,"malachite",{color:`
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
    `})}function At(){const e=new G({color:"#ffffff",roughness:.3,metalness:0,clearcoat:.8,clearcoatRoughness:.08,envMapIntensity:.9});return U(e,"labradorite",{uniforms:{uLamella:{value:new b(.15,.75,.65).normalize()}},vertexHead:"uniform vec3 uLamella; varying vec3 vLamN;",vertexBody:"vLamN = normalize(normalMatrix * uLamella);",fragmentHead:"varying vec3 vLamN;",color:`
      float speck = smoothstep(0.55, 0.85, snoise(vObjPos * 14.0));
      float streak = smoothstep(0.65, 0.95, snoise(vec3(vObjPos.x * 4.0, vObjPos.y * 40.0, vObjPos.z * 4.0) + fbm3(vObjPos * 2.0)));
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
    `})}const Rt={obsidian:e=>({size:1.16,parts:[{geometry:vt(e),material:kt()}]}),amethyst:e=>{const{crystals:o,matrix:n}=bt(e);return{size:1.22,parts:[{geometry:n,material:zt()},{geometry:o,material:Nt()}]}},rose:e=>({size:1.08,parts:[{geometry:gt(e),material:Pt()}]}),pyrite:e=>{const{cubes:o,matrix:n}=yt(e);return{size:1.16,parts:[{geometry:n,material:It()},{geometry:o,material:St()}]}},malachite:e=>({size:1.12,parts:[{geometry:wt(e),material:Ot()}]}),labradorite:e=>({size:1.14,parts:[{geometry:jt(e),material:At()}]})},ge=new Map;function Be(e,o){const n=`${e}:${o}`;if(ge.has(n))return ge.get(n);const c=Rt[e](o),i=new Qe;c.parts.forEach(r=>{r.geometry.computeBoundingBox(),i.union(r.geometry.boundingBox)});const a=i.getBoundingSphere(new Ke),m=c.size/a.radius,l=a.center.clone().multiplyScalar(-m),s={...c,scale:m,offset:l};return ge.set(n,s),s}const se=["I","II","III","IV","V","VI","VII","VIII"],re=1.7,xe=7.2,Z=5.4,Se=new b(2.5,4,3).normalize();function Lt({fade:e}){const o=h.useMemo(()=>new Le({depthWrite:!1,uniforms:{uFade:{value:0},uAspect:{value:1.6}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
        `}),[]);return ee(()=>{o.uniforms.uFade.value=e.current}),t.jsx("mesh",{position:[0,.5,-6],material:o,children:t.jsx("planeGeometry",{args:[34,20]})})}function Ft({fade:e}){const o=h.useMemo(()=>new Le({transparent:!0,depthWrite:!1,uniforms:{uFade:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
          varying vec2 vUv; uniform float uFade;
          void main() {
            float r = length(vUv - 0.5) * 2.0;
            float shadow = exp(-r * r * 5.0) * 0.75;
            float glow = exp(-r * r * 1.4) * 0.06;
            gl_FragColor = vec4(vec3(0.05, 0.04, 0.03) * glow / max(shadow + glow, 0.001), (shadow + glow) * (1.0 - uFade));
          }
        `}),[]);return ee(()=>{o.uniforms.uFade.value=e.current}),t.jsx("mesh",{"rotation-x":-Math.PI/2,position:[0,-1.5,0],material:o,children:t.jsx("planeGeometry",{args:[5.5,5.5]})})}function Ct({index:e,data:o,position:n,normal:c,open:i,onToggle:a,visible:m}){const l=h.useRef(),s=h.useRef(),r=h.useMemo(()=>({p:new b,n:new b,c:new b,ndc:new b}),[]);return ee(({camera:u})=>{if(!l.current||!s.current)return;l.current.getWorldPosition(r.p),r.n.copy(c).transformDirection(l.current.matrixWorld),r.c.subVectors(u.position,r.p).normalize();const d=r.n.dot(r.c),p=m&&(d>.18||i);s.current.dataset.hidden=p?"false":"true",r.ndc.copy(r.p).project(u),s.current.dataset.side=r.ndc.x>.15?"left":"right"}),t.jsx("group",{ref:l,position:n,children:t.jsx(Ye,{center:!0,zIndexRange:[8,2],style:{pointerEvents:"none"},children:t.jsxs("div",{ref:s,className:`hotspot ${i?"is-open":""}`,"data-hidden":"true",children:[t.jsx("button",{className:"hotspot__dot",onClick:u=>{u.stopPropagation(),a(e)},"aria-expanded":i,"aria-label":o.title,children:t.jsx("span",{})}),t.jsxs("div",{className:"hotspot__card",role:"dialog","aria-hidden":!i,children:[t.jsx("p",{className:"hotspot__title",children:o.title}),t.jsx("p",{className:"hotspot__text",children:o.text}),t.jsx("button",{className:"hotspot__close",onClick:()=>a(null),"aria-label":"Close",children:t.jsx(Fe,{})})]})]})})})}function Tt({stone:e,mode:o,quality:n,onGone:c,showHotspots:i,openHotspot:a,setOpenHotspot:m}){const l=h.useRef(),s=h.useMemo(()=>Be(e.id,n),[e.id,n]),r=h.useMemo(()=>e.hotspots.map(u=>_t(s.parts.map(d=>d.geometry),u.dir)),[s,e]);return h.useLayoutEffect(()=>{const u=l.current;if(!u)return;const d=o==="enter-right"?1:o==="enter-left"?-1:0;if(o.startsWith("enter"))E.fromTo(u.position,{x:3.4*d,y:.2},{x:0,y:0,duration:1.35,ease:"power3.out"}),E.fromTo(u.scale,{x:.45,y:.45,z:.45},{x:1,y:1,z:1,duration:1.35,ease:"power3.out"}),E.fromTo(u.rotation,{y:-1.4*d},{y:0,duration:1.6,ease:"power3.out"});else if(o.startsWith("exit")){const p=o==="exit-left"?-1:1;E.to(u.position,{x:3.4*p,y:-.15,duration:1,ease:"power3.in"}),E.to(u.scale,{x:.4,y:.4,z:.4,duration:1,ease:"power3.in"}),E.to(u.rotation,{y:1.2*p,duration:1,ease:"power2.in",onComplete:c})}},[o]),t.jsx("group",{ref:l,children:t.jsxs("group",{scale:s.scale,position:s.offset,children:[s.parts.map((u,d)=>t.jsx("mesh",{geometry:u.geometry,material:u.material,castShadow:!0},d)),i&&e.hotspots.map((u,d)=>t.jsx(Ct,{index:d,data:u,position:r[d].position,normal:r[d].normal,open:a===d,onToggle:m,visible:!0},`${e.id}-${d}`))]})})}function Dt({quality:e}){const{gl:o,scene:n,camera:c}=Oe(),[i,a]=h.useState(null);return h.useEffect(()=>{const m=setTimeout(()=>a($.map(l=>Be(l.id,e))),900);return()=>clearTimeout(m)},[e]),h.useEffect(()=>{if(!i)return;let m=!0;return(o.compileAsync?o.compileAsync(n,c):Promise.resolve(o.compile(n,c))).catch(()=>{}).finally(()=>m&&a(!1)),()=>{m=!1}},[i]),i?t.jsx("group",{position:[0,-60,0],scale:1e-4,children:i.flatMap((m,l)=>m.parts.map((s,r)=>t.jsx("mesh",{geometry:s.geometry,material:s.material,dispose:null},`${l}-${r}`)))}):null}function Wt(){const e=ue(f=>f.quality),o=ue(f=>f.reducedMotion),{camera:n,gl:c}=Oe(),[i,a]=h.useState(0),[m,l]=h.useState([{id:$[0].id,key:"first",mode:"present"}]),[s,r]=h.useState(!1),[u,d]=h.useState(!1),[p,S]=h.useState(0),[y,z]=h.useState(null),[P,x]=h.useState(!1),[g,k]=h.useState(!1),[M,I]=h.useState(!1),q=h.useRef(0),R=h.useRef(0),L=h.useRef(1),A=h.useRef(),B=h.useRef(),C=h.useRef({theta:.06,dist:6.6,targetDist:Z,lookY:0,locked:!0}),Y=h.useRef({dragging:!1,accX:0,accY:0,velX:0,velY:0,last:0,auto:0,boost:0,enabled:!1}),pe=h.useRef(!1),ie=h.useRef(0);ie.current=i;const W=h.useRef([]),_e=h.useRef(!1),Me=h.useRef(null);Me.current=y;const O=$[i];h.useEffect(()=>{Ze.getState().set({bloom:.42,threshold:.86,smoothing:.2,vignette:.62})},[]),h.useEffect(()=>{const f=setTimeout(()=>{["space/arp273.webp","space/m51.webp","space/pillars.webp","space/udf.webp"].forEach(v=>Ie.preload(v))},4e3);return()=>clearTimeout(f)},[e]);const ke=st({outro:async()=>{_e.current=!0,W.current.forEach(clearTimeout),W.current=[],Y.current.enabled=!1,d(!1),r(!1),z(null),k(!1),ie.current!==0&&(Pe(0,!0),await new Promise(w=>setTimeout(w,1300))),I(!0),C.current.locked=!0;const f=E.timeline();f.to(q,{current:1,duration:3.2,ease:"power2.inOut"},0).to(R,{current:1,duration:2.4,ease:"power2.inOut"},0).to(L,{current:0,duration:1.5},0).to(C.current,{dist:1.62,theta:.04,lookY:0,duration:4,ease:"power3.inOut"},.2).to(Y.current,{auto:.05,duration:3},0);const v=A.current.quaternion.clone(),j=new J().setFromEuler(new be(-.55,.35,0)),_={t:0};f.to(_,{t:1,duration:3.2,ease:"power2.inOut",onUpdate:()=>A.current.quaternion.slerpQuaternions(v,j,_.t)},0),await f.then(),await ze.toBlack(.9)}});h.useEffect(()=>{let f=!1;const v=C.current,j=Y.current;return(async()=>{if(await rt(),f||_e.current)return;ke==="cinematic"?(v.theta=1.5,v.dist=2.5,j.boost=3.6,A.current.quaternion.identity(),ze.clear(.9,.05),E.to(v,{theta:.06,dist:Z,duration:o?.01:3.6,ease:"power3.inOut",delay:.3}),E.to(j,{boost:0,duration:4.2,ease:"power2.out"})):(v.theta=.1,v.dist=o?Z:6.8,E.to(v,{dist:Z,theta:.06,duration:o?.01:3.2,ease:"power2.out"})),v.targetDist=Z;const w=ke==="cinematic"?2.6:1;W.current.push(setTimeout(()=>r(!0),w*1e3)),W.current.push(setTimeout(()=>r(!1),(w+5.6)*1e3)),W.current.push(setTimeout(()=>{v.locked=!1,j.enabled=!0,d(!0),ue.getState().setIdle()},(w+6.2)*1e3))})(),()=>{f=!0,W.current.forEach(clearTimeout),W.current=[]}},[]),h.useEffect(()=>{const f=c.domElement,v=new Map;let j=0;const _=Y.current,w=C.current,V=()=>{const[N,D]=[...v.values()];return Math.hypot(N.x-D.x,N.y-D.y)},Q=N=>{if(_.enabled){v.set(N.pointerId,{x:N.clientX,y:N.clientY});try{f.setPointerCapture(N.pointerId)}catch{}_.dragging=!0,_.velX=_.velY=0,_.last=performance.now(),v.size===2&&(j=V()),x(!0)}},te=N=>{const D=v.get(N.pointerId);if(!D||!_.enabled)return;const he=N.clientX-D.x,ce=N.clientY-D.y;if(D.x=N.clientX,D.y=N.clientY,v.size===1)_.accX+=ce*.0058,_.accY+=he*.0058;else if(v.size===2){const de=V();j>0&&(w.targetDist=oe(w.targetDist*(j/de),re,xe)),j=de}_.last=performance.now()},K=N=>{v.delete(N.pointerId),v.size<2&&(j=0),v.size===0&&(_.dragging=!1)},X=N=>{_.enabled&&(N.preventDefault(),w.targetDist=oe(w.targetDist*Math.exp(N.deltaY*.0011),re,xe),_.last=performance.now(),x(!0))};return f.addEventListener("pointerdown",Q),window.addEventListener("pointermove",te),window.addEventListener("pointerup",K),window.addEventListener("pointercancel",K),f.addEventListener("wheel",X,{passive:!1}),()=>{f.removeEventListener("pointerdown",Q),window.removeEventListener("pointermove",te),window.removeEventListener("pointerup",K),window.removeEventListener("pointercancel",K),f.removeEventListener("wheel",X)}},[c]);const T=h.useMemo(()=>({right:new b,up:new b,q:new J,q2:new J,yAxis:new b(0,1,0)}),[]);ee((f,v)=>{const j=Math.min(v,.05),_=C.current,w=Y.current,V=A.current;if(!V)return;_.locked||(_.dist=ve(_.dist,_.targetDist,5,j));const Q=f.pointer.x,te=f.pointer.y,K=oe((_.dist-re)/(Z-re));n.position.set(Q*.18*K,Math.sin(_.theta)*_.dist+.12+te*.08*K,Math.cos(_.theta)*_.dist),n.lookAt(0,_.lookY,0),T.right.set(1,0,0).applyQuaternion(n.quaternion),T.up.set(0,1,0).applyQuaternion(n.quaternion);let X=0,N=0;w.dragging?(X=w.accX,N=w.accY,w.velX=ve(w.velX,X/j,18,j),w.velY=ve(w.velY,N/j,18,j),w.accX=w.accY=0):(w.velX*=Math.exp(-3.2*j),w.velY*=Math.exp(-3.2*j),X=w.velX*j,N=w.velY*j),(X||N)&&(T.q.setFromAxisAngle(T.right,X),T.q2.setFromAxisAngle(T.up,N),V.quaternion.premultiply(T.q).premultiply(T.q2));const D=(performance.now()-w.last)/1e3,he=w.dragging||Me.current!==null?0:oe((D-2.5)/2.5),ce=(.16+w.auto)*he+w.boost;ce>0&&(T.q.setFromAxisAngle(T.yAxis,ce*j),V.quaternion.premultiply(T.q)),B.current&&(B.current.position.y=Math.sin(f.clock.elapsedTime*.7)*.035),ye.uKeyDirView.value.copy(Se).transformDirection(n.matrixWorldInverse),ye.uTime.value=f.clock.elapsedTime});function Pe(f,v=!1){if(f===ie.current||pe.current)return;pe.current=!0;const j=f>ie.current?1:-1;z(null),S(0),l(Q=>[{...Q[Q.length-1],mode:j>0?"exit-left":"exit-right"},{id:$[f].id,key:`${$[f].id}-${Date.now()}`,mode:j>0?"enter-right":"enter-left"}]),a(f),nt.chime(.7);const _=A.current.quaternion.clone(),w=new J().setFromEuler(new be(.18,0,0)),V={t:0};E.to(V,{t:1,duration:v?1:1.4,ease:"power2.inOut",onUpdate:()=>A.current&&A.current.quaternion.slerpQuaternions(_,w,V.t)}),Y.current.velX=Y.current.velY=0,C.current.targetDist=Z,setTimeout(()=>pe.current=!1,v?1050:1400)}const Ve=f=>l(v=>v.filter(j=>j.key!==f)),Ne=f=>{C.current.targetDist=oe(C.current.targetDist*f,re,xe),Y.current.last=performance.now(),x(!0)};return t.jsxs(t.Fragment,{children:[t.jsx(pt,{cosmos:q,live:M,resolution:256}),t.jsx("fog",{attach:"fog",args:["#090b10",8,19]}),t.jsx("directionalLight",{position:Se.clone().multiplyScalar(8).toArray(),intensity:1.7,color:"#fff1e0"}),t.jsx("directionalLight",{position:[-3,1.5,-4],intensity:1.4,color:"#e6c38c"}),t.jsx("directionalLight",{position:[0,-3,2],intensity:.25,color:"#d8a6b5"}),t.jsx(Lt,{fade:R}),t.jsx(Ft,{fade:R}),t.jsx(Dt,{quality:e}),t.jsx(ct,{count:e==="high"?220:110,area:[9,5,6],center:[0,.6,-1],color:"#f1d9b5",size:.03,opacity:.4,speed:.05,fade:L}),t.jsx("group",{ref:B,children:t.jsx("group",{ref:A,rotation:[.18,0,0],children:m.map(f=>{const v=$.find(j=>j.id===f.id);return t.jsx(Tt,{stone:v,mode:f.mode,quality:e,onGone:()=>Ve(f.key),showHotspots:u&&!f.mode.startsWith("exit"),openHotspot:y,setOpenHotspot:z},f.key)})})}),t.jsx(Je.In,{children:t.jsxs("div",{className:`within ${u?"is-ui":""}`,children:[t.jsx(at,{text:et,show:s,className:"within__caption"}),t.jsxs("aside",{className:"within__info interactive","aria-live":"polite",children:[t.jsxs("p",{className:"eyebrow",children:["Specimen ",se[i]," ",t.jsxs("span",{className:"within__of",children:["of ",se[$.length-1]]})]}),t.jsx("h2",{className:"within__name display",children:O.name}),t.jsx("p",{className:"within__name-ar",lang:"ar",children:O.nameAr}),t.jsx("p",{className:"within__kind",children:O.kind}),t.jsx("dl",{className:"within__specs",children:O.specs.map(([f,v])=>t.jsxs("div",{children:[t.jsx("dt",{children:f}),t.jsx("dd",{children:v})]},f))}),t.jsxs("div",{className:"within__fact",children:[t.jsx("p",{className:"within__fact-text",children:O.facts[p]},p),t.jsxs("div",{className:"within__fact-nav",children:[t.jsxs("span",{children:[String(p+1).padStart(2,"0")," / ",String(O.facts.length).padStart(2,"0")]}),t.jsxs("button",{className:"within__fact-next",onClick:()=>S(f=>(f+1)%O.facts.length),children:[p+1<O.facts.length?"Next fact":"From the start"," ",t.jsx("span",{"aria-hidden":"true",children:"→"})]})]})]})]},`info-${O.id}`),t.jsxs("aside",{className:"within__note",children:[t.jsx("p",{className:"eyebrow",children:"A little note"}),t.jsx("p",{className:"within__note-en",children:O.note}),t.jsx("p",{className:"within__note-ar",lang:"ar",children:O.noteAr})]},`note-${O.id}`),t.jsxs("div",{className:"within__mobile-head",children:[t.jsxs("p",{className:"eyebrow",children:[se[i]," / ",se[$.length-1]]}),t.jsx("h2",{className:"within__name display",children:O.name}),t.jsx("p",{className:"within__name-ar",lang:"ar",children:O.nameAr})]},`mh-${O.id}`),t.jsx("button",{className:"chip within__sheet-toggle",onClick:()=>k(!0),children:"About this stone"}),t.jsxs("div",{className:`within__sheet ${g?"is-open":""}`,role:"dialog","aria-hidden":!g,children:[t.jsx("button",{className:"icon-btn within__sheet-close",onClick:()=>k(!1),"aria-label":"Close",children:t.jsx(Fe,{})}),t.jsx("p",{className:"within__kind",children:O.kind}),t.jsx("dl",{className:"within__specs",children:O.specs.map(([f,v])=>t.jsxs("div",{children:[t.jsx("dt",{children:f}),t.jsx("dd",{children:v})]},f))}),t.jsx("ol",{className:"within__facts-list",children:O.facts.map((f,v)=>t.jsx("li",{children:f},v))}),t.jsxs("div",{className:"within__sheet-note",children:[t.jsx("p",{className:"eyebrow",children:"A little note"}),t.jsx("p",{className:"within__note-en",children:O.note}),t.jsx("p",{className:"within__note-ar",lang:"ar",children:O.noteAr})]})]}),t.jsxs("div",{className:"within__zoom",children:[t.jsx("button",{className:"icon-btn",onClick:()=>Ne(.78),"aria-label":"Look closer",children:t.jsx(tt,{})}),t.jsx("button",{className:"icon-btn",onClick:()=>Ne(1.28),"aria-label":"Step back",children:t.jsx(ot,{})})]}),t.jsx("p",{className:`within__hint ${P?"is-gone":""}`,children:"Drag to turn it · Scroll or pinch to look closer · Touch the gold points"}),t.jsx("nav",{className:"within__selector","aria-label":"Specimens",children:$.map((f,v)=>t.jsxs("button",{className:`within__pick ${v===i?"is-active":""}`,onClick:()=>Pe(v),"aria-current":v===i,children:[t.jsx("span",{className:"within__pick-num",children:se[v]}),t.jsx("span",{className:"within__pick-name",children:f.name})]},f.id))}),t.jsxs("button",{className:"cta within__continue",onClick:()=>ue.getState().next(),children:["Look beyond ",t.jsx("span",{className:"arrow",children:"→"})]})]})})]})}export{Wt as default};
