import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducers';

import * as fromTodo from './todo/todo.reducers';
import * as fromFiltro from './filter/filter.reducer';

import * as fromFiltroActions from './filter/filter.actions';
export interface AppState {
    todos: Todo[];
    filtro: fromFiltroActions.filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filtro: fromFiltro.filtroReducer
}