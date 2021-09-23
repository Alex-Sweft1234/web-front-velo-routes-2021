const inputFolder = 'src/img'

const imagemin = require('imagemin-keep-folder')
const imageminWebp = require('imagemin-webp')
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')

const colors = {
  reset: '\033[0m',
  green: '\033[32m',
  cyan: '\033[36m',
}

const run = async () => {
  try {
    console.log(colors.cyan + 'Images *.png,*.jpg optimization start...' + colors.reset)
    await imagemin([inputFolder + '/**/*.{png,jpg}'], {
      use: [
        imageminMozjpeg({ quality: 80, progressive: true }),
        imageminPngquant({ speed: 7, quality: [0.8, 1], strip: true }),
      ],
      replaceOutputDir: (output) => output.replace(/src\//, 'src/'),
    })

    console.log(colors.green + 'Images *.png,*.jpg optimized!' + colors.reset)
    toWebp()
  } catch (error) {
    console.error(error)
  }
}

const toWebp = async () => {
  try {
    console.log(colors.cyan + 'Copy & convert to Webp start...' + colors.reset)
    await imagemin([inputFolder + '/**/*.{jpg,png}'], {
      use: [imageminWebp({ quality: 90, preset: 'photo', method: 4 })],
      replaceOutputDir: (output) => output.replace(/src\//, 'src/') + '.webp',
    })

    console.log(colors.green + 'Images to Webp converted!' + colors.reset)
  } catch (error) {
    console.error(error)
  }
}

run()