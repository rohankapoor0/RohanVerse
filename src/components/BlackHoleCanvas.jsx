import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Realistic Gravitational Black Hole (Gargantua-inspired)
 * Features:
 * - Pure Black (#000000) void & background
 * - Shadow event horizon with razor-sharp boundary
 * - Gravitational lensing simulation: upper and lower Einstein warped arcs
 * - Accretion disk with Doppler beaming (one side brighter), thermal gradients (warm white, soft gold, faint cyan-blue edge)
 * - Deep space cold stars with cursor parallax reaction
 */
export default function BlackHoleCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Scene & Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // 1. Deep Field Starfield
    const starCount = 1400;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);

    const baseStarColors = [
      new THREE.Color('#ffffff'),
      new THREE.Color('#d4e8ff'),
      new THREE.Color('#fff4e0'),
      new THREE.Color('#8ab4f8')
    ];

    for (let i = 0; i < starCount; i++) {
      const idx = i * 3;
      // Distribute stars in spherical shell around scene
      const r = THREE.MathUtils.randFloat(18, 45);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(THREE.MathUtils.randFloat(-1, 1));

      starPositions[idx] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[idx + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[idx + 2] = r * Math.cos(phi);

      const c = baseStarColors[Math.floor(Math.random() * baseStarColors.length)];
      starColors[idx] = c.r;
      starColors[idx + 1] = c.g;
      starColors[idx + 2] = c.b;

      starSizes[i] = Math.random() * 1.5 + 0.5;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    starGeo.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));

    const starMat = new THREE.PointsMaterial({
      size: 1.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // 2. Black Hole Event Horizon (Central Void)
    const eventHorizonGeo = new THREE.SphereGeometry(1.0, 64, 64);
    const eventHorizonMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
    });
    const eventHorizon = new THREE.Mesh(eventHorizonGeo, eventHorizonMat);
    scene.add(eventHorizon);

    // 3. Photon Ring & Gravitational Lensing Halo (Custom Shader)
    // Simulates the extreme bending of light around the photon sphere (1.5 * Schwarzschild radius)
    const haloGeo = new THREE.PlaneGeometry(8.5, 8.5);
    const haloShaderMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uAspectRatio: { value: width / height },
        uMouse: { value: new THREE.Vector2(0, 0) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uTime;
        uniform float uAspectRatio;

        // Simulates Gargantua's gravitational lensing warp & photon sphere
        void main() {
          vec2 centered = (vUv - 0.5) * 2.0;
          float dist = length(centered);

          // Absolute black event horizon core
          if (dist < 0.62) {
            discard;
          }

          // Thin intense photon sphere at event horizon boundary
          float photonRing = 0.0;
          if (dist >= 0.62 && dist <= 0.66) {
            photonRing = smoothstep(0.62, 0.635, dist) * (1.0 - smoothstep(0.635, 0.66, dist)) * 4.5;
          }

          // Lensed secondary arc above and below event horizon
          float lensedVertical = abs(centered.y);
          float lensedArc = exp(-pow(dist - 0.72, 2.0) * 80.0) * (0.8 + 0.4 * lensedVertical);

          // Soft outer atmospheric aura (faint cosmic glow)
          float outerGlow = exp(-dist * 2.6) * 0.45;

          // Thermal spectrum colors:
          // Core: pure white/hot gold; Mid: warm gold; Outer: faint cyan/blue redshift
          vec3 warmWhite = vec3(1.0, 0.98, 0.92);
          vec3 gold = vec3(0.95, 0.72, 0.32);
          vec3 faintBlue = vec3(0.35, 0.62, 0.95);

          vec3 finalColor = warmWhite * photonRing * 1.8;
          finalColor += mix(gold, warmWhite, 0.4) * lensedArc * 1.5;
          finalColor += mix(gold, faintBlue, smoothstep(0.7, 1.6, dist)) * outerGlow;

          // Doppler asymmetry (slight brightness boost on left side)
          float doppler = 1.0 - centered.x * 0.28;
          finalColor *= doppler;

          float alpha = clamp(photonRing + lensedArc + outerGlow * 1.2, 0.0, 1.0);
          gl_FragColor = vec4(finalColor, alpha * 0.95);
        }
      `
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloShaderMat);
    haloMesh.position.z = -0.05;
    scene.add(haloMesh);

    // 4. Accretion Disk (3D Volumetric Mesh with relativistic Doppler beaming)
    const diskInner = 1.28;
    const diskOuter = 3.8;
    const diskGeo = new THREE.RingGeometry(diskInner, diskOuter, 128, 32);

    const diskShaderMat = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPos;
        void main() {
          vUv = uv;
          vPos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vPos;
        uniform float uTime;

        // Fast pseudo-noise for plasma turbulence
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
        }
        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
            mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
            f.y
          );
        }

        void main() {
          float radius = length(vPos.xy);
          float angle = atan(vPos.y, vPos.x);

          // Keplerian differential rotation: inner disk spins faster
          float speed = 2.4 / pow(radius, 0.85);
          float rotatedAngle = angle + uTime * speed * 0.35;

          // Plasma density spirals
          float n1 = noise(vec2(radius * 5.0, rotatedAngle * 4.0));
          float n2 = noise(vec2(radius * 10.0 - uTime * 0.5, rotatedAngle * 8.0));
          float plasma = 0.7 * n1 + 0.3 * n2;

          // Radial falloff: intense near event horizon, fading gradually to interstellar void
          float normalizedR = (radius - 1.28) / (3.8 - 1.28);
          float radialIntensity = pow(1.0 - normalizedR, 1.8) * smoothstep(0.0, 0.08, normalizedR);

          // Thermal spectrum palette:
          // Inner: searing white (10,000K) -> Mid: warm golden amber -> Outer edge: faint ethereal blue
          vec3 innerHot = vec3(1.0, 0.98, 0.95);
          vec3 midGold = vec3(0.96, 0.75, 0.38);
          vec3 outerAmber = vec3(0.85, 0.45, 0.12);
          vec3 faintBlue = vec3(0.25, 0.55, 0.90);

          vec3 diskColor = mix(innerHot, midGold, smoothstep(0.0, 0.35, normalizedR));
          diskColor = mix(diskColor, outerAmber, smoothstep(0.35, 0.75, normalizedR));
          diskColor = mix(diskColor, faintBlue, smoothstep(0.75, 1.0, normalizedR) * 0.4);

          // Relativistic Doppler Beaming: Left side moves toward observer = brighter and blueshifted
          // Right side moves away = dimmer and redshifted
          float dopplerFactor = 1.0 - (vPos.x / radius) * 0.42;
          diskColor *= dopplerFactor;

          float alpha = radialIntensity * (0.55 + 0.45 * plasma);
          gl_FragColor = vec4(diskColor * (1.1 + plasma * 0.4), alpha * 0.92);
        }
      `
    });

    const diskMesh = new THREE.Mesh(diskGeo, diskShaderMat);
    // Authentic Gargantua tilt: tilted toward camera at ~74 degrees
    diskMesh.rotation.x = Math.PI * 0.41;
    diskMesh.rotation.y = 0.05;
    scene.add(diskMesh);

    // 5. Upper Lensed Accretion Arc (Light bent over the top of the event horizon)
    const upperArcGeo = new THREE.RingGeometry(1.08, 2.4, 64, 16, 0, Math.PI);
    const upperArcMat = diskShaderMat.clone();
    const upperArcMesh = new THREE.Mesh(upperArcGeo, upperArcMat);
    upperArcMesh.position.set(0, 0.28, -0.15);
    upperArcMesh.rotation.x = -0.18;
    scene.add(upperArcMesh);

    // 6. Lower Lensed Accretion Arc (Light bent under the bottom)
    const lowerArcGeo = new THREE.RingGeometry(1.08, 2.1, 64, 16, Math.PI, Math.PI);
    const lowerArcMat = diskShaderMat.clone();
    const lowerArcMesh = new THREE.Mesh(lowerArcGeo, lowerArcMat);
    lowerArcMesh.position.set(0, -0.28, -0.15);
    lowerArcMesh.rotation.x = 0.18;
    scene.add(lowerArcMesh);

    // Parallax mouse reaction
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / width - 0.5) * 0.6;
      targetMouseY = (e.clientY / height - 0.5) * 0.6;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Window Resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      haloShaderMat.uniforms.uAspectRatio.value = width / height;
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animId;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.035;
      currentMouseY += (targetMouseY - currentMouseY) * 0.035;

      // Update shader uniforms
      haloShaderMat.uniforms.uTime.value = elapsedTime;
      diskShaderMat.uniforms.uTime.value = elapsedTime;
      upperArcMat.uniforms.uTime.value = elapsedTime;
      lowerArcMat.uniforms.uTime.value = elapsedTime;

      // Subtle celestial wobble and parallax
      camera.position.x = currentMouseX * 0.7;
      camera.position.y = -currentMouseY * 0.5;
      camera.lookAt(0, 0, 0);

      // Starfield subtle cosmic drift
      starField.rotation.y = elapsedTime * 0.003 + currentMouseX * 0.08;
      starField.rotation.x = currentMouseY * 0.06;

      // Extremely subtle breathing motion of the accretion disk
      diskMesh.rotation.z = Math.sin(elapsedTime * 0.08) * 0.02;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      starGeo.dispose();
      starMat.dispose();
      eventHorizonGeo.dispose();
      eventHorizonMat.dispose();
      haloGeo.dispose();
      haloShaderMat.dispose();
      diskGeo.dispose();
      diskShaderMat.dispose();
      upperArcGeo.dispose();
      upperArcMat.dispose();
      lowerArcGeo.dispose();
      lowerArcMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 bg-black"
      style={{ background: '#000000' }}
    />
  );
}

