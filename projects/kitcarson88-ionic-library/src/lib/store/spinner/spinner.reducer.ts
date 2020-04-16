import { SpinnerState, INITIAL_STATE_SPINNER } from './spinner.model';
import { SpinnerActions, SpinnerAction } from './spinner.actions';
export function spinnerReducer(state: SpinnerState = INITIAL_STATE_SPINNER, action: SpinnerAction): SpinnerState
{
    switch (action.type)
    {
        case SpinnerActions.SHOW_SPINNER:
            return true;
        case SpinnerActions.HIDE_SPINNER:
            return false;
    }

    return state;
}
