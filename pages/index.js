import Nav from '../components/nav'
import LotusRPCEngine from '@glif/filecoin-rpc-client'
import { useState, useEffect } from 'react'

export default function IndexPage() {
  const lotus = new LotusRPCEngine({
    apiAddress: 'https://api.node.glif.io',
  })

  const [chainHeight, setChainHeight] = useState('')
  useEffect(() => {
    async function fetchData() {
      const { Height } = await lotus.request('ChainHead')
      console.log('HEAD')
      setChainHeight(Height)
    }
    fetchData()
  }, [])

  return (
    <div>
      <Nav />
      <div className='py-20'>
        <h1 className='text-5xl text-center text-accent-1'>
          Filecoin Launch {chainHeight}
        </h1>
      </div>
    </div>
  )
}
