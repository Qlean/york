import React, { createContext, useState, useCallback, useContext, useEffect, Fragment, ReactNode } from 'react'

type GateNameType = string
type PortalCargoType = ReactNode
type PortalsStorageType = Record<GateNameType, PortalCargoType>
type ExitsType = GateNameType[]
type MakeTunnel = (name: GateNameType, element: PortalCargoType) => void
type CloseTunnel = (name: GateNameType) => void
type RegisterExit = (name: GateNameType) => void 
type UnregisterExit = (name: GateNameType) => void 

interface PortalContext {
  dataMap: PortalsStorageType
  makeTunnel: MakeTunnel
  closeTunnel: CloseTunnel
  exits: ExitsType
  registerExit: RegisterExit
  unregisterExit: UnregisterExit
}

const portalContext = createContext<PortalContext>({
  dataMap: {},
  makeTunnel: () => null,
  closeTunnel: () => null,
  exits: [],
  registerExit: () => null,
  unregisterExit: () => null,
})

type ProviderProps = { children: ReactNode }

const PortalProvider: React.FC<ProviderProps> = ({ children }) => {
  const [dataMap, setData] = useState<PortalsStorageType>({})

  const makeTunnel = useCallback<MakeTunnel>(
    (gateName, element) => {
      dataMap[gateName] = element

      setData({ ...dataMap })
    },
    [dataMap],
  )
  const closeTunnel = useCallback<CloseTunnel>(
    gateName => {
      delete dataMap[gateName]

      setData({ ...dataMap })
    },
    [dataMap],
  )

  const [exits, setExit] = useState<ExitsType>([])

  const registerExit = useCallback<RegisterExit>(
    name => {
      if (exits.includes(name)) {
        return
      }

      exits.push(name)

      setExit([...exits])
    },
    [exits],
  )

  const unregisterExit = useCallback<UnregisterExit>(
    name => {
      if (!exits.includes(name)) {
        return
      }

      const idx = exits.findIndex(value => value === name)
      exits.splice(idx, 1)

      setExit([...exits])
    },
    [exits],
  )

  return (
    <portalContext.Provider
      value={{
        dataMap,
        exits,
        makeTunnel,
        closeTunnel,
        registerExit,
        unregisterExit,
      }}
    >
      {children}
    </portalContext.Provider>
  )
}

type PortalGateEnterProps = {
  targetName: GateNameType
  children: PortalCargoType
}

const PortalGateEnter: React.FC<PortalGateEnterProps> = ({ targetName, children }) => {
  const { makeTunnel, closeTunnel } = useContext(portalContext)

  useEffect(() => {
    makeTunnel(targetName, children)

    return () => {
      closeTunnel(targetName) 
    }
  }, [targetName, children])

  return null
}

type PortalGateExitProps = {
  name: GateNameType
}
const PortalGateExit: React.FC<PortalGateExitProps> = ({ name }) => {
  const { dataMap, registerExit, unregisterExit } = useContext(portalContext)

  useEffect(() => {
    registerExit(name)

    return () => {
      unregisterExit(name)
    }
  }, [name])

  return <Fragment>{dataMap[name] || null}</Fragment>
}

const PortalDefaultGateExit: React.FC = () => {
  const { dataMap, exits } = useContext(portalContext)

  const elementsToRender = Object.entries(dataMap).reduce<PortalCargoType[]>(
    (acc, [gateName, element]: [GateNameType, PortalCargoType]) => {
      if (exits.includes(gateName)) {
        return acc
      }

      return [...acc, element]
    },
    [],
  )

  return <Fragment>{elementsToRender}</Fragment>
}

/**
 * Провайдер для порталов, принимает только 1го наследника.
 * Основная задача состоит в жонглировании порталами.
 *
 * Для использования портала нужно:
 * - обернуть интересующую часть дерева компонентов в `Portal.Provider`
 * - разметить в "месте отправления" `Portal.GateEnter`, указав пропы
 *    - `targetName<string>` имя целевого выхода
 * - разместить в "месте отображения" `Portal.GateExit`, указав пропы:
 *    - `name<string>` имя выхода
 * - необязательно: разместить `Portal.DefaultGateExit`, откуда будут вываливаться все отправления, для которых был указан несуществующий выход
 *
 * @visibleName Portal
 */
const Portal = {
  Provider: PortalProvider,
  GateEnter: PortalGateEnter,
  GateExit: PortalGateExit,
  DefaultExit: PortalDefaultGateExit,
}

export default Portal
