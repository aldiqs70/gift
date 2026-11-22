import{r as p,a as h,j as g}from"./r3f-BVCAYyAT.js";import{a5 as b,h as y,l as A,a as R,p as S,b2 as C}from"./three-RqAEyvxP.js";import{m as _}from"./math-DZ68Y0-x.js";const M=`
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+10.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 105.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
float fbm(vec3 p) {
  float a = 0.5, s = 0.0;
  for (int i = 0; i < 5; i++) { s += a * snoise(p); p *= 2.03; a *= 0.5; }
  return s;
}
// fewer octaves: for detail that must stay smooth on screen
float fbm3(vec3 p) {
  float a = 0.5, s = 0.0;
  for (int i = 0; i < 3; i++) { s += a * snoise(p); p *= 2.03; a *= 0.5; }
  return s;
}
`;function T({count:a=260,area:e=[8,5,6],center:f=[0,0,0],color:s="#f3dcb8",size:c=.035,opacity:i=.55,speed:x=.06,seed:l=3,fade:u}){const d=p.useRef(),{geometry:z,material:n}=p.useMemo(()=>{const o=_(l),r=new Float32Array(a*3),m=new Float32Array(a);for(let t=0;t<a;t++)r[t*3]=(o()-.5)*e[0],r[t*3+1]=(o()-.5)*e[1],r[t*3+2]=(o()-.5)*e[2],m[t]=o();const v=new b;v.setAttribute("position",new y(r,3)),v.setAttribute("aRnd",new y(m,1));const w=new A({transparent:!0,depthWrite:!1,blending:C,uniforms:{uTime:{value:0},uColor:{value:new S(s)},uSize:{value:c},uOpacity:{value:i},uArea:{value:new R(...e)},uSpeed:{value:x},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
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
      `});return{geometry:v,material:w}},[a,e[0],e[1],e[2],s,c,i,x,l]);return h(o=>{n.uniforms.uTime.value=o.clock.elapsedTime,u&&(n.uniforms.uOpacity.value=i*u.current)}),g.jsx("points",{ref:d,geometry:z,material:n,position:f,frustumCulled:!1})}export{T as D,M as S};
