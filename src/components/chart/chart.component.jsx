import React from 'react'

const ChartComponent = props => {
  return (
    <div>
        <div className='col-md-6 text-center'>
            <h5 className='my-3 box-title'>Carrot Available On System</h5>
            <div id='chartdiv' style={{overflow:"hidden", textAlign:"left"}}>
                <div className='amchart-main-div' style={{position:"relative"}}>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

ChartComponent.propTypes = {}

export default ChartComponent