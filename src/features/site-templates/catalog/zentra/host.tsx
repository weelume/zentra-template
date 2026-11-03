'use client'
import {createContext, useContext, type ReactNode} from 'react'
import type {Copy} from './config'
export interface ZentraHostOptions {brandName?: Copy; logo?: string; lightLogo?: string; marketplaceHref?: string; marketplaceAriaLabel?: Copy; marketplaceLabel?: Copy; filing?: ReactNode}
const Host = createContext<ZentraHostOptions>({})
/** 品牌和宿主入口由消费方注入，通用页面不依赖消费方环境。 */
export function ZentraHostProvider({children,...options}:ZentraHostOptions & {children:ReactNode}) {return <Host.Provider value={options}>{children}</Host.Provider>}
export const useZentraHost = () => useContext(Host)
