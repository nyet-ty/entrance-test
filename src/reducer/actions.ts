import { Directory } from "./state";

export enum ActionType {
    LOAD_ROOT_CHILDREN = 'LOAD_ROOT_CHILDREN',
    LOAD_NEW_CHILDREN = 'LOAD_NEW_CHILDREN',
    IS_CHILDREN_SHOW = 'IS_CHILDREN_SHOW'
}

export interface LoadRootChildren {
    type: ActionType.LOAD_ROOT_CHILDREN;
    payload: Directory[]
}

export interface LoadNewChildren {
    type: ActionType.LOAD_NEW_CHILDREN;
    payload: { id: number, data: Directory[] };
}

export interface IsChildrenShow {
    type: ActionType.IS_CHILDREN_SHOW;
    payload: { id: number, showChildren: boolean };
}

export type Actions = LoadRootChildren | LoadNewChildren | IsChildrenShow