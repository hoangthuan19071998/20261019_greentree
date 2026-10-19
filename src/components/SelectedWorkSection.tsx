import type { FC } from 'react'
import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, TrendingUp } from 'lucide-react'

interface WorkProject {
  id: string
  client: string
  subtitle: string
  category: string
  channel: string
  url: string
  displayUrl: string
  logo: string
  stat1: { value: string; label: string }
  stat2: { value: string; label: string }
  highlight: string
  description: string
}

const workProjects: WorkProject[] = [
  {
    id: 'sel-de-mer',
    client: 'Sel de Mer Hotel & Suites',
    subtitle: 'Prince Hotel Danang',
    category: 'Luxury Hospitality',
    channel: 'Google & Meta Ads',
    url: 'https://princehoteldanang.com',
    displayUrl: 'princehoteldanang.com',
    logo: '/partner_logo/httpsprincehoteldanang.com.jpg',
    stat1: { value: '5.8x', label: 'ROAS' },
    stat2: { value: '−42%', label: 'CPA' },
    highlight: '+65% Direct Bookings',
    description:
      'Chiến lược quảng cáo đa kênh định vị thương hiệu khách sạn 5 sao biển Đà Nẵng, thúc đẩy mạnh mẽ lượt đặt phòng trực tiếp quốc tế và nội địa.',
  },
  {
    id: 'adidas-danang',
    client: 'Adidas Đà Nẵng',
    subtitle: 'Hệ thống phân phối chính hãng',
    category: 'Sportswear & Retail',
    channel: 'TikTok & Meta Ads',
    url: 'https://www.facebook.com/adidasdanang',
    displayUrl: 'facebook.com/adidasdanang',
    logo: '/partner_logo/httpswww.facebook.comadidasdanang.jpg',
    stat1: { value: '6.4x', label: 'ROAS' },
    stat2: { value: '−38%', label: 'CPA' },
    highlight: '+125% Store Footfall',
    description:
      'Tối ưu hóa các chiến dịch Short-form Video sáng tạo trên TikTok kết hợp quảng cáo vị trí địa phương, bứt phá doanh số cho chuỗi cửa hàng.',
  },
  {
    id: 'thaco-auto',
    client: 'THACO AUTO Đà Nẵng',
    subtitle: 'Showroom & Đại lý ủy quyền',
    category: 'Automotive & Mobility',
    channel: 'Performance Lead Gen',
    url: 'https://thacoautodanang.vn',
    displayUrl: 'thacoautodanang.vn',
    logo: '/partner_logo/httpsthacoautodanang.vn.jpg',
    stat1: { value: '3,400+', label: 'Qualified Leads' },
    stat2: { value: '−32%', label: 'CPL' },
    highlight: '4.9x Pipeline Value',
    description:
      'Xây dựng hệ thống phễu thu thập khách hàng đăng ký lái thử xe thông minh, tối ưu chi phí trên mỗi khách hàng tiềm năng chất lượng cao.',
  },
  {
    id: 'ayi-bistro',
    client: 'Ayi Bistro',
    subtitle: 'Contemporary Asian Cuisine',
    category: 'F&B & Fine Dining',
    channel: 'Meta Ads & Creative Content',
    url: 'https://www.facebook.com/ayibistro',
    displayUrl: 'facebook.com/ayibistro',
    logo: '/partner_logo/ayibistro.jpg',
    stat1: { value: '4.6x', label: 'ROAS' },
    stat2: { value: '−28%', label: 'CPA' },
    highlight: '+180% Reservations',
    description:
      'Kể câu chuyện văn hóa ẩm thực đặc sắc qua hình ảnh và video nghệ thuật, thu hút lượng thực khách trải nghiệm và đặt bàn tăng đột phá.',
  },
  {
    id: 'enet-education',
    client: 'Enet Education',
    subtitle: 'Viện Đào tạo Quốc tế Enet',
    category: 'EdTech & Education',
    channel: 'Google Search & Meta Ads',
    url: 'https://enet.edu.vn',
    displayUrl: 'enet.edu.vn',
    logo: '/partner_logo/httpsenet.edu.vn.jpg',
    stat1: { value: '4.2x', label: 'ROAS' },
    stat2: { value: '−35%', label: 'CPA' },
    highlight: '+210% Enrolled Students',
    description:
      'Chiến lược phễu tuyển sinh số đa kênh kết hợp SEO từ khóa chuyên sâu và quảng cáo tìm kiếm, thúc đẩy tỷ lệ chuyển đổi học viên đăng ký mới.',
  },
]

export const SelectedWorkSection: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [isHovered, setIsHovered] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchDeltaX = useRef<number>(0)
  const [gap, setGap] = useState(24)

  const sectionRef = useRef<HTMLElement>(null)

  // Reliable reveal animation on mount
  useEffect(() => {
    if (!sectionRef.current) return
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      sectionRef.current.querySelectorAll('.rv').forEach((el) => el.classList.add('in'))
      return
    }

    const els = sectionRef.current.querySelectorAll('.rv:not(.in)')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Responsive itemsPerView and gap
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setItemsPerView(1)
        setGap(16)
      } else if (width < 1120) {
        setItemsPerView(2)
        setGap(20)
      } else {
        setItemsPerView(3)
        setGap(24)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, workProjects.length - itemsPerView)
  const activeIndex = Math.min(currentIndex, maxIndex)

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      const current = Math.min(prev, maxIndex)
      return current <= 0 ? maxIndex : current - 1
    })
  }, [maxIndex])

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const current = Math.min(prev, maxIndex)
      return current >= maxIndex ? 0 : current + 1
    })
  }, [maxIndex])

  // Autoplay (paused on hover)
  useEffect(() => {
    if (isHovered || maxIndex <= 0) return
    const timer = setInterval(() => {
      handleNext()
    }, 6000)
    return () => clearInterval(timer)
  }, [isHovered, maxIndex, handleNext])

  // Touch Swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
    touchDeltaX.current = 0
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      touchDeltaX.current = e.targetTouches[0].clientX - touchStartX.current
    }
  }

  const onTouchEnd = () => {
    if (touchStartX.current === null) return
    const delta = touchDeltaX.current
    if (delta > 45) {
      handlePrev()
    } else if (delta < -45) {
      handleNext()
    }
    touchStartX.current = null
    touchDeltaX.current = 0
  }

  return (
    <section
      id="work"
      ref={sectionRef}
      className="pad relative overflow-hidden"
      style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '140px 56px 120px',
      }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#3E6B52]" />
            <span
              style={{
                fontSize: '12px',
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: '#3E6B52',
                fontWeight: 600,
              }}
            >
              Case Studies & Partners
            </span>
          </div>
          <h2
            className="serif rv"
            style={{
              margin: 0,
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 400,
              color: '#14261E',
              lineHeight: 1.05,
            }}
          >
            Selected <em style={{ color: '#3E6B52' }}>work</em>
          </h2>
          <p
            className="rv text-sm md:text-base text-[#4E5650] font-light mt-3"
            style={{ maxWidth: '580px', lineHeight: 1.6 }}
          >
            Dự án thực tế đồng hành cùng các thương hiệu hàng đầu tại Đà Nẵng và toàn quốc {'\u2014'} đo lường bằng hiệu quả và tăng trưởng bền vững.
          </p>
        </div>

        {/* Carousel Controls in Header */}
        <div className="flex items-center gap-5 shrink-0">
          <div className="text-xs font-mono text-[#5B635D] tracking-widest hidden sm:block">
            <span className="text-[#14261E] font-semibold">
              0{activeIndex + 1}
            </span>{' '}
            / 0{maxIndex + 1}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="w-12 h-12 rounded-full border border-[#14261E]/30 text-[#14261E] flex items-center justify-center hover:bg-[#14261E] hover:text-[#F2F1EA] hover:border-[#14261E] transition-all duration-300 shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next project"
              className="w-12 h-12 rounded-full border border-[#14261E]/30 text-[#14261E] flex items-center justify-center hover:bg-[#14261E] hover:text-[#F2F1EA] hover:border-[#14261E] transition-all duration-300 shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Track Container */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Overflow Hidden Window */}
        <div className="overflow-hidden py-3 -my-3 px-1 -mx-1">
          <div
            className="flex"
            style={{
              gap: `${gap}px`,
              transform: `translateX(calc(-${activeIndex} * (100% + ${gap}px) / ${itemsPerView}))`,
              transition: 'transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1)',
              willChange: 'transform',
            }}
          >
            {workProjects.map((project) => (
              <div
                key={project.id}
                style={{
                  flex: `0 0 calc((100% - ${(itemsPerView - 1) * gap}px) / ${itemsPerView})`,
                  minWidth: 0,
                }}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full bg-[#FCFBF7] rounded-2xl border border-[#DFE3D9] hover:border-[#3E6B52] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_35px_-10px_rgba(20,38,30,0.12)] p-5 sm:p-6 no-underline text-inherit flex flex-col justify-between"
                  style={{
                    boxSizing: 'border-box',
                  }}
                >
                  {/* Top Image / Logo Box */}
                  <div>
                    <div className="relative aspect-[16/9] w-full rounded-xl bg-white border border-[#E9ECE4] flex items-center justify-center p-4 sm:p-5 overflow-hidden mb-5 shadow-xs group-hover:shadow-md transition-shadow duration-300">
                      {/* Category Tag Badge */}
                      <span className="absolute top-3 left-3 z-10 text-[10px] sm:text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#F2F1EA] text-[#24543B] border border-[#D5DCD2]">
                        {project.category}
                      </span>

                      {/* External Link Hover Pill */}
                      <span className="absolute top-3 right-3 z-10 text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#14261E] text-[#F2F1EA] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                        <span>Visit</span>
                        <ExternalLink className="w-3 h-3" />
                      </span>

                      {/* Brand Logo */}
                      <img
                        src={project.logo}
                        alt={`${project.client} logo`}
                        className="max-h-[75%] max-w-[70%] object-contain filter group-hover:scale-108 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                    </div>

                    {/* Channel & Live Link row */}
                    <div className="flex items-center justify-between text-xs mb-2.5 gap-2">
                      <span className="font-semibold tracking-wider uppercase text-[#3E6B52] text-[10px] sm:text-[11px] shrink-0">
                        {project.channel}
                      </span>
                      <span className="text-[#69726A] font-mono text-[10px] sm:text-[11px] truncate max-w-[170px] flex items-center gap-1 group-hover:text-[#14261E] transition-colors">
                        <span className="truncate">{project.displayUrl}</span>
                        <ExternalLink className="w-2.5 h-2.5 shrink-0 opacity-70" />
                      </span>
                    </div>

                    {/* Client Name - Prominent and impactful */}
                    <h3
                      className="serif text-[25px] sm:text-[28px] lg:text-[30px] font-bold text-[#0D2118] group-hover:text-[#2A6546] transition-colors leading-tight mb-2.5 tracking-[-0.015em]"
                    >
                      {project.client}
                    </h3>

                    {/* Description - Full text shown without truncation */}
                    <p className="text-xs sm:text-sm text-[#5B635D] leading-relaxed font-light mb-5 min-h-[58px] sm:min-h-[66px]">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Metrics Bar */}
                  <div className="pt-4 border-t border-[#DFE3D9] mt-auto">
                    <div className="flex items-center justify-between gap-2 sm:gap-3">
                      <div>
                        <span className="block text-base sm:text-lg lg:text-xl font-semibold text-[#14261E]">
                          {project.stat1.value}
                        </span>
                        <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#69726A] whitespace-nowrap">
                          {project.stat1.label}
                        </span>
                      </div>

                      <div className="text-center">
                        <span className="block text-base sm:text-lg lg:text-xl font-semibold text-[#14261E]">
                          {project.stat2.value}
                        </span>
                        <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#69726A] whitespace-nowrap">
                          {project.stat2.label}
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold bg-[#E8EFEA] text-[#1E4D36] px-2 sm:px-2.5 py-1 rounded-md whitespace-nowrap">
                          <TrendingUp className="w-3 h-3 text-[#3E6B52] shrink-0" />
                          <span>{project.highlight}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Side Arrow Overlays (visible on desktop hover) */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 backdrop-blur-md border border-[#14261E]/15 text-[#14261E] items-center justify-center shadow-lg hover:bg-[#14261E] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer z-10"
          style={{
            opacity: isHovered ? 1 : 0,
            pointerEvents: isHovered ? 'auto' : 'none',
          }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 backdrop-blur-md border border-[#14261E]/15 text-[#14261E] items-center justify-center shadow-lg hover:bg-[#14261E] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer z-10"
          style={{
            opacity: isHovered ? 1 : 0,
            pointerEvents: isHovered ? 'auto' : 'none',
          }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-2 mt-10">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Chuyển đến trang ${idx + 1}`}
            className="h-2 rounded-full transition-all duration-400 cursor-pointer"
            style={{
              width: activeIndex === idx ? '32px' : '8px',
              backgroundColor: activeIndex === idx ? '#14261E' : '#C9CBBE',
            }}
          />
        ))}
      </div>
    </section>
  )
}
