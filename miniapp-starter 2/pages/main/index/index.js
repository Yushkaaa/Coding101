Page({
  data: {
    names: [
      {
        name: 'JACK',
        id: 1,
        selected: false,
        percent: 70,
        friends: 'friend_1, friend_2, friend_3, + 10 ...'
      },
      {
        name: 'JOY',
        id: 2,
        selected: false,
        percent: 20,
        friends: 'friend_6, friend_7'
      },
      {
        name: 'JASON',
        id: 0,
        selected: false,
        percent : 10,
        friends: 'friend_4'
      }
    ]
  },

  selectName(e) {
    const { currentTarget: { dataset: { id: characterId } } } = e
    const { names } = this.data
    const newNames = names.map(char => {
      return {
        ...char,
        selected: char.id === characterId
      }
    })

    this.setData({
      names: newNames
    })
  }
})

