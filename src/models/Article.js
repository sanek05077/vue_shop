export default class Article
{
  constructor(id, title, content, image) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.image = image;
    this.comments = [];
  }

  addComment(item) {
    this.comments.push(item);
  }

  static createFrom(data) {
    const {id, title, content, image} = data;
    return new this(id, title, content, image);
  }
}
