# Example GraphQL service

Tested on node v8.1.3, but should run fine on other versions as well. No db needed, data is static.

Get it running by:
```sh
$ npm install
$ npm run dev
```

Go to http://localhost:3000/amazon/graphiql

# Querying

There are 3 top level queries - author, authors and books. Following are some sample queries you can combine.

### Sorted authors with books:
```
{
  authors(sort: {by: "name", order: ASC}) {
    name
    books {
      name
    }
  }
}
```

### Author by id with books and reviews:
```
{
  author(id: 1) {
    name
    books {
      name
      reviews {
        review
        rating
      }
    }
  }
}
```

Or with variables -

Query:
```
query getAuthor($id: Int!) {
  author(id: $id) {
    name
    books {
      name
      reviews {
        review
        rating
      }
    }
  }
}
```
Variables:
```
{
    "id": 1
}
```


### All books with reviews
```
{
  books {
    name
    reviews {
      review
    }
  }
}
```

# Mutating
There is one possible mutation - createBook. It doesn't actually do anything as there is no db, but you can try it out anyway.

### Creating a book
```
mutation {
  createBook(name: "Cool book", authorId: 1) {
    name
  }
}
```

Or with variables -

Mutation:
```
mutation createBook($name: String!, $authorId: Int!) {
  createBook(name: $name, authorId: $authorId) {
    name
  }
}
```
Variables:
```
{
    "name": "Cool book",
    "authorId": 1
}
```
