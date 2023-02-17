import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

 

 export const Players= createApi({
    reducerPath: 'Players',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://63ece97e32a0811723a4ca01.mockapi.io/api/test',
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