
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'normalize.css'

import fetch from 'isomorphic-unfetch'

import { Layout } from '../components/shared/Layout/Layout'
import { CarCardsContainer } from '../containers/CarCardsContainer'


export const App = ({ data }) => {

  return (
    <Layout>
      <CarCardsContainer initialData={data} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://maximum.expert/api/stock-test?brand=Audi`)
  const data = await res.json()
  return { props: { data } }
}

export default App
