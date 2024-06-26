import request, { gql } from "graphql-request";

const API_ENDPOINT = 'https://api-ap-south-1.hygraph.com/v2/clwnee2yv04ll07uy5n2djv4f/master';
const API_TOKEN = process.env.GRAPHQL_API_TOKEN;

export const getCarsList = async () => {
  const query = gql`
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
        carType
        carBrand
        location
      }
    }
  `;
  const result = await request('https://api-ap-south-1.hygraph.com/v2/clwnee2yv04ll07uy5n2djv4f/master', query);
  return result;
};

export const getStoreLocations = async () => {
  const query = gql`
    query MyQuery {
      storedLocations {
        address
      }
    }
  `;
  const result = await request('https://api-ap-south-1.hygraph.com/v2/clwnee2yv04ll07uy5n2djv4f/master', query);
  return result;
};

export const createBooking = async (formValue: any, userId: string | undefined) => {
  if (userId === undefined) {
    throw new Error('User ID is undefined');
  }

  const mutationQuery = gql`
    mutation MyMutation {
      createBooking(
        data: {
          dropoffDate: "${formValue.dropoffDate}",
          pickupDate: "${formValue.pickupDate}",
          dropoffTime: "${formValue.dropoffTime}",
          pickupTime: "${formValue.pickupTime}",
          userName: "${userId}",
          carId: { connect: { id: "${formValue.carId}" } },
          contactNumber: "${formValue.contactNumber}"
        }
      ) {
        id
      }
    }
  `;

  const result = await request('https://api-ap-south-1.hygraph.com/v2/clwnee2yv04ll07uy5n2djv4f/master', mutationQuery);
  return result;
};
