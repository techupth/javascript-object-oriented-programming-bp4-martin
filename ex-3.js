//  Start coding here
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
};
class PostList {
    constructor(posts) {
        this.posts = [];
    };
    addPost() {
        return this.posts.push();
    };
    sharePost() {
        return console.log(`You've shared post “${post.title}” to your friend.`);
       
    };
};
class Post {
    constructor(id, title, content, comment) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.comment = [];
    };
    addComment() {
        return this.comment.push();
    };
};
class Comment {
    constructor(id, content, createdBy, like) {
        this.id = id;
        this.content = content;
        this.createdBy = createdBy;
        this.like = 0;
    };
    addlike(number) {
        return this.like = this.like + number;
    };
}
class Facebook {
    constructor(groupList, pageList) {
        this.groupList = [groupList];
        this.pageList = [pageList];
    };
    addGroup() {
        return this.groupList.push();
    };
    addPage() {
        return this.pageList.push();
    };
};
class FacebookPage {
    constructor(name) {
        this.name = name;
    }
};
class FacebookGroup {
    constructor(name) {
        this.name = name;
    }
};
class Notification {
    constructor(id) {
        this.id = id;
    };
    send() {
        return console.log(`Notification: ${this.createdBy} has just comment on this post ${this.title}`)
    }
}