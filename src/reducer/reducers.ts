import { Actions, ActionType, IsChildrenShow, LoadRootChildren, LoadNewChildren } from "./actions";
import { Directory } from "./state";

const walkThree = (array: Directory[], id: number, newChildren: Directory[] | boolean) => {
    return array.filter((item) => {
        if (item.id === id) {
           if(typeof(newChildren) === 'boolean') item.showChildren = newChildren
           else item.children = newChildren
        }

        else if (item.children){
            item.children && walkThree(item.children, id, newChildren)
        } return item
    })
}

export function reducer(state: Directory[], action: Actions): Directory[] {
    switch (action.type) {
        case ActionType.LOAD_ROOT_CHILDREN:
            return action.payload;

        case ActionType.LOAD_NEW_CHILDREN:
            return walkThree(state, action.payload.id, action.payload.data)

        case ActionType.IS_CHILDREN_SHOW:
               return walkThree(state, action.payload.id, action.payload.showChildren)
               
        default:
            return state;
    }
}

export const loadRootChildren = (data: Directory[]): LoadRootChildren => ({
    type: ActionType.LOAD_ROOT_CHILDREN,
    payload: data,
});

export const isChildrenShow = (id: number, showChildren: boolean): IsChildrenShow => ({
    type: ActionType.IS_CHILDREN_SHOW,
    payload: { id, showChildren },
});

export const loadNewChildren = (id: number, data: Directory[]): LoadNewChildren => ({
    type: ActionType.LOAD_NEW_CHILDREN,
    payload: { id, data }
});