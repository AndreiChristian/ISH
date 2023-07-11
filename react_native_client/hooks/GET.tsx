// import { useEffect, useState } from 'react';

// // Define the type for the initial state
// interface FetchState<T> {
//   data: T | null;
//   isLoading: boolean;
//   error: any;
// }

// // Initial state
// const initialState: FetchState<null> = {
//   data: null,
//   isLoading: true,
//   error: null,
// };

// export const useFetch = <T extends unknown>(url: string): FetchState<T> => {
//   const [state, setState] = useState<T|null>();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(response.statusText);
//         }
//         const data: T = await response.json();
//         setState({
//           data,
//           isLoading: false,
//           error: null,
//         });
//       } catch (error) {
//         setState({
//           data: null,
//           isLoading: false,
//           error,
//         });
//       }
//     };
//     fetchData();
//   }, [url]);

//   return state;
// };
