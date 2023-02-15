import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

//  const DOGS_API_KEY='base64:SPigL4jBpybhy/bS/imrzDzDXvr+11FhBkc6lKy1FN4=';

 
 
interface Admin{
    email:string,
    password:string,
    Token:string,
    
   }

export const Login= createApi({
    reducerPath: 'Login',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:8000',
        // prepareHeaders(headers){
        //     headers.set('x-api-key',DOGS_API_KEY);
        //     return headers;
        // }
    }),
    endpoints:(builder)=> ({
        
     getlogin: builder.mutation({
        query:({body})=> {
            return ({
                url: '/api/login',
                method: 'POST',
                responseType:"json",
                body,
            })

          
        }
     }),



      }),
  
      
     
});


export const {useGetloginMutation}= Login;