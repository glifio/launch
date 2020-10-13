import Nav from '../components/nav'
import LotusRPCEngine from '@glif/filecoin-rpc-client'
import { useState, useEffect } from 'react'
let inited = false
export default function IndexPage() {
  const lotus = new LotusRPCEngine({
    apiAddress: 'https://api.node.glif.io',
  })
  const [chainHeight, setChainHeight] = useState('')
  const mainnetHeight = 148888

  async function init() {
    const { Height } = await lotus.request('ChainHead')
    setChainHeight(Height)
    inited = true
  }
  if (!inited) init()

  useEffect(() => {
    async function poll() {
      setInterval(async () => {
        const { Height } = await lotus.request('ChainHead')
        setChainHeight(Height)
      }, 10000)
    }
    poll()
  }, [])

  return (
    <div>
      {/* <Nav /> */}
      <div className='py-20'>
        {chainHeight && (
          <h1 className='text-5xl text-center text-accent-1'>
            Filecoin Mainnet launches on block {chainHeight}
            <p>{mainnetHeight - chainHeight} blocks to go</p>
          </h1>
        )}
      </div>
    </div>
  )
}
