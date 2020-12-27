import { gql } from '@apollo/client';

export const GET_USER = gql`
  query getUser($id: Int!) {
    getUser(id: $id) {
      ok
      user {
        id
        firstName
        lastName
        phoneNumber
        gender
        email
        password
        profileImg
        nickname
        mbtiType
        isVerificated
      }
      error
    }
  }
`;

export const SIGN_IN = gql`
  mutation signIn($email: String, $password: String) {
    signIn(email: $email, password: $password) {
      ok
      token
      error
    }
  }
`;

export const Gender = `
  enum Gender {
    Man
    Woman
  }
`;

export const SIGN_UP = gql`
  mutation signUp(
    $firstName: String
    $lastName: String
    $phoneNumber: String
    $gender: Gender!
    $email: String
    $password: String
    $profileImg: String
    $nickname: String
    $mbtiType: String
  ) {
    signUp(
      firstName: $firstName
      lastName: $lastName
      phoneNumber: $phoneNumber
      gender: $gender
      email: $email
      password: $password
      profileImg: $profileImg
      nickname: $nickname
      mbtiType: $mbtiType
    ) {
      ok
      token
      error
    }
  }
`;
