'use client'

import { memo, useState } from 'react'

function Swatch({ color }: { color: string }) {
  console.log(`Swatch ${color} rendered`)
  return (
    <div
      style={{ margin: 2, width: 75, height: 75, backgroundColor: color }}
    ></div>
  )
}

const MemoedSwatch = memo(Swatch)

function Home() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('red')
  console.log(`App rendered ${count} times`)
  return (
    <main className="flex items-center justify-center min-h-screen flex-col">
      <div className="flex gap-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Re-render app {count}
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setColor(color === 'red' ? 'blue' : 'red')}
        >
          Change color
        </button>
      </div>
      <div className="flex gap-x-4 mt-4">
        <div className="flex flex-col items-center">
          <p>Normal component</p>
          <Swatch color={color} />
        </div>
        <div className="flex flex-col items-center">
          <p>Memoed component</p>
          <MemoedSwatch color={color} />
        </div>
      </div>
    </main>
  )
}

export default Home
