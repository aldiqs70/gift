import{r as w,a as A,j as b}from"./r3f-CsHYtfc3.js";import{ab as x,s as R,h as s,i as C,at as P}from"./three-DyQ_Pgp8.js";import{m as S}from"./glsl-jqHpiXrq.js";function B({count:r=40,colors:u=["#f6c98a","#e9a9b9","#fff0d6"],spread:n=[12,5,4],center:g=[0,2,-7],size:p=1,opacity:m=.5,seed:f=1,fade:v}){const{geometry:y,material:l}=w.useMemo(()=>{const e=S(f),o=new Float32Array(r*3),d=new Float32Array(r*3),c=new Float32Array(r),a=new x;for(let t=0;t<r;t++)o[t*3]=(e()-.5)*n[0],o[t*3+1]=(e()-.5)*n[1],o[t*3+2]=(e()-.5)*n[2],a.set(u[Math.floor(e()*u.length)]),d.set([a.r,a.g,a.b],t*3),c[t]=e();const i=new R;i.setAttribute("position",new s(o,3)),i.setAttribute("color",new s(d,3)),i.setAttribute("aRnd",new s(c,1));const h=new C({transparent:!0,depthWrite:!1,blending:P,vertexColors:!0,uniforms:{uTime:{value:0},uSize:{value:p},uOpacity:{value:m},uPR:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
        attribute float aRnd; uniform float uTime; uniform float uSize; uniform float uPR;
        varying vec3 vColor; varying float vA;
        void main() {
          vec3 p = position;
          p.x += sin(uTime * 0.05 + aRnd * 20.0) * 0.3;
          p.y += cos(uTime * 0.04 + aRnd * 12.0) * 0.2;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = uSize * (60.0 + aRnd * 140.0) * uPR * (6.0 / -mv.z);
          vColor = color;
          vA = 0.35 + 0.65 * aRnd;
        }
      `,fragmentShader:`
        uniform float uOpacity; varying vec3 vColor; varying float vA;
        void main() {
          float d = length(gl_PointCoord - 0.5) * 2.0;
          // a lens-like disc: soft edge, slightly brighter rim
          float disc = smoothstep(1.0, 0.55, d);
          float a = disc * 0.6 * vA * uOpacity;
          gl_FragColor = vec4(vColor * 1.2, a);
        }
      `});return{geometry:i,material:h}},[r,f]);return A(e=>{l.uniforms.uTime.value=e.clock.elapsedTime,v&&(l.uniforms.uOpacity.value=m*v.current)}),b.jsx("points",{geometry:y,material:l,position:g,frustumCulled:!1,renderOrder:-1})}export{B};
