import * as React from 'react'

interface ifProps {
  children: React.ReactNode,
  isShow: boolean,
}

function If(props: ifProps): boolean | React.ReactNode {

  const { children, isShow } = props

  return isShow && children

}


export default If
