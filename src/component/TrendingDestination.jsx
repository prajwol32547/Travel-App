import React from 'react'
import TrendingDestinationInner from './TrendingDestinationInner'

function TrendingDestination() {
  return (
    <div class="container mt-4">
        <div className="row text-center mb-3">
        <div class="col-md-12">
            <h2>Trending Destinations</h2>
            <p>Here are some of the top destinations to visit</p>
        </div>
        </div>
        <TrendingDestinationInner />
    </div>
  )
}

export default TrendingDestination