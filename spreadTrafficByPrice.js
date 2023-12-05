
const ads = [
  { name: 'ad1', price: 1.8, show: 0 },
  { name: 'ad2', price: 1.55, show: 0 },
  { name: 'ad3', price: 1.13, show: 0 },
  { name: 'ad4', price: 0.48, show: 0 },
]

function spreadTrafficByPrice(banners) {
  const totalPrice = banners.reduce((sum, ad) => sum + ad.price, 0)

  for (let i = 0; i < banners.length; i++) {
    const chance = banners[i].price / totalPrice
    if (Math.random() <= chance) {
      banners[i].show += 1
    }
  }
}

console.time('time')
for (let i = 0; i < 1000000; i++) {
  spreadTrafficByPrice(ads)
}
console.timeEnd('time')
console.log(ads)


const ads2 = [
  { name: 'ad1', price: 1.8, show: 0 },
  { name: 'ad2', price: 1.55, show: 0 },
  { name: 'ad3', price: 1.13, show: 0 },
  { name: 'ad4', price: 0.48, show: 0 },
]

function spreadTrafficByPrice2(banners) {
  const totalPrice = banners.reduce((sum, ad) => sum + ad.price, 0)
  const prices = banners.map(ad => ad.price)
  let selectedPrice = null
  let cumulative = 0
  let random = Math.random()

  for (const price of prices) {
    cumulative += price / totalPrice
    if (random <= cumulative) {
      selectedPrice = price
      break
    }
  }

  function binarySearchReversed(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (arr[mid].price === target) {
        return mid
      } else if (arr[mid].price < target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return -1
  }
  let idx = binarySearchReversed(banners, selectedPrice)
  banners[idx].show += 1
}
console.time('time')
for (let i = 0; i < 1000000; i++) {
  spreadTrafficByPrice2(ads2)
}
console.timeEnd('time')
console.log(ads2)


const ads3 = [
  { name: 'ad1', price: 1.8, show: 0 },
  { name: 'ad2', price: 1.55, show: 0 },
  { name: 'ad3', price: 1.13, show: 0 },
  { name: 'ad4', price: 0.48, show: 0 },
]

function spreadTrafficByPrice3(banners) {
  let minShows = Infinity
  let selectedAd = null
  banners.forEach((ad) => {
    let show = ad.show
    let price = ad.price
    let effectiveShowing = show / price
    if (effectiveShowing < minShows) {
      minShows = effectiveShowing
      selectedAd = ad
    }
  })
  selectedAd.show += 1
}
console.time('time')
for (let i = 0; i < 1000000; i++) {
  spreadTrafficByPrice3(ads3)
}
console.timeEnd('time')
console.log(ads3)


const ads4 = [
  { name: 'ad1', price: 1.8, show: 0 },
  { name: 'ad2', price: 1.55, show: 0 },
  { name: 'ad3', price: 1.13, show: 0 },
  { name: 'ad4', price: 0.48, show: 0 },

]
function spreadTrafficByPrice4(banners) {
  let firstAdIdx = Math.floor(Math.random() * banners.length)
  let secondAdIdx = Math.floor(Math.random() * banners.length)

  while (secondAdIdx === firstAdIdx) {
    secondAdIdx = Math.floor(Math.random() * banners.length)
  }
  const totalPrice = banners[firstAdIdx].price + banners[secondAdIdx].price
  const randomPrice = (Math.random() * totalPrice)

  if (randomPrice <= banners[firstAdIdx].price) {
    banners[firstAdIdx].show += 1
  } else {
    banners[secondAdIdx].show += 1
  }
}
console.time('time')
for (let i = 0; i < 1000000; i++) {
  spreadTrafficByPrice4(ads4)
}
console.timeEnd('time')
console.log(ads4)


const ads5 = [
  { name: 'ad1', price: 1.8, show: 0 },
  { name: 'ad2', price: 1.55, show: 0 },
  { name: 'ad3', price: 1.13, show: 0 },
  { name: 'ad4', price: 0.48, show: 0 },
]

function spreadTrafficByPrice5(banners) {
  const totalWeight = banners.reduce((sum, ad) => sum + ad.price, 0);
  const random = Math.random() * totalWeight;
  let cumulative = 0;

  for (let i = 0; i < banners.length; i++) {
    cumulative += banners[i].price;
    if (random <= cumulative) {
      banners[i].show += 1;
      break
    }
  }
}
console.time('time')
for (let i = 0; i < 1000000; i++) {
  spreadTrafficByPrice5(ads5)
}
console.timeEnd('time')
console.log(ads5)
