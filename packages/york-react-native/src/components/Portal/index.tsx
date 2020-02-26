import React, { createContext, useState, useCallback, useContext, useEffect, Fragment, ReactNode } from 'react'

type gateNameType = string
type portalCargoType = ReactNode
type portalsStorageType = {
  [gateName: string]: portalCargoType
}
type exitsType = gateNameType[]

interface IMakeTunnel {
  (name: gateNameType, element: portalCargoType): void
}
interface ICloseTunnel {
  (name: gateNameType): void
}
interface IRegisterExit {
  (name: gateNameType): void
}
interface IUnregisterExit {
  (name: gateNameType): void
}

interface IPortalContext {
  dataMap: portalsStorageType
  makeTunnel: IMakeTunnel
  closeTunnel: ICloseTunnel
  exits: exitsType
  registerExit: IRegisterExit
  unregisterExit: IUnregisterExit
}

const PortalContext = createContext<IPortalContext>({
  dataMap: {},
  makeTunnel: () => null,
  closeTunnel: () => null,
  exits: [],
  registerExit: () => null,
  unregisterExit: () => null,
})

type ProviderProps = { children: ReactNode }

const PortalProvider: React.FC<ProviderProps> = ({ children }) => {
  const [dataMap, setData] = useState<portalsStorageType>({})

  const makeTunnel = useCallback<IMakeTunnel>(
    (gateName, element) => {
      dataMap[gateName] = element

      setData({ ...dataMap })
    },
    [dataMap],
  )
  const closeTunnel = useCallback<ICloseTunnel>(
    gateName => {
      delete dataMap[gateName]

      setData({ ...dataMap })
    },
    [dataMap],
  )

  const [exits, setExit] = useState<exitsType>([])

  const registerExit = useCallback<IRegisterExit>(
    name => {
      if (exits.includes(name)) {
        return
      }

      exits.push(name)

      setExit([...exits])
    },
    [exits],
  )

  const unregisterExit = useCallback<IUnregisterExit>(
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
    <PortalContext.Provider
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
    </PortalContext.Provider>
  )
}

type PortalGateEnterProps = {
  targetName: gateNameType
  children: portalCargoType
}

const PortalGateEnter: React.FC<PortalGateEnterProps> = ({ targetName, children }) => {
  const { makeTunnel, closeTunnel } = useContext(PortalContext)

  useEffect(() => {
    console.log('PortalGateEnter makeTunnel for ', JSON.stringify(targetName));
    makeTunnel(targetName, children)

    return () => {
      console.log('PortalGateEnter closeTunnel for ', targetName);
      closeTunnel(targetName) 
    }
  }, [targetName, children])

  return null
}

type PortalGateExitProps = {
  name: gateNameType
}
const PortalGateExit: React.FC<PortalGateExitProps> = ({ name }) => {
  const { dataMap, registerExit, unregisterExit } = useContext(PortalContext)

  useEffect(() => {
    console.log('registerExit with name', JSON.stringify(name));
    registerExit(name)

    return () => {
      console.log('unregisterExit1 with name', JSON.stringify(name));
      unregisterExit(name)
    }
  }, [name])

  return <Fragment>{dataMap[name] || null}</Fragment>
}

const PortalDefaultGateExit: React.FC = () => {
  const { dataMap, exits } = useContext(PortalContext)

  const elementsToRender = Object.entries(dataMap).reduce<portalCargoType[]>(
    (acc, [gateName, element]: [gateNameType, portalCargoType]) => {
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
