import { Observable } from 'rxjs';

export interface WsDataOptions {
    loading$: Observable<boolean>;
    loadingSpinnerWithContainer?: boolean;
    loadingSpinnerName?: 'rotatingSquare' | 'chasingDot' | 'doubleBouncingDot' | 'stretchingBars' | 'chasingSquares' | 'scalingDot' | 'doubleRotatingDot' | 'threeBouncingDots' | 'rotatingDotCircle' | 'fadingSquare' | 'simpleSpinner' | 'foldingSquare';
    error$: Observable<any>;
    errorMessage: string;
    errorRetryButtonLabel?: string;
    errorRetryButtonFill?: 'clear' | 'outline' | 'solid';
    errorRetryButtonShape?: 'round';
    errorRetryButtonColor?: string;
};