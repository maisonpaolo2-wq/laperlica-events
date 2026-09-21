import sharp from 'sharp'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const photosDir = join(__dirname, '..', 'public', 'photos')

async function crop(filename, { top = 0, bottom = 0, left = 0, right = 0 }) {
  const filepath = join(photosDir, filename)
  const image = sharp(filepath)
  const meta = await image.metadata()
  const width = meta.width
  const height = meta.height
  if (!width || !height) {
    console.error(`Could not read dimensions for ${filename}`)
    return
  }
  const cropWidth = width - left - right
  const cropHeight = height - top - bottom
  if (cropWidth <= 0 || cropHeight <= 0) {
    console.error(`Invalid crop dimensions for ${filename}: ${cropWidth}x${cropHeight}`)
    return
  }
  await image
    .extract({ left, top, width: cropWidth, height: cropHeight })
    .toFile(filepath + '.tmp.jpg')

  // Replace original with cropped
  const { rename } = await import('fs/promises')
  await rename(filepath + '.tmp.jpg', filepath)
  console.log(`Cropped ${filename}: ${width}x${height} -> ${cropWidth}x${cropHeight}`)
}

async function main() {
  await crop('hero.jpg',   { top: 160, bottom: 400 })
  await crop('tables.jpg', { top: 160, bottom: 400 })
  await crop('food.jpg',   { top: 140, bottom: 360 })
  await crop('ana.jpg',    { top: 140, bottom: 240 })
  await crop('logo.jpg',   { top: 250, bottom: 320, left: 100, right: 100 })
  console.log('All photos cropped.')
}

main().catch(err => { console.error(err); process.exit(1) })
