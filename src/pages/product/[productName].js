import { useRouter } from 'next/router';

export default function ProductPage() {
   const router = useRouter();
   return (
      <div>
         <h1>Ini sepatu yang mana {router.query.productName}</h1>
      </div>
   );
}
