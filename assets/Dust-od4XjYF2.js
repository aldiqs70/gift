import{r as v,a as h,j as w}from"./r3f-CsHYtfc3.js";import{s as x,h as c,i as S,a as b,ab as C,at as P}from"./three-DyQ_Pgp8.js";import{m as T}from"./glsl-jqHpiXrq.js";function F({count:o=260,area:e=[8,5,6],center:y=[0,0,0],color:l="#f3dcb8",size:s=.035,opacity:r=.55,speed:m=.06,seed:f=3,fade:d}){const g=v.useRef(),{geometry:A,material:n}=v.useMemo(()=>{const t=T(f),i=new Float32Array(o*3),p=new Float32Array(o);for(let a=0;a<o;a++)i[a*3]=(t()-.5)*e[0],i[a*3+1]=(t()-.5)*e[1],i[a*3+2]=(t()-.5)*e[2],p[a]=t();const u=new x;u.setAttribute("position",new c(i,3)),u.setAttribute("aRnd",new c(p,1));const R=new S({transparent:!0,depthWrite:!1,blending:P,uniforms:{uTime:{value:0},uColor:{value:new C(l)},uSize:{value:s},uOpacity:{value:r},uArea:{value:new b(...e)},uSpeed:{value:m},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
        attribute float aRnd;
        uniform float uTime; uniform float uSize; uniform vec3 uArea; uniform float uSpeed; uniform float uPixelRatio;
        varying float vAlpha;
        void main() {
          vec3 p = position;
          float t = uTime * uSpeed;
          p.x += sin(t * (0.6 + aRnd) + aRnd * 30.0) * 0.35;
          p.y = mod(position.y + t * (0.3 + aRnd * 0.5) + uArea.y * 0.5, uArea.y) - uArea.y * 0.5;
          p.z += cos(t * (0.5 + aRnd) + aRnd * 12.0) * 0.3;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          float s = uSize * (0.4 + aRnd * 1.2);
          gl_PointSize = s * uPixelRatio * (420.0 / -mv.z);
          float tw = 0.55 + 0.45 * sin(uTime * (0.8 + aRnd * 1.7) + aRnd * 40.0);
          float edge = 1.0 - smoothstep(0.35, 0.5, abs(p.y / uArea.y));
          vAlpha = tw * edge;
        }
      `,fragmentShader:`
        uniform vec3 uColor; uniform float uOpacity;
        varying float vAlpha;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          float a = smoothstep(0.5, 0.0, d);
          a *= a;
          gl_FragColor = vec4(uColor * 1.6, a * vAlpha * uOpacity);
        }
      `});return{geometry:u,material:R}},[o,e[0],e[1],e[2],l,s,r,m,f]);return h(t=>{n.uniforms.uTime.value=t.clock.elapsedTime,d&&(n.uniforms.uOpacity.value=r*d.current)}),w.jsx("points",{ref:g,geometry:A,material:n,position:y,frustumCulled:!1})}export{F as D};
