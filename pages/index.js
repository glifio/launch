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
        console.log('height', Height)
        setChainHeight(Height)
      }, 3000)
    }
    poll()
  }, [])

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage:
          'radial-gradient(circle at 50% -47%, hsl(226.29999999999995, 66%, 20.8%) 39%, hsla(64.69999999999999, 72.6%, 41.6%, 0) 100%), linear-gradient(179deg, hsl(51.5, 89.2%, 78.2%) 23%, #CC6966 100%)',
      }}
    >
      {/* <Nav /> */}
      {chainHeight && (
        <div className='py-20'>
          <h1
            className='text-center text-accent-1'
            style={{
              color: 'white',
              fontFamily: 'RT-Alias-Medium',
              fontSize: '5rem',
            }}
            // class='animate animate-1'
          >
            Filecoin Mainnet launches on block 148,888
            {/* <Transition
              from={{ transform: 'translate3d(0,-40px,0)' }}
              enter={{ transform: 'translate3d(0,0px,0)' }}
              leave={{ transform: 'translate3d(0,-40px,0)' }}
            >
              <div>test</div>
            </Transition> */}
          </h1>

          <h1
            className='text-center text-accent-1'
            style={{
              color: 'white',
              fontFamily: 'RT-Alias-Medium',
              fontWeight: '700',
              fontSize: '5rem',
            }}
          >
            {mainnetHeight - chainHeight} blocks to go
          </h1>
        </div>
      )}
    </div>
  )
}
