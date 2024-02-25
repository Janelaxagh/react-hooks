import { StateTutorial } from './hooks/useState/StateTutorial'
import { EffectTutorial } from './hooks/useEffect/EffectTutorial'
import { RefTutorial } from './hooks/useRef/RefTutorial'
import { ReducerTutorial } from './hooks/useReducer/ReducerTutorial'
import { MemoTutorial } from './hooks/useMemo/MemoTutorial'
import { LayoutEffectTutorial } from './hooks/useLayoutEffect/LayoutEffectTutorial'
import { CallbackTutorial } from './hooks/useCallback/CallbackTutorial'

export const App = () => {
  return (
    <div>
     <StateTutorial />
     <EffectTutorial />
     <RefTutorial />
     <ReducerTutorial />
     <MemoTutorial />
     <LayoutEffectTutorial />
     <CallbackTutorial />
    </div>
  )
}