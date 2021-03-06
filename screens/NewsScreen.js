import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { List, ListItem } from 'react-native-elements'
class NewsScreen extends Component {
  static navigationOptions = {
    title: "New Feeds",
    header: null
  }

  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    }
  }

  componentDidMount() {
    this.makeRemoteRequest()
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`
    this.setState({ loading: true })
    fetch(url)
      .then(res => res.json())
      .then(res =>
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        })
      )
      .catch(error =>
        this.setState({ loading: false, error })
      )
  }

  render() {
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, marginTop: 50 }}>
        <FlatList
          data={this.state.data}
          renderItem={
            ({ item }) => (
              <ListItem
                roundAvatar
                title={`${item.name.first} ${item.name.last}`}
                subtitle={item.email}
                avatar={{ uri: item.picture.thumbnail }}
                containerStyle={{ borderBottomWidth: 0 }}
              />
            )}
          keyExtractor={item => item.email}
        >
        </FlatList>
      </List>
    )
  }
}
export default NewsScreen;