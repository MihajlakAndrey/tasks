const timeIntervals = [
  { from: '2023-05-30T05:56:28+00:00', to: '2023-05-30T05:57:10+00:00' },
  { from: '2023-05-30T06:01:01+00:00', to: '2023-05-30T06:49:31+00:00' },
  { from: '2023-05-30T07:04:21+00:00', to: '2023-05-30T07:05:26+00:00' },
  { from: '2023-05-30T08:27:42+00:00', to: '2023-05-30T08:28:52+00:00' },
  { from: '2023-05-30T08:29:43+00:00', to: '2023-05-30T08:31:28+00:00' },
  { from: '2023-05-30T10:19:15+00:00', to: '2023-05-30T10:21:02+00:00' },
  { from: '2023-05-30T16:50:26+00:00', to: '2023-05-30T16:50:49+00:00' },
  { from: '2023-05-30T17:03:12+00:00', to: '2023-05-30T17:04:24+00:00' },
  { from: '2023-05-30T17:05:11+00:00', to: '2023-05-30T17:05:55+00:00' },
  { from: '2023-05-30T19:29:46+00:00', to: '2023-05-30T19:31:04+00:00' },
  { from: '2023-05-30T20:42:28+00:00', to: '2023-05-30T20:43:31+00:00' },
]

let ballMinSize = 20

let ballStyle = {
  minWidth: ballMinSize + 'px',
  minHeight: ballMinSize + 'px',
  backgroundColor: 'rgb(0, 183, 138)',
  margin: '5px 0px',
  borderRadius: '50px',
  opacity: '0.7',
}

function App() {
  const allDayInMs = 24 * 60 * 60 * 1000
  const fiftinminutesInMS = 15 * 60 * 1000

  const today = new Date('2023-05-30T00:00:00+00:00')
  const tomorrow = new Date('2023-05-31T00:00:00+00:00')

  let group = [timeIntervals[0]]
  let result = []
  for (let i = 1; i < timeIntervals.length; i++) {
    const currentInterval = timeIntervals[i]
    const previousInterval = timeIntervals[i - 1]

    if (
      new Date(currentInterval.from) - new Date(previousInterval.to) <=
      fiftinminutesInMS
    ) {
      group.push(currentInterval)
    } else {
      result.push(group)
      group = [currentInterval]
    }
  }
  result.push(group)

  result = result.reduce((acc, el, idx, thisArr) => {
    let current = new Date(el[el.length - 1].to)
    let next =
      idx === thisArr.length - 1 ? tomorrow : new Date(thisArr[idx + 1][0].from)

    acc.push(el, [
      { from: current.toISOString(), to: next.toISOString(), inHome: true },
    ])
    return acc
  }, [])

  result.unshift([
    {
      from: today.toISOString(),
      to: result[0][0].from,
      inHome: true,
    },
  ])

  let elements = result.map((interval, idx) => {
    let check = interval.length === 1 ? true : false
    let width = check
      ? new Date(interval[0].to) - new Date(interval[0].from)
      : new Date(interval[interval.length - 1].to) - new Date(interval[0].from)
    width = (width / allDayInMs) * 100
    if (check) {
      let styles = interval[0].inHome ? {} : ballStyle
      return (
        <div key={idx} style={{...styles, width: width + '%', }}></div>
      )
    } else {
      return (
        <div key={idx} style={{ display: 'flex', width: width + '%' }}>
          {interval.map((element, elemIdx) => {
            let ballWidth = new Date(element.to) - new Date(element.from)
            ballWidth = (ballWidth / allDayInMs) * 100
            let percentFromParentWidth = (ballWidth / width) * 100
            return (
              <div
                key={elemIdx + idx}
                style={{
                  ...ballStyle,
                  width: percentFromParentWidth + '%',
                  marginRight: (ballMinSize / 2) * -1 + 'px',
                }}
              ></div>
            )
          })}
        </div>
      )
    }
  })

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>Tue 30 May</p>
        <p>{timeIntervals.length} visits</p>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          backgroundColor: 'rgb(181, 233, 221)',
          borderRadius: '50px',
        }}
      >
        {elements.map((element) => element)}
      </div>
    </div>
  )
}

export default App
