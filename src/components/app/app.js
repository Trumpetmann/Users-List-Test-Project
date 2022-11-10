/* eslint-disable react/sort-comp */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react'

import './app.css'
import AppHeader from '../app-header'
import ListHeader from '../list-header'
import UsersList from '../users-list'
import DoneCount from '../done-count'
import UserService from '../../services/user-service'

export default class App extends Component {
  userService = new UserService()

  async defaultData() {
    return this.userService
      .getResource('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        this.setState((isLoading) => ({
          error: false,
          isLoading: !isLoading,
        }))
        this.createPersonsList(res)
      })
      .catch(() => {
        this.setState(() => ({
          error: true,
        }))
      })
  }

  state = {
    isLoading: false,
    error: false,
    sort: 'random',
    personsData: this.defaultData(),
  }

  debounce = (fn, debounceTime) => {
    let time
    return function () {
      const fnCall = () => fn.apply(this, arguments)
      clearTimeout(time)
      time = setTimeout(fnCall, debounceTime)
      return time
    }
  }

  getData = (e) => {
    const val = e.target.value
    this.setState(({ isLoading }) => ({
      isLoading: !isLoading,
    }))
    return this.userService
      .getResource(`https://jsonplaceholder.typicode.com/users?q=${val}`)
      .then((res) => {
        this.setState((isLoading) => ({
          error: false,
          isLoading: !isLoading,
        }))
        this.createPersonsList(res)
      })
      .catch(() => {
        this.setState(() => ({
          error: true,
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
      email: `mailto:${el.email}`,
      address: `${el.address.city} ${el.address.street} ${el.address.suite}`,
      phone: el.phone,
      company: el.company.name,
    }))

    return this.setState(() => ({
      personsData: newArr,
    }))
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

  doneCount = () => {
    const { personsData } = this.state
    return personsData.length
  }

  render() {
    const { personsData, isLoading, error } = this.state
    return (
      <div className="app">
        <AppHeader getData={this.getData} debounce={this.debounce} />
        <ListHeader nameSort={this.nameSort} />
        <UsersList personsData={personsData} isLoading={isLoading} error={error} />
        <DoneCount doneCount={this.doneCount} isLoading={isLoading} />
      </div>
    )
  }
}
