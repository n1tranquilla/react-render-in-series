# react-render-in-series

A smart react component which renders children in series over time.

## Use cases
- Loading spinners

## Installation

`yarn add react-render-in-series`

`npm install react-render-in-series`

## Example

    import InSeries from 'react-render-in-series'

    ...

    render(){
      return (
        <InSeries timeline={[200,4800]}>
          {[
            null,               // show nothing for 200ms
            <Spinner />,        // at 200ms, show spinner to indicate loading
            <TimeoutMessage />  // at 4800ms+200ms = 5000ms, display a timeout message
          }]
        <InSeries>
      )
    }