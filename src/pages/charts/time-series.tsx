import React, { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import Logo from '../../assets/logoCircle100.svg'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Container } from '../../styles/pages/charts/TimeSeries'
import { useFetch } from '../../hooks/useFetch'

const startOptions = {
  chart: {
    zoomType: 'x'
  },
  title: {
    text: 'USD to EUR exchange rate over time'
  },
  subtitle: {
    text: 'Pinch the chart to zoom in'
  },
  xAxis: {
    type: 'datetime'
  },
  yAxis: {
    title: {
      text: 'Exchange rate'
    }
  },
  legend: {
    enabled: false
  },

  series: [
    {
      type: 'area',
      name: 'USD to EUR',
      data: []
    }
  ]
}

type IData = number[]

const TimeSeries: React.FC = () => {
  const { data, error } = useFetch<IData[]>(
    'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json'
  )
  console.log(data)

  const updatedOptions = useMemo(() => {
    const currentOptions = startOptions
    currentOptions.series[0].data = data

    return currentOptions
  }, [data])

  if (!data) {
    return <p>Carregando...</p>
  }

  return (
    <Container>
      <Head>
        <title>Timeseries</title>
      </Head>

      <main>
        <Logo />
        <h1>My First Chart</h1>
        <HighchartsReact highcharts={Highcharts} options={updatedOptions} />
      </main>

      <footer>
        <a
          href="https://github.com/amaralc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by ...
        </a>
      </footer>
    </Container>
  )
}

export default TimeSeries
