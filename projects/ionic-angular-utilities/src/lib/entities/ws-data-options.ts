import { Observable } from 'rxjs';

export interface WsDataOptions {
    loading$: Observable<boolean>;
    loadingSpinnerWithContainer?: boolean;
    loadingSpinnerName?: 'rotatingSquare' | 'chasingDot' | 'doubleBouncingDot' | 'stretchingBars' | 'chasingSquares' | 'scalingDot' | 'doubleRotatingDot' | 'threeBouncingDots' | 'rotatingDotCircle' | 'fadingSquare' | 'simpleSpinner' | 'foldingSquare';
    
};