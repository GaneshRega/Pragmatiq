"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

interface WaveAnimationProps {
  width?: number
  height?: number
  particles?: number
  pointSize?: number
  waveSpeed?: number
  waveIntensity?: number
  particleColor?: string
  particleColorEnd?: string
  gridDistance?: number
  className?: string
}

export function WaveAnimation({
  width,
  height,
  particles = 5000,
  pointSize = 1.5,
  waveSpeed = 2.0,
  waveIntensity = 8.0,
  particleColor = "#ffffff",
  particleColorEnd,
  gridDistance = 5,
  className = "",
}: WaveAnimationProps) {
  const canvasRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationIdRef = useRef<number | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const container = canvasRef.current
    const w = width || window.innerWidth
    const h = height || window.innerHeight
    const dpr = window.devicePixelRatio

    const fov = 60
    const fovRad = (fov / 2) * (Math.PI / 180)
    const dist = h / 2 / Math.tan(fovRad)

    const clock = new THREE.Clock()

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(w, h)
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(dpr)
    rendererRef.current = renderer

    container.appendChild(renderer.domElement)

    const camera = new THREE.PerspectiveCamera(fov, w / h, 1, dist * 2)
    camera.position.set(0, 0, 10)

    const scene = new THREE.Scene()

    const geo = new THREE.BufferGeometry()
    const positions: number[] = []

    const gridWidth = 400 * (w / h)
    const depth = 400

    for (let x = 0; x < gridWidth; x += gridDistance) {
      for (let z = 0; z < depth; z += gridDistance) {
        positions.push(-gridWidth / 2 + x, -30, -depth / 2 + z)
      }
    }

    const positionAttribute = new THREE.Float32BufferAttribute(positions, 3)
    geo.setAttribute("position", positionAttribute)

    const useGradient = !!particleColorEnd
    const colorA = new THREE.Color(particleColor)
    const colorB = new THREE.Color(particleColorEnd ?? particleColor)

    const mat = new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0.0 },
        u_point_size: { value: pointSize },
        u_color_a: { value: colorA },
        u_color_b: { value: colorB },
        u_grid_half_width: { value: gridWidth / 2 },
        u_use_gradient: { value: useGradient ? 1.0 : 0.0 },
      },
      vertexShader: `
        #define M_PI 3.1415926535897932384626433832795
        precision mediump float;
        uniform float u_time;
        uniform float u_point_size;
        uniform float u_grid_half_width;
        varying float v_blend;

        void main() {
          vec3 p = position;
          p.y += (
            cos(p.x / M_PI * ${waveIntensity.toFixed(1)} + u_time * ${waveSpeed.toFixed(1)}) +
            sin(p.z / M_PI * ${waveIntensity.toFixed(1)} + u_time * ${waveSpeed.toFixed(1)})
          );
          v_blend = clamp((p.x + u_grid_half_width) / (u_grid_half_width * 2.0), 0.0, 1.0);
          gl_PointSize = u_point_size;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragmentShader: `
        precision mediump float;
        uniform vec3 u_color_a;
        uniform vec3 u_color_b;
        uniform float u_use_gradient;
        varying float v_blend;

        void main() {
          vec3 color = mix(u_color_a, u_color_b, v_blend * u_use_gradient);
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    })

    const mesh = new THREE.Points(geo, mat)
    scene.add(mesh)

    function render() {
      const time = clock.getElapsedTime()
      mesh.material.uniforms.u_time.value = time
      renderer.render(scene, camera)
      animationIdRef.current = requestAnimationFrame(render)
    }

    render()

    const handleResize = () => {
      if (!width && !height) {
        const newW = window.innerWidth
        const newH = window.innerHeight
        camera.aspect = newW / newH
        camera.updateProjectionMatrix()
        renderer.setSize(newW, newH)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      if (rendererRef.current) {
        container.removeChild(rendererRef.current.domElement)
        rendererRef.current.dispose()
      }
      geo.dispose()
      mat.dispose()
    }
  }, [width, height, particles, pointSize, waveSpeed, waveIntensity, particleColor, particleColorEnd, gridDistance])

  return (
    <div
      ref={canvasRef}
      className={className}
      style={{
        width: width || "100vw",
        height: height || "100vh",
        overflow: "hidden",
      }}
    />
  )
}
