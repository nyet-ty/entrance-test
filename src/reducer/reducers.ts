import { Actions, ActionType, LoadRootChildren } from "./actions";
import { Data } from "./state";

export function reducer(state: Data[], action: Actions): Data[] {
    switch (action.type) {
        case ActionType.LOAD_ROOT_CHILDREN:
            return action.payload;

        default:
            return state;
    }
}

export const loadRootChildren = (data: Data[]): LoadRootChildren => ({
    type: ActionType.LOAD_ROOT_CHILDREN,
    payload: data,
});