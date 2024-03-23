import axios from 'axios';

export async function getServerSideProps() {
   const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods`, {
      headers: { apiKey: 'w05KkI9AWhKxzvPFtXotUva-' },
   });
   return { props: { foods: resp.data.data } };
}

export default function HomePage({ foods }) {
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
