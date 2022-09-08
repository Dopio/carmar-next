import useSWR from 'swr'

import { CardsList } from '../components/CardsList/CardsList'
import { Menu } from '../components/Menu/Menu'
import { useState } from 'react'
import { brandList } from '../constants/brands'
import { getCarListUrl } from '../urls/cars'

/* Контейнер работы с карточками автомобиля */
export const CarCardsContainer = ({ initialData }) => {

  const [data, setData] = useState(initialData)
  const [brand, setBrand] = useState(brandList[0])

  const getCars = async (brand) => {
    const response = await fetch(`https://maximum.expert/api/stock-test?brand=${brand}`)
    const data = await response.json()
    setData(data)
    setBrand(brand)
  }

  return (
    <>
      <Menu
        brand={brand}
        setBrand={setBrand}
        getCarListUrl={getCarListUrl}
        getCars={getCars}
      />
      <CardsList
        loading={!data}
        data={data}
        initialData={initialData}
      />
    </>
  )
}
