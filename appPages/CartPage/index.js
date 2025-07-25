"use client";
import ProductList from "./ProductList";
import OrderSummary from "./OrderSummary";
import HintNavigation from "../../shared/hint-navigation/HintNavigation";
import Title from "../../shared/ui/title/Title";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartProductsByIds,
  selectCartItems,
} from "../../redux/reducer/cartSlice";
import { useEffect } from "react";

export default function CartPage() {
  const t = useTranslations("CartPage");

  const cartItems = useSelector(selectCartItems);
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (cartItems.length > 0) {
      const ids = cartItems.map((item) => item.id);
      dispatch(fetchCartProductsByIds(ids));
    }
  }, [cartItems]);

  return (
    <div className="max-w-6xl mx-auto relative">
      <div className="flex flex-col items-center gap-6 w-full justify-center mb-4">
        <HintNavigation
          links={[
            { label: t("breadcrumb.home"), href: "/" },
            { label: t("breadcrumb.cart"), href: "/cart" },
          ]}
        />
        <Title>{t("title")}</Title>
      </div>
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3 space-y-4">
          <div className="hidden md:grid grid-cols-[2fr_1.5fr_1fr] text-[#848484] py-2 rounded-xl shadow p-2 bg-[#F5F5F5]">
            <div>{t("table.product")}</div>
            <div className="text-center">{t("table.price")}</div>
            <div className="text-end">{t("table.total")}</div>
          </div>

          <ProductList cartProducts={cartProducts} />
        </div>

        <OrderSummary cartProducts={cartProducts} />
      </div>
    </div>
  );
}
