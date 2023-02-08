function create(){
    class Post{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }

        toString(){
            return `Post: ${this.title}\n` + `Content: ${this.content}`;
        }
    }
    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content)

            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }
        addComment(comment){
            this.comments.push(comment);
        }

        toString() {
            
            if (this.comments.length > 0) {
                let coms = `Comments:\n`;
                for (let index = 0; index < this.comments.length-1; index++) {
                    const comm = this.comments[index];
                    
                    coms += ` * ${comm}\n`;
    
                    
                }
                coms += ` * ${this.comments[this.comments.length-1]}`;
                return super.toString() + `\nRating: ${this.likes - this.dislikes}\n`
                + coms;
            }
            else{
                return super.toString() + `\nRating: ${this.likes - this.dislikes}`;
            }

            

        }


    }
    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content)

            this.views = Number(views);
        }

        view(){
            this.views++;
            return this;
        }
        toString(){
            return super.toString() + `\nViews: ${this.views}`;
        }
    }

    return {
        Post, SocialMediaPost, BlogPost
    };
}

const classes = create();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
