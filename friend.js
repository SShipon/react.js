function oddFriend(friends) {
  let firstOddFriendName = [];

  for (let i = 0; i < friends.length; i++) {
    // to find odd name in array
    if (friends[i].length % 2 != 0) {
      //   store first odd name
      firstOddFriendName = friends[i];
      break;
    }
  }
  return firstOddFriendName;
}

const result = oddFriend(['Shipon','Rabeka', 'Hamim' ,'jara Islam', 'Ali Sharif','nazmul',]);
console.log(result);
