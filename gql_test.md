curl -i -X POST -d "{ \"query\": \"query { movie { id image link watched_user title published_year watched_date country category }}\"}" http://localhost:8080/v1/graphql
