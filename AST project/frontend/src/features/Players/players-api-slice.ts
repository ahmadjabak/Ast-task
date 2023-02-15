import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

 

 export const Players= createApi({
    reducerPath: 'Players',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://63ece97e32a0811723a4ca01.mockapi.io/api/test',
        prepareHeaders(headers){
            // headers.set(
            //     'X-RapidAPI-Key',FOOTBALL_API_KEY

              
            //     );
              
            // return headers;
        }
    }),
    endpoints:(builder)=> ({
        
        getPlayers: builder.query({
           
            query(){
                return '/users'
                
            },
           
           
  
         }),



      }),
  
      
     
});


export const {useGetPlayersQuery}= Players;