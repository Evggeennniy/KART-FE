import { useFormattedPrice } from "../../hooks/useFormattedPrice";
import {
  deleteFromCart,
  addToCart,
  removeFromCart,
} from "../../redux/reducer/cartSlice";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

export default function ProductItem({ product }) {
  // const formattedDiscountedPrice = useFormattedPrice(+product.discountedPrice);
  const formattedPrice = useFormattedPrice(product.price);
  // const formattedTotal = useFormattedPrice(
  //   +product.discountedPrice * product.quantity
  // );
  const formattedTotal = useFormattedPrice(+product.price * product.quantity);
  console.log(product);
  const dispatch = useDispatch();

  return (
    <div className="rounded-2xl shadow-[0px_2px_10px_rgba(0,0,0,0.1)] p-4">
      <div className="hidden md:grid grid-cols-[2fr_1.5fr_0.5fr] items-center text-[#848484]">
        <div className="flex items-center gap-4">
          <div className="rounded" />
          <Image
            src={product.image}
            alt="product image"
            width={48} // or any appropriate value in pixels
            height={64}
            className="w-12 h-16"
          />
          <div>
            <div className="text-[#848484]">{product.title}</div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <div className="flex gap-1">
            {/* <div className="text-[15px] line-through ">{formattedPrice}</div> */}
            <div className="text-[15px] text-[#848484] font-semibold">
              {/* {formattedDiscountedPrice} */}
              {formattedPrice}
            </div>
          </div>
          <div className="p-1 shadow flex gap-[6px] items-center justify-center rounded-2xl">
            <button
              className="cursor-pointer"
              onClick={() => dispatch(removeFromCart({ id: product.id }))}
            >
              <Minus size={16} />
            </button>

            <span>{product.quantity}</span>

            <button
              className="cursor-pointer"
              onClick={() => dispatch(addToCart({ id: product.id }))}
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2">
          <span className="text-[#848484] font-semibold">{formattedTotal}</span>
          <button
            className="cursor-pointer"
            onClick={() => dispatch(deleteFromCart({ id: product.id }))}
          >
            <X size={16} color="#848484" />
          </button>
        </div>
      </div>

      <div className="md:hidden space-y-2 text-[#848484]">
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-12 h-16 rounded" />
            <div className="text-[#848484]">{product.title}</div>
          </div>

          <button
            className="p-1"
            onClick={() => dispatch(deleteFromCart({ id: product.id }))}
          >
            <X size={16} color="#848484" />
          </button>
        </div>
        <div className="flex gap-1 justify-between items-center">
          <div>
            <div className="text-sm mt-1 text-[#848484] font-semibold">
              {formattedPrice}
            </div>
          </div>

          <div className="p-1 shadow flex gap-[6px] items-center justify-center rounded-2xl">
            <button className="cursor-pointer">
              <Minus size={16} />
            </button>

            <span>{product.quantity}</span>

            <button className="cursor-pointer">
              <Plus size={16} />
            </button>
          </div>

          <div className="flex gap-1 justify-between items-center">
            <span className="text-[#848484] font-semibold">
              Итого: {formattedTotal}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
