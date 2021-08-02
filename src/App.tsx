import React, { useEffect, useReducer, useCallback} from 'react'
import { getNewChildren, getRootChildren } from './api/functions'
import { loadRootChildren, reducer, isChildrenShow, loadNewChildren } from './reducer/reducers'

import { Directory } from './reducer/state'
const initialState: Directory[] = []

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const getDirectories = async () => {
      const newDirectories = await getRootChildren()
      dispatch(loadRootChildren(newDirectories))
    }
    getDirectories()
  }, [])

  const onClick = useCallback(async (isEnanled: boolean, id: number, showChildren: boolean | undefined) => {
    if (!isEnanled) return
    else if (showChildren === undefined) {
      const newChildren = await getNewChildren(id)
      dispatch(loadNewChildren(id, newChildren))
    } 
    dispatch(isChildrenShow(id, !showChildren))
  }, [])

  const renderMenu = (menu: Directory[]) => {
    return menu.map((item) => (
        <div key={item.title} style={{ marginLeft: '25px' }}>
            <p onClick={() => onClick(!!item.children, item.id, item.showChildren)}>{item.title}</p>
            {item.showChildren && item.children && renderMenu(item.children)}
        </div>
    ))
  }


  console.log(state)

  return (
    <div>
      <ul>
        {renderMenu(state)}
      </ul>
    </div>
  );
}

export default App;
