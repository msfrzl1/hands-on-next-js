import axios from 'axios';
import { useEffect, useState } from 'react';

export default function HomePage() {
   const [foods, setFoods] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      const getData = async () => {
         setLoading(true);
         const resp = await axios.get('https://api-bootcamp.do.dibimbing.id/api/v1/foods', {
            headers: { apiKey: 'w05KkI9AWhKxzvPFtXotUva-' },
         });
         setFoods(resp.data.data);
         setLoading(false);
      };
      getData();
   }, []);

   if (loading) {
      return <div className='text-center font-bold text-xl mt-5 min-h-screen flex justify-center ite'>Loading...</div>;
   }

   return (
      <div className='container mx-auto py-4'>
         <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {foods.map((item) => (
               <li
                  key={item.id}
                  className='border rounded-lg shadow-lg'
               >
                  <img
                     src={item.imageUrl}
                     alt={item.name}
                     className='w-full object-cover'
                  />
                  <div className='p-4'>
                     <h1 className='font-bold text-lg mb-2'>{item.name}</h1>
                     <p className='text-gray-700 text-base'>{item.description}</p>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
}
