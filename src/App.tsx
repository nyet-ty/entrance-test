import React, { useEffect, useReducer } from 'react'
import { getRootChildren } from './api/functions'
import { loadRootChildren, reducer } from './reducer/reducers'

import { Data } from './reducer/state'
const initialState: Data[] = []

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const getData = async () => {
      const newData = await getRootChildren()
      dispatch(loadRootChildren(newData))
    }
    getData()
  }, [])

  return (
    <div>
        <ul>
          {state.map((item) => (
            <li key={item.title}>{item.title}</li>
          ))}
        </ul>
    </div>
  );
}

export default App;
