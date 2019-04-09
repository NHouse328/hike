Template.Feed.helpers({
  posts: function() {
    var postsCollection = Posts.find().fetch();
    return postsCollection
  }
});