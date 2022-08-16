import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query MyQuery {
    movie {
      id
      image
      link
      watched_user
      title
      published_year
      watched_date
      country
      category
    }
  }
`;
