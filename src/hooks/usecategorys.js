
import {useQuery} from '@tanstack/react-query'
import axiosinstance from '../Api/axiosinstance';


 export function usecategorys(){

    
   const fetchcategory = async()=>{
    const responce = await axiosinstance.get('/Categories');

   
return responce.data;
   }
   const query = useQuery({
       queryKey:['category'],
       staleTime:5 * 60 * 1000,
       queryFn:fetchcategory
   
      });

      return query;

}