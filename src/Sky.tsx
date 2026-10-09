import { useEffect, useRef } from 'react'

type Star = { x: number; y: number; r: number; a: number; s: number; p: number; col: string }

export default function Sky() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const c = ref.current!
    const ctx = c.getContext('2d')!
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches
    let stars: Star[] = []
    let w = 0
    let h = 0
    let raf = 0

    const build = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2)
      w = c.width = innerWidth * dpr
      h = c.height = innerHeight * dpr
      const n = Math.round((innerWidth * innerHeight) / 2600)
      stars = Array.from({ length: n }, () => {
        const big = Math.random() < 0.06
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: (big ? 0.9 + Math.random() * 0.7 : 0.3 + Math.random() * 0.5) * dpr,
          a: big ? 0.7 + Math.random() * 0.3 : 0.25 + Math.random() * 0.5,
          s: 0.4 + Math.random() * 1.6,
          p: Math.random() * Math.PI * 2,
          col: Math.random() < 0.12 ? '255,210,170' : '235,238,255',
        }
      })
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      for (const s of stars) {
        const tw = still ? 1 : 0.65 + 0.35 * Math.sin((t / 1000) * s.s + s.p)
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${s.col},${s.a * tw})`
        ctx.fill()
      }
      if (!still) raf = requestAnimationFrame(draw)
    }

    const onResize = () => {
      build()
      if (still) draw(0)
    }

    build()
    if (still) draw(0)
    else raf = requestAnimationFrame(draw)
    addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={ref} className="sky" aria-hidden="true" />
}
