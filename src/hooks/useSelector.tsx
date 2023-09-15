import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux'
import { getStoreType } from '@/store/index'

type GetStateFnType = typeof getStoreType
type RootState = ReturnType<GetStateFnType>

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
