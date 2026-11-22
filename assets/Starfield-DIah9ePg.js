import{u as G,r as j,a as V,j as B}from"./r3f-BQyhnm3o.js";import{af as k,h as P,i as H,V as I,ao as L}from"./three-Dtl-JI3O.js";import{m as _}from"./math-B6VHFZkx.js";const N={w:3.3,h:2.15};function q(w){const a=_(42),{w:g,h:m}=N,n=-g/2,u=g/2,i=-m/2,c=m/2,f=[0,c-m*.62],e=[0,i+m*.42],l=[[[n,i],[u,i]],[[u,i],[u,c]],[[u,c],[n,c]],[[n,c],[n,i]],[[n,c],f],[[u,c],f],[[n,i],e],[[u,i],e]],p=l.map(([o,r])=>Math.hypot(r[0]-o[0],r[1]-o[1])),y=p.reduce((o,r)=>o+r,0),h=new Float32Array(w*3),T=Math.floor(w*.82);for(let o=0;o<w;o++){let r,d;if(o<T){let s=a()*y,A=0;for(;s>p[A];)s-=p[A++];const[t,b]=l[A],v=s/p[A];r=t[0]+(b[0]-t[0])*v+(a()-.5)*.03,d=t[1]+(b[1]-t[1])*v+(a()-.5)*.03}else r=(a()-.5)*g*.96,d=(a()-.5)*m*.96;h[o*3]=r,h[o*3+1]=d,h[o*3+2]=(a()-.5)*.04}return h}const K={position:[0,0,6]},C=[[1,.96,.9],[1,.92,.82],[.86,.9,1],[1,.84,.66],[.98,.86,.9]];function Q({count:w=6e3,envelopeCount:a=2200,morph:g,opacity:m,mode:n="field",seed:u=7}){const{size:i}=G(),{geometry:c,material:f}=j.useMemo(()=>{const e=_(u),l=n==="envelope"?a:w,p=new Float32Array(l*3),y=new Float32Array(l*3),h=new Float32Array(l*3),T=new Float32Array(l),o=new Float32Array(l),r=new Float32Array(l),d=q(a);for(let t=0;t<l;t++){const b=e()<.35;let v,E,R;const M=22+e()*70;if(b){const x=e()*Math.PI*2,F=(e()-.5)*.35;v=Math.cos(x)*M,R=Math.sin(x)*M,E=F*M+v*.28}else{const x=e()*2-1,F=e()*Math.PI*2,z=Math.sqrt(1-x*x);v=z*Math.cos(F)*M,E=x*M,R=z*Math.sin(F)*M}p.set([v,E,R],t*3);const S=t<a;r[t]=S?1:0,S?y.set([d[t*3],d[t*3+1],d[t*3+2]],t*3):y.set([v,E,R],t*3);const O=C[Math.floor(e()*C.length)];h.set(O,t*3),T[t]=e(),o[t]=.8+Math.pow(e(),5)*3.6}const s=new k;s.setAttribute("position",new P(n==="envelope"?y.slice():p,3)),s.setAttribute("aTarget",new P(y,3)),s.setAttribute("color",new P(h,3)),s.setAttribute("aRnd",new P(T,1)),s.setAttribute("aSize",new P(o,1)),s.setAttribute("aEnv",new P(r,1));const A=new H({transparent:!0,depthWrite:!1,blending:L,vertexColors:!0,uniforms:{uTime:{value:0},uMorph:{value:n==="envelope"?1:0},uOpacity:{value:1},uPointer:{value:new I(9,9)},uAspect:{value:1},uPR:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
        attribute vec3 aTarget; attribute float aRnd; attribute float aSize; attribute float aEnv;
        uniform float uTime; uniform float uMorph; uniform vec2 uPointer; uniform float uAspect; uniform float uPR;
        varying vec3 vColor; varying float vAlpha; varying float vGlow;
        void main() {
          float start = aRnd * 0.4;
          float m = smoothstep(start, start + 0.6, uMorph) * aEnv;
          vec3 p = mix(position, aTarget, m);
          // they spiral a little on the way in
          float sw = (1.0 - m) * m * 4.0;
          p.x += sin(aRnd * 40.0 + uTime) * 0.6 * sw;
          p.y += cos(aRnd * 31.0 + uTime) * 0.6 * sw;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          vec2 ndc = gl_Position.xy / gl_Position.w;
          float dp = length((ndc - uPointer) * vec2(uAspect, 1.0));
          float near = exp(-dp * dp * 26.0) * (1.0 - uMorph);
          float tw = 0.72 + 0.28 * sin(uTime * (0.6 + aRnd * 2.4) + aRnd * 80.0);
          // gathered stars settle into a calm, even glow
          tw = mix(tw, 0.9 + 0.1 * sin(uTime * 2.0 + aRnd * 30.0), m);
          float s = aSize * mix(1.0, 1.15, m) * (1.0 + near * 1.8);
          gl_PointSize = s * uPR * tw * 1.6;
          vColor = mix(color, vec3(1.0, 0.86, 0.72), m * 0.5);
          vAlpha = mix(1.0, 0.0, uMorph * (1.0 - aEnv)) * (0.55 + 0.45 * tw);
          vGlow = near;
        }
      `,fragmentShader:`
        uniform float uOpacity;
        varying vec3 vColor; varying float vAlpha; varying float vGlow;
        void main() {
          float d = length(gl_PointCoord - 0.5) * 2.0;
          float core = smoothstep(0.55, 0.0, d);
          float halo = smoothstep(1.0, 0.0, d) * 0.35;
          float a = (core + halo) * vAlpha * uOpacity;
          gl_FragColor = vec4(vColor * (1.6 + vGlow * 2.0), a);
        }
      `});return{geometry:s,material:A}},[w,a,n,u]);return V(e=>{f.uniforms.uTime.value=e.clock.elapsedTime,f.uniforms.uAspect.value=i.width/i.height,f.uniforms.uPointer.value.set(e.pointer.x,e.pointer.y),g&&(f.uniforms.uMorph.value=g.current),m&&(f.uniforms.uOpacity.value=m.current)}),B.jsx("points",{geometry:c,material:f,frustumCulled:!1})}export{N as E,K as H,Q as S};
