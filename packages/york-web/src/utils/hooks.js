import { useEffect } from 'react'

export const useKeyUp = (key, callback) => {
  const onKeyUp = e => {
    if (e.key === key) callback()
  }

  useEffect(() => {
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keyup', onKeyUp)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
