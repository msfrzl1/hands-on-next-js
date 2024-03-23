import axios from 'axios';

export async function getServerSideProps(context) {
   const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.id}`, {
      headers: { apiKey: 'w05KkI9AWhKxzvPFtXotUva-' },
   });
   return { props: { food: resp.data.data } };
}

export default function FoodDetailPage({ food }) {
   return (
      <div className='container mx-auto py-4'>
         <div className='flex justify-center'>
            <h1>{food.name}</h1>
            <p>{food.description}</p>
            <img
               src={food.imageUrl}
               alt=''
            />
         </div>
      </div>
   );
}
