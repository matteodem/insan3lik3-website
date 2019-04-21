const fs = require('fs')
const download = require('download')
const slugify = require('slugify')

const rootDir = `${__dirname}/..`

const buffer = fs.readFileSync(`${rootDir}/stuff/tracks-export/tracks.json`)

const bufferTwo = fs.readFileSync(`${rootDir}/stuff/tracks-export/tracks_2.json`)

const items = [
  ...JSON.parse(buffer.toString()).items,
  ...JSON.parse(bufferTwo.toString()).items,
]

const slugifyName = name => slugify(name).toLowerCase()
const generateCoverFileName = ({ id, name }) => `${id}_${slugifyName(name)}.jpg`
const getWithArtistsText = artists => `(with ${artists.map(({ name }) => name).filter((name) => name !== 'Insan3lik3').join(', ')})`
const getMarkupTitle = ({ name, artists }) => `# ${name} ${ artists.length > 1 ? getWithArtistsText(artists) : ''}`.trim()

const generateMarkupContent = (item) => `---
type: music
image: /images/cover/${generateCoverFileName(item)}
date: ${item.release_date}
links:
    - ${item.external_urls.spotify}
---

${getMarkupTitle(item)}
`

const downloadImage = async function (item) {
  return await download(item.images[0].url).then(data => {
    fs.writeFileSync(`${rootDir}/static/images/cover/${generateCoverFileName(item)}`, data)
  })
}

const shouldProcessItem = ({ name, album_group }) => (album_group !== 'appears_on' && name.indexOf('feat.') === -1)

const processItem = async function (items, numberOfItem = 1) {
  if (items.length === 0) return 'Finished'

  const nextItem = items.shift()

  // some clean up of "bad data"
  nextItem.name = nextItem.name.replace('(feat. Temu)', '').trim()

  if (shouldProcessItem(nextItem)) {
    console.log(`Processing item #${numberOfItem}`)

    await downloadImage(nextItem)

    fs.writeFileSync(
      `${rootDir}/stuff/Music/${nextItem.release_date}_${slugifyName(nextItem.name)}.md`,
      generateMarkupContent(nextItem)
    )
    await new Promise(resolve => setTimeout(resolve, 1000))

  }
  await processItem(items, numberOfItem + 1)
}

console.log(`Starting the process of ${items.length} items`)

processItem(items).then(console.log)
