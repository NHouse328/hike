Template.Feed.helpers({
  posts: function() {
    var postsCollection = Posts.find().fetch().reverse();
    return postsCollection
  }
});