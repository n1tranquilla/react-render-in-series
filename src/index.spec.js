import React from 'react'
import { mount, shallow } from 'enzyme'
import RenderInSeries from './index.js'

const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const baseProps={
  timeline:[1000,2000]
}

const children=[
  <span key="one" className="one"/>,
  <span key="two" className="two"/>,
  <span key="three" className="three"/>
]

it('render without crashing',()=>{
  shallow(<RenderInSeries { ...baseProps } />)
})

it('renders children in series over time',async ()=>{
  const wrapper=mount(<RenderInSeries {...baseProps}>{children}</RenderInSeries>)
  expect(wrapper.html().includes("one")).toEqual(true)
  expect(wrapper.html().includes("two")).toEqual(false)
  expect(wrapper.html().includes("three")).toEqual(false)

  await timeout(1500)
  expect(wrapper.html().includes("one")).toEqual(false)
  expect(wrapper.html().includes("two")).toEqual(true)
  expect(wrapper.html().includes("three")).toEqual(false)

  await timeout(2500)
  expect(wrapper.html().includes("one")).toEqual(false)
  expect(wrapper.html().includes("two")).toEqual(false)
  expect(wrapper.html().includes("three")).toEqual(true)
},5000)