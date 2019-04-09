import * as React from 'react'


interface ifProps {
  children: any,
  isShow: boolean,
}


function If(props: ifProps) {

  const { children, isShow } = props

  return isShow && children

}


export default If
