import { useState } from 'react';
import '../App.css';
import Square from './Square';

function ColorGrid() {
  const arr = [
    {
      id: 0,
      name: 'sq1',
      isColor: '',
    },
    {
      id: 1,
      name: 'sq2',
      isColor: '',
    },
    {
      id: 2,
      name: 'sq3',
      isColor: '',
    },
    {
      id: 3,
      name: 'sq4',
      isColor: '',
    },
    {
      id: 4,
      name: 'sq5',
      isColor: '',
    },
    {
      id: 5,
      name: 'sq6',
      isColor: '',
    },
    {
      id: 6,
      name: 'sq7',
      isColor: '',
    },
    {
      id: 7,
      name: 'sq8',
      isColor: '',
    },
    {
      id: 8,
      name: 'sq9',
      isColor: '',
    }
  ]

  const [squareBuffer, setSquareBuffer] = useState(arr)


  const changeColor = (idx) => {

    function getColor() {
      return Math.random().toString(16).slice(2, 8)
    }
    const resultantArray = squareBuffer?.map((squareItem) => (
      squareItem.id === idx ? { ...squareItem, isColor: getColor() } : squareItem
    ))
    setSquareBuffer(resultantArray)
  }



  return (
    <div className='color-grid'>
      <h1> 1: Color Grid Box </h1>
      <div className="main-container">

        {
          squareBuffer?.map((sqrItem, index) => {
            return (
              <div key={index} className="square-container" onClick={ () => {sqrItem?.isColor === '' &&  changeColor(index)}}>
                <Square sqrItem={sqrItem} />
              </div>
            )
          })
        }
      </div>
      <div style={{marginTop : '5%'}}>
        <b>
          Problem:
          Create a 3x3 grid of boxes. Clicking on a box should change its color to a random color.
        </b>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          Hints:
          <span>
            1️⃣ Use useState to track the colors of each box.
          </span>
          <span>
            2️⃣ Generate random colors using Math.random().toString(16).slice(2, 8).
          </span>
          <span>
            3️⃣ Update the state when a box is clicked.
          </span>
        </div>
      </div>

    </div>
  );
}

export default ColorGrid;
