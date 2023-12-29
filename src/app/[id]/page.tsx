import api from '@/api'
import { Res } from './components/Res'
import { ProductId } from '@/redux/features/productSlice'

export async function generateMetadata({ params: { id } }: { params: { id: ProductId } }) {
  const product = await api.get(id)

  return {
    title: `${product?.productName} - ZSupermarket`,
    description: product?.productDescription,
  }
}

export default function ProductPage({ params: { id } }: { params: { id: ProductId } }) {
  return (
    <main className='max-w-[960px] px-5 mx-auto min-h-[calc(100vh-202px)]'>
      <Res id={id} />
    </main>
  )
}
