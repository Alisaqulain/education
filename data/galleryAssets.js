/** Media in `public/gallary` (folder spelling matches repo). */

export const GALLERY_FOLDER = '/gallary'

export function gallerySrc(filename) {
  return `${GALLERY_FOLDER}/${encodeURIComponent(filename)}`
}

export const GALLERY_FILES = {
  image1: 'WhatsApp Image 2026-05-13 at 3.37.02 PM.jpeg',
  image2: 'WhatsApp Image 2026-05-13 at 3.37.03 PM (1).jpeg',
  image3: 'WhatsApp Image 2026-05-13 at 3.37.03 PM.jpeg',
  image4: 'WhatsApp Image 2026-05-13 at 3.37.04 PM (1).jpeg',
  image5: 'WhatsApp Image 2026-05-13 at 3.37.04 PM.jpeg',
  video1: 'WhatsApp Video 2026-05-13 at 3.37.03 PM.mp4',
}

export const GALLERY_IMAGES = [
  GALLERY_FILES.image1,
  GALLERY_FILES.image2,
  GALLERY_FILES.image3,
  GALLERY_FILES.image4,
  GALLERY_FILES.image5,
]
