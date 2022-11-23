// //import {useState} from 'react';
// import { Api, CommonEndApi } from "./Api";
// import * as EnvConstants from "./EnvConstants";

// export const usePostCodeAddress = () => {
//   const getPostcodeAddress = async (postcode) => {
//     const response = await CommonEndApi.get(
//       "api/get-addr-list?ProjectCode=" +
//         EnvConstants.AppAdtopiaUPID +
//         "&Environment=" +
//         EnvConstants.AppEnv +
//         "&postcode=" +
//         postcode,
//       {}
//     );
//     return response;
//   };
//   const getSplitPostcodeAddress = async (AddressID, postcode) => {
//     const response = await CommonEndApi.get(
//       "api/get-addr-details?ProjectCode=" +
//         EnvConstants.AppAdtopiaUPID +
//         "&Environment=" +
//         EnvConstants.AppEnv +
//         "&addressId=" +
//         AddressID,
//       {}
//     );
//     return response;
//   };
//   return { getPostcodeAddress, getSplitPostcodeAddress };
// };
