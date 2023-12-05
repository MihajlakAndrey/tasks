
const ads = [
  { name: 'ad1', price: 1.8, show: 0 },
  { name: 'ad2', price: 1.55, show: 0 },
  { name: 'ad3', price: 1.13, show: 0 },
  { name: 'ad4', price: 0.48, show: 0 },
]

function spreadTrafficEvenly(banners) {
  let totalShow = 0
  for (let i = 0; i < banners.length; i++) {
    totalShow += banners[i].show
  }
  let idx = totalShow % banners.length
  banners[idx].show += 1
}
console.time('time')
for (let i = 0; i < 1000000; i++) {
  spreadTrafficEvenly(ads)
}
console.timeEnd('time')
console.log(ads)


const ads2 = [
  { name: 'ad1', price: 1.8, show: 0 },
  { name: 'ad2', price: 1.55, show: 0 },
  { name: 'ad3', price: 1.13, show: 0 },
  { name: 'ad4', price: 0.48, show: 0 },
]

function spreadTrafficEvenly2(banners) {
  let randomIndex = Math.floor(Math.random() * banners.length)
  banners[randomIndex].show += 1
}
console.time('time')
for (let i = 0; i < 1000000; i++) {
  spreadTrafficEvenly2(ads2)
}
console.timeEnd('time')
console.log(ads2)


const ads3 = [
  { name: 'ad1', price: 1.8, show: 0 },
  { name: 'ad2', price: 1.55, show: 0 },
  { name: 'ad3', price: 1.13, show: 0 },
  { name: 'ad4', price: 0.48, show: 0 },
]

function spreadTrafficEvenly3(banners) {
  let selectedAd = null
  let minimumShows = Infinity
  for (let ad of banners) {
    if (ad.show < minimumShows) {
      selectedAd = ad
      minimumShows = ad.show
    }
  }
  selectedAd.show += 1
}

console.time('time')
for (let i = 0; i < 1000000; i++) {
  spreadTrafficEvenly3(ads3)
}
console.timeEnd('time')
console.log(ads3)


const ads4 = [
  { name: 'ad1', price: 1.8, show: 0 },
  { name: 'ad2', price: 1.55, show: 0 },
  { name: 'ad3', price: 1.13, show: 0 },
  { name: 'ad4', price: 0.48, show: 0 },
]

function spreadTrafficEvenly4(banners) {
  const sortedServers = banners.slice().sort((a, b) => a.show - b.show)
  sortedServers[0].show += 1
}
console.time('time')
for (let i = 0; i < 1000000; i++) {
  spreadTrafficEvenly4(ads4)
}
console.timeEnd('time')
console.log(ads4)

