import request,{gql} from "graphql-request";

export const getCarsList=async()=>{
const query= gql`
query CarLists {
    carLists {
      id
      price
      name
      updatedAt
      carAvg
      createdAt
      publishedAt
      image {
        url
      }
    }
  }`
  const result=await request('https://api-ap-south-1.hygraph.com/v2/clwnee2yv04ll07uy5n2djv4f/master',query);
  return result;
}