import React, { Component } from 'react'

import './app.css'
import AppHeader from '../app-header'
import ListHeader from '../list-header'
import UsersList from '../users-list'
import DoneCount from '../done-count'
import UserService from '../../services/user-service'

export default class App extends Component {
  userService = new UserService()

  state = {
    isLoading: false,
    onError: false,
    sort: 'random',
    personsData: [],
  }

  nameSort = () => {
    this.setState(({ personsData, sort }) => {
      const newData = [...personsData]
      switch (sort) {
        case 'random':
          newData.sort((x, y) => x.name.localeCompare(y.name))
          return {
            sort: 'alphabet',
            personsData: newData,
          }
        case 'alphabet':
          newData.sort((x, y) => x.name.localeCompare(y.name)).reverse()
          return {
            sort: 'reverse',
            personsData: newData,
          }
        default:
          return {
            sort: 'random',
            personsData: newData,
          }
      }
    })
  }

  getData = (val) => {
    this.setState(({ isLoading }) => ({
      isLoading: !isLoading,
    }))

    return this.userService
      .getResource(`https://jsonplaceholder.typicode.com/users?q=${val}`)
      .then((body) => {
        if (!val) return this.createPersonsList([])
        return body
      })
      .then((arr) => {
        this.setState((isLoading) => ({
          onError: false,
          isLoading: !isLoading,
        }))

        this.createPersonsList(arr)
      })
      .catch(() => {
        this.setState(() => ({
          onError: true,
        }))
      })
  }

  createPersonsList = (arr) => {
    if (!arr) {
      return this.setState(() => ({
        sort: 'random',
        personsData: [],
      }))
    }
    const newArr = arr.map((el) => ({
      id: el.id,
      name: el.name,
      email: el.email,
      address: `${el.address.city} ${el.address.street} ${el.address.suite}`,
      phone: el.phone,
      company: el.company.name,
    }))

    return this.setState(() => ({
      personsData: newArr,
    }))
  }

  doneCount = () => {
    const { personsData } = this.state
    return personsData.length
  }

  render() {
    const { personsData, isLoading, onError } = this.state
    return (
      <div className="app">
        <AppHeader getData={this.getData} />
        <ListHeader nameSort={this.nameSort} />
        <UsersList personsData={personsData} isLoading={isLoading} onError={onError} />
        <DoneCount doneCount={this.doneCount} />
      </div>
    )
  }
}
