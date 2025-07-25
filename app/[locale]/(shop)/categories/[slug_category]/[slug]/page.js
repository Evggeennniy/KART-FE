"use client";
import HintNavigation from "../../../../../../shared/hint-navigation/HintNavigation";
import { Check, Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import productImage from "../../../../../../public/assets/image/product.png";
import Swiper from "../../../../../../shared/swiper/Swiper";
import ShopItem from "../../../../../../shared/shop/ProductItem";
import { useFormattedPrice } from "../../../../../../hooks/useFormattedPrice";

// import { products } from "../../../../../../data/products";
import Title from "../../../../../../shared/ui/title/Title";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../../../../../data/url";
import {
  addToCart,
  addToCartQuick,
  removeFromCart,
} from "../../../../../../redux/reducer/cartSlice";
import Button from "../../../../../../shared/ui/button/Button";
export default function Page() {
  const t = useTranslations("ProductDescription");
  const locale = useLocale();

  const { slug_category, slug } = useParams();
  const [tab, setTab] = useState("usage");

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const hasUsage = product?.how_to_use?.trim();
  const hasIngredients = product?.ingredients?.trim();

  const dispatch = useDispatch();

  const byCategory = useSelector((state) => state.cart.byCategory);
  const productsInCategory = byCategory?.[slug_category]?.products;

  const formattedDiscountedPrice = useFormattedPrice(
    product?.stock || product?.price || 0
  );
  console.log("Products in category:", productsInCategory);

  useEffect(() => {
    setLoading(true);
    setError(null);

    if (!byCategory?.[slug_category]) {
      fetch(`${API_URL}/products/items/${slug}`, {
        headers: { "Accept-Language": locale },
      })
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch product");
          return res.json();
        })
        .then((data) => setProduct(data))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
      return;
    }

    const foundProduct = productsInCategory.find((p) => p.id === +slug);

    if (foundProduct) {
      setProduct(foundProduct);
      setLoading(false);
    } else {
      fetch(`${API_URL}/products/items/${slug}`, {
        headers: { "Accept-Language": locale },
      })
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch product");
          return res.json();
        })
        .then((data) => setProduct(data))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [slug_category, slug, locale, byCategory]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  console.log(product);
  const handleAddToCart = () => {
    console.log("Adding to cart:", product.id, quantity);

    if (quantity > 0) {
      dispatch(addToCartQuick({ id: product.id, quantity }));
      setQuantity(0);
      setAddedToCart(true);

      setTimeout(() => {
        setAddedToCart(false);
      }, 3000);
    }
  };
  return (
    <section className=" w-full text-color ">
      <div className="flex  justify-center items-center mb-[44px]">
        <HintNavigation
          links={[
            { label: t("home"), href: "/" },
            { label: slug_category, href: `/categories/${slug_category}` },
            {
              label: t("productDescription"),
              href: `/categories/${slug_category}/${slug}`,
            },
          ]}
        />
      </div>

      <div className="flex gap-3 flex-wrap mb-[40px] h-full lg:flex-nowrap  w-full">
        <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-2xl ">
          <Image
            src={product.image1}
            alt={product.name}
            fill
            className="object-cover  p-8"
          />
        </div>

        <div className="flex flex-col w-full gap-4  text-color">
          <div className=" flex gap-4 items-center">
            <div className="flex flex-col justify-center  w-[95%] ">
              <h2 className="text-[20px] lg:text-xl ">{product.fullName}</h2>
              <h3 className="text-lg text-color ">{product.name}</h3>
            </div>

            <div className="text-sm text-right min-w-[80px] shrink-0 text-color">
              {t("code")}: {product.code}
            </div>
          </div>

          <div className="w-full bg-[#EDEDED] h-[1px]"></div>

          <div className="">
            <p className="text-[13px] lg:text-sm mb-6 text-color">
              {product.description}
            </p>
          </div>

          <div className="w-full bg-[#EDEDED] h-[1px]"></div>

          <div className="flex justify-between items-center">
            <div className="text-[#A0C287] text-[16px] lg:text-xl  mb-4">
              {formattedDiscountedPrice}{" "}
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center  rounded px-2 py-1">
                <button
                  onClick={() => setQuantity((p) => Math.max(p - 1, 0))}
                  className="text-[15px] p-2 cursor-pointer"
                >
                  <Minus size={16} />
                </button>
                <span className="text-lg font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity((p) => p + 1)}
                  className="text-[15px] p-2 cursor-pointer"
                >
                  <Plus size={16} />
                </button>
              </div>
              <Button
                onClick={handleAddToCart}
                disabled={quantity === 0}
                className="w-full py-1 text-sm sm:text-lg font-medium rounded-lg text-black flex items-center justify-center"
                bgColor="bg-transparent shadow-sm!"
              >
                {addedToCart ? (
                  <span className="text-green-600 flex items-center gap-1">
                    <Check size={20} />
                    <span className="hidden lg:inline text-[#848484]">
                      {t("added")}
                    </span>
                  </span>
                ) : (
                  <>
                    <span className="lg:hidden">
                      <ShoppingCart size={20} color="#000000" />
                    </span>
                    <span className="hidden lg:inline text-[#848484]">
                      {t("addToCart")}
                    </span>
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* <div className="border-b flex gap-4 border-gray-200 mb-4 ">
            <button
              className={`py-2 text-sm ${
                tab === "usage"
                  ? "border-b-2 text-color border-[#404040]"
                  : "text-color"
              }`}
              onClick={() => setTab("usage")}
            >
              {t("usage")}
            </button>
            <button
              className={`py-2 text-sm ${
                tab === "ingredients"
                  ? "border-b-2 text-color border-[#404040]"
                  : "text-color"
              }`}
              onClick={() => setTab("ingredients")}
            >
              {t("ingredients")}
            </button>
          </div>

          <div className="text-sm leading-relaxed w-full text-color">
            {tab === "usage" ? (
              <p>{product.how_to_use}</p>
            ) : (
              <ul className="list-disc w-full list-inside text-[#404040]">
                {product.ingredients}
              </ul>
            )}
          </div> */}

          {hasUsage && hasIngredients ? (
            <>
              <div className="border-b flex gap-4 border-gray-200 mb-4">
                <button
                  className={`py-2 text-sm ${
                    tab === "usage"
                      ? "border-b-2 text-color border-[#404040]"
                      : "text-color"
                  }`}
                  onClick={() => setTab("usage")}
                >
                  {t("usage")}
                </button>
                <button
                  className={`py-2 text-sm ${
                    tab === "ingredients"
                      ? "border-b-2 text-color border-[#404040]"
                      : "text-color"
                  }`}
                  onClick={() => setTab("ingredients")}
                >
                  {t("ingredients")}
                </button>
              </div>

              <div className="text-sm leading-relaxed w-full text-color">
                {tab === "usage" && <p>{product.how_to_use}</p>}
                {tab === "ingredients" && (
                  <ul className="list-disc list-inside text-[#404040]">
                    {product.ingredients}
                  </ul>
                )}
              </div>
            </>
          ) : hasUsage ? (
            <>
              <h4 className="text-sm font-semibold mb-2">{t("usage")}</h4>
              <p className="text-sm leading-relaxed w-full text-color">
                {product.how_to_use}
              </p>
            </>
          ) : hasIngredients ? (
            <>
              <h4 className="text-sm font-semibold mb-2">{t("ingredients")}</h4>
              <ul className="list-disc list-inside text-sm text-[#404040]">
                {product.ingredients}
              </ul>
            </>
          ) : null}
        </div>
      </div>
      <Title className="text-start text-color mb-4">
        {t("popularProducts")}
      </Title>
      <Swiper
        controlBlock={false}
        itemsLength={Math.round(product.additional_recomendations.length / 4)}
        widthPercent={20}
        items={product.additional_recomendations.map((product) => (
          <ShopItem key={product.id} product={product} />
        ))}
      />
    </section>
  );
}
