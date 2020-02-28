import { PanResponder, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import React, { ReactNode, useCallback, useState } from 'react'
import { Portal } from 'york-react-native/components'

import {portalGateName, TooltipsContext, tooltipsStorageType, hiddenTooltipsStorageType} from '../'

type stylesType = {
  wrapper: StyleProp<ViewStyle>
}

const styles: stylesType = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})

type tooltipsContainerProps = {
  children: ReactNode
}

/**
 * Контейнер для тултипов, занимающий все свободное пространство первого `relative` родителя.  
 * Является местом рендера всех тултипов.
 * 
 * При любом действии пользователя (touch, move, etc.) закрывает активные тултипы.
 */
export const TooltipsContainer: React.FC<tooltipsContainerProps> = ({ children }) => {
  const [tooltipsMap, setTooltips] = useState<tooltipsStorageType>({})
  const [hidden, setHidden] = useState<hiddenTooltipsStorageType>([])

  const addTooltip = useCallback(
    (text, config) => {
      if (hidden.includes(text)) {
        return
      }
      
      console.log('addTooltip', text, 'to', JSON.stringify(tooltipsMap));

      // изменение по ссылке сделано намеренно: при рендере больше 1 тултипа одновременно, несколько вызовов `addTooltip`
      // переписыавют результаты друг друга (т.к. tooltipsMap не успеавет измениться в замыкании)
      tooltipsMap[text] = config

      setTooltips({ ...tooltipsMap })
    },
    [tooltipsMap, hidden],
  )

  const hideVisible = useCallback(() => {
    const keysToHide = Object.keys(tooltipsMap)

    if (keysToHide.length === 0) {
      return
    }

    const nextTooltipsMap: tooltipsStorageType = { ...tooltipsMap }
    keysToHide.forEach(key => {
      delete nextTooltipsMap[key]
    })

    setTooltips(nextTooltipsMap)
    setHidden([...hidden, ...keysToHide])
  }, [tooltipsMap, hidden])

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponderCapture: () => {
      hideVisible()

      return false
    },
    onMoveShouldSetPanResponderCapture: () => {
      hideVisible()

      return false
    },
  })

  return (
    <View style={styles.wrapper} {...panResponder.panHandlers}>
      <TooltipsContext.Provider value={{ tooltipsMap, addTooltip, hidden, hideVisible }}>
        {children}
        <Portal.GateExit name={portalGateName} />
      </TooltipsContext.Provider>
    </View>
  )
}
