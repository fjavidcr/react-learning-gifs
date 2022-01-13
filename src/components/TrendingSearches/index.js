import { useEffect, useState } from "react"
import GhipyApi from '../../services/GhipyApi'
import LinkList from "../LinkList"

export default function TrendingSearches() {
  const [trends, setTrends] = useState([])

  useEffect(function () {
    GhipyApi.getTrendingTerms().then(setTrends)
  }, [])

  return <LinkList title='Tendencias' items={trends} />
}