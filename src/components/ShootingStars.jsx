import { useEffect, useState } from 'react'

export default function ShootingStars() {
  const [stars, setStars] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now() + Math.random()
      const duration = 3 + Math.random() * 4      // ۴-۷ ثانیه (آهسته)
      const delay = Math.random() * 0.5           // ۰-۰.۵ ثانیه
      const size = 80 + Math.random() * 80        // ۸۰-۱۶۰ پیکسل
      const thickness = 1.5 + Math.random() * 1.5 // ۱.۵-۳ پیکسل

      // ═══ ۱. انتخاب نقطه‌ی شروع روی لبه‌ی صفحه (۳۶۰ درجه) ═══
      const edge = Math.floor(Math.random() * 4) // ۰-۳
      let startX, startY

      if (edge === 0) {
        // لبه‌ی بالا
        startX = Math.random() * 100
        startY = -10
      } else if (edge === 1) {
        // لبه‌ی پایین
        startX = Math.random() * 100
        startY = 110
      } else if (edge === 2) {
        // لبه‌ی چپ
        startX = -10
        startY = Math.random() * 100
      } else {
        // لبه‌ی راست
        startX = 110
        startY = Math.random() * 100
      }

      // ═══ ۲. محاسبه‌ی جهت به سمت مرکز ═══
      const centerX = 50
      const centerY = 50

      const deltaX = centerX - startX
      const deltaY = centerY - startY

      // ═══ ۳. محاسبه‌ی زاویه ═══
      const angleRad = Math.atan2(deltaY, deltaX)
      const angleDeg = (angleRad * 180) / Math.PI

      // ═══ ۴. محاسبه‌ی فاصله (تا آخر صفحه) ═══
      const distance = Math.max(window.innerWidth, window.innerHeight) * 2.5

      const translateX = Math.cos(angleRad) * distance
      const translateY = Math.sin(angleRad) * distance

      const newStar = {
        id,
        top: `${startY}%`,
        left: `${startX}%`,
        duration: `${duration}s`,
        delay: `${delay}s`,
        rotate: `${angleDeg}deg`,
        translateX: `${translateX}px`,
        translateY: `${translateY}px`,
        size: `${size}px`,
        thickness: `${thickness}px`,
      }

      setStars((prev) => [...prev, newStar])

      // حذف بعد از تموم شدن انیمیشن
      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== id))
      }, (duration + delay) * 1000 + 500)
    }, 10000)   // هر 10 ثانیه یه شهاب‌سنگ

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="shooting-stars">
      {stars.map((star) => (
        <span
          key={star.id}
          className="shooting-star"
          style={{
            top: star.top,
            left: star.left,
            animationDuration: star.duration,
            animationDelay: star.delay,
            width: star.size,
            height: star.thickness,
            '--rotate': star.rotate,
            '--translateX': star.translateX,
            '--translateY': star.translateY,
          }}
        />
      ))}
    </div>
  )
}