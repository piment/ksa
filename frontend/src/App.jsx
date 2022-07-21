import { useState } from 'react'
import Index from './pages/Index'
import Layout from './components/common/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Index />
    </Layout>
    
  )
}

export default App
