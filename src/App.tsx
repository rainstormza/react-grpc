// https://www.npmjs.com/package/grpc-web
// https://stackoverflow.com/questions/51857225/grpc-web-client-with-angular-6

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import * as grpcWeb from 'grpc-web'
import { EchoServiceClient } from './generated/echo_grpc_web_pb'
import { EchoRequest, EchoResponse } from './generated/echo_pb'

class App extends Component {
  componentDidMount() {
    const echoService = new EchoServiceClient('http://localhost:8080', null, null)

    const request = new EchoRequest()

    request.setMessage('Hello World! 55')

    const call = echoService.echo(
      request,
      { 'custom-header-1': 'value1' },
      (err: grpcWeb.Error, response: EchoResponse) => {
        console.log(response.getMessage())
      }
    )
    call.on('status', (status: grpcWeb.Status) => {
      console.log('​status', status)
      // ...
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
