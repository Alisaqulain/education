/** Site-wide marketing config */
export const SITE = {
  name: 'Myndveda',
  tagline: 'Mind, movement & learning — together.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://myndveda.com',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_E164 || '919876543210',
  whatsappDisplay: process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY || '+91 98765 43210',
  phone: '+91 98765 43210',
  supportEmail: 'hello@myndveda.com',
}

/** All hero / background videos in /public (rotated on home) */
export const HERO_VIDEO_FILES = [
  '/5183279-hd_1920_1080_30fps.mp4',
  '/4494801-uhd_3840_2160_25fps.mp4',
  '/6671234-uhd_2732_1026_25fps.mp4',
  '/6985520-uhd_3840_2160_25fps.mp4',
  '/6985691-uhd_3840_2160_25fps.mp4',
  '/6986095-uhd_2160_3840_25fps.mp4',
  '/uhd_25fps.mp4',
]

/** @deprecated use HERO_VIDEO_FILES — kept for any old imports */
export const HERO_VIDEO_SRC = HERO_VIDEO_FILES[0]
export const HERO_VIDEO_SRC_UHD = HERO_VIDEO_FILES[1]

export function waLink(text = 'Hi, I want to know more about Myndveda programs.') {
  const q = encodeURIComponent(text)
  return `https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}?text=${q}`
}
