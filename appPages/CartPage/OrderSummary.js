"use client"

import { useSelector } from 'react-redux';
import Button from '../../shared/ui/button/Button';
import { selectCartItems } from '../../redux/reducer/cartSlice';
import { useFormattedPrice } from '../../hooks/useFormattedPrice';
import { useTranslations } from 'next-intl';


function OrderSummary() {
  const t = useTranslations('CartPage.summary');
  const cartItems = useSelector(selectCartItems) || [];
  const deliveryFee = 35;
  const total = cartItems?.reduce((acc, p) => acc + p.discountedPrice * p.quantity, 0) + deliveryFee || 0;

  return (
    <div className="flex flex-col gap-2">
      <h3 className="p-2 text-lg font-semibold rounded-xl text-[#848484] shadow-[0px_2px_10px_rgba(0,0,0,0.1)]">
        {t('title')}
      </h3>
      <div className="p-4 space-y-4 shadow-[0px_2px_10px_rgba(0,0,0,0.1)] rounded-2xl h-fit">
        <div className="flex justify-between text-sm text-[#848484]">
          <span>{t('delivery')}</span>
          <span className="text-[#444444] text-[20px]">{useFormattedPrice(deliveryFee)}</span>
        </div>
        <div className="border-b-1 border-[#848484]"></div>
        <div className="flex justify-between text-[#848484] font-bold text-lg">
          <span>{t('total')}</span>
          <span className="text-[#444444] text-[20px]">{useFormattedPrice(total)}</span>
        </div>
        <Button className="w-full bg-[#81D742] hover:bg-green-600 text-white">
          {t('checkout')}
        </Button>
      </div>
    </div>
  );
}

export default OrderSummary;
