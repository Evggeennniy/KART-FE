"use client";

import { useInput } from "../../hooks/useInput";
import Button from "../../shared/ui/button/Button";
import Field from "../../shared/ui/Field/Field";
import React, { use, useEffect, useRef, useState } from "react";
import PhoneInput from "../../shared/ui/PhoneInput/PhoneInput";
import { useLocale, useTranslations } from "next-intl";
import Title from "../../shared/ui/title/Title";
import { useDispatch, useSelector } from "react-redux";
import {
  getDeliveryDetailsAction,
  patchDeliveryDetailsAction,
} from "../../redux/reducer/authSlice";
import { API_URL } from "../../data/url";
import { Check, CheckCheck, TicketSlash } from "lucide-react";

function DeliverForm() {
  const t = useTranslations("DeliverForm");
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const { deliveryData, loading } = useSelector((state) => state.auth);
  const [success, setSuccess] = useState(false);
  const locale = useLocale();
  const {
    value: nameValue,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    hasError: nameError,
    setInputState: setNameValue,
  } = useInput("", (v) => v.trim().length > 1);

  const {
    value: surnameValue,
    handleInputChange: handleSurnameChange,
    handleInputBlur: handleSurnameBlur,
    hasError: surnameError,
    setInputState: setSurnameValue,
  } = useInput("", (v) => v.trim().length > 1);

  const {
    value: nameCompanyValue,
    handleInputChange: handleNameCompanyChange,
    handleInputBlur: handleNameCompanyBlur,
    hasError: nameCompanyError,
    setInputState: setNameCompanyValue,
  } = useInput("", (v) => v.trim().length >= 3);

  const {
    value: VATNumValue,
    handleInputChange: VATNumChange,
    handleInputBlur: VATNumBlur,
    hasError: VATNumError,
    setInputState: setVATNumValue,
  } = useInput("", (v) => v.trim().length >= 3);

  const {
    value: countryValue,
    handleInputChange: handleCountryChange,
    handleInputBlur: handleCountryBlur,
    hasError: countryError,
    setInputState: setCountryValue,
  } = useInput("", (v) => v.trim().length >= 3);
  const {
    value: cityValue,
    handleInputChange: handleCityChange,
    handleInputBlur: handleCityBlur,
    hasError: cityError,
    setInputState: setCityValue,
  } = useInput("", (v) => v.trim().length >= 3);
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailError,
    setInputState: setEmailValue,
  } = useInput("", (v) => v.trim().length >= 3);

  const {
    value: adressValue,
    handleInputChange: handleAdressChange,
    handleInputBlur: handleAdressBlur,
    hasError: adressError,
    setInputState: setAdressValue,
  } = useInput("", (v) => v.trim().length >= 3);

  const {
    value: houseValue,
    handleInputChange: handleHouseChange,
    handleInputBlur: handleHouseBlur,
    hasError: houseError,
    setInputState: setHouseValue,
  } = useInput("", (v) => v.trim().length >= 3);

  const {
    value: postalCodeValue,
    handleInputChange: handlePostalCodeChange,
    handleInputBlur: handlePostalCodeBlur,
    hasError: postalCodeError,
    setInputState: setPostalCodeValue,
  } = useInput("", (v) => v.trim().length >= 3);

  const {
    value: EORINumber,
    handleInputChange: handleEORINumberChange,
    handleInputBlur: handleEORINumberBlur,
    hasError: EORINumberError,
    setInputState: setEORINumber,
  } = useInput("", (v) => v.length >= 5);

  const [countryCode, setCountryCode] = useState("+380");
  const {
    value: phoneNumberValue,
    handleInputChange: handlePhoneNumberChange,
    handleInputBlur: handlePhoneNumberBlur,
    hasError: phoneError,
    setInputState: setPhoneNumberValue,
  } = useInput("", (val) => /^\d{6,14}$/.test(val));

  const successTimeout = useRef(null);

  useEffect(() => {
    if (deliveryData) {
      setNameValue((p) => ({
        ...p,
        value: deliveryData.delivery_first_name || "",
        error:
          !deliveryData.delivery_first_name ||
          deliveryData.delivery_first_name.trim().length < 2,
      }));

      setSurnameValue((p) => ({
        ...p,
        value: deliveryData.delivery_last_name || "",
        error:
          !deliveryData.delivery_last_name ||
          deliveryData.delivery_last_name.trim().length < 2,
      }));

      setNameCompanyValue((p) => ({
        ...p,
        value: deliveryData.company_name || "",
        error: false,
      }));

      setVATNumValue((p) => ({
        ...p,
        value: deliveryData.id_or_vat_number || "",
        error: false,
      }));

      setCountryValue((p) => ({
        ...p,
        value: deliveryData.delivery_country_region || "",
        error:
          !deliveryData.delivery_country_region ||
          deliveryData.delivery_country_region.trim().length < 2,
      }));

      setCityValue((p) => ({
        ...p,
        value: deliveryData.delivery_city || "",
        error:
          !deliveryData.delivery_city ||
          deliveryData.delivery_city.trim().length < 2,
      }));

      setEmailValue((p) => ({
        ...p,
        value: deliveryData.delivery_email || "",
        error:
          !deliveryData.delivery_email ||
          !/\S+@\S+\.\S+/.test(deliveryData.delivery_email),
      }));

      setAdressValue((p) => ({
        ...p,
        value: deliveryData.delivery_street_address || "",
        error:
          !deliveryData.delivery_street_address ||
          deliveryData.delivery_street_address.trim().length < 2,
      }));

      setHouseValue((p) => ({
        ...p,
        value: deliveryData.delivery_aprt_number || "",
        error:
          !deliveryData.delivery_aprt_number ||
          deliveryData.delivery_aprt_number.trim().length < 1,
      }));

      setPostalCodeValue((p) => ({
        ...p,
        value: deliveryData.delivery_postal_code || "",
        error:
          !deliveryData.delivery_postal_code ||
          deliveryData.delivery_postal_code.trim().length < 2,
      }));

      setEORINumber((p) => ({
        ...p,
        value: deliveryData.eori_number || "",
        error:
          deliveryData.eori_number?.length > 0 &&
          deliveryData.eori_number.length < 5,
      }));

      setCountryCode(deliveryData.delivery_country_code || "+380");

      setPhoneNumberValue((p) => ({
        ...p,
        value: deliveryData.delivery_aprt_number || "",
        error:
          !deliveryData.delivery_aprt_number ||
          !/^\d{6,14}$/.test(deliveryData.delivery_aprt_number),
      }));
    }
  }, [deliveryData]);

  useEffect(() => {
    dispatch(getDeliveryDetailsAction(locale));
  }, [locale]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);

    const data = {
      delivery_first_name: nameValue,
      delivery_last_name: surnameValue,
      delivery_email: emailValue,
      delivery_street_address: adressValue,
      delivery_aprt_number: houseValue,
      delivery_postal_code: postalCodeValue,
      delivery_country_region: countryValue,
      delivery_city: cityValue,
      delivery_country_code: countryCode,
      delivery_phone: phoneNumberValue,
      company_name: nameCompanyValue.trim() || undefined,
      id_or_vat_number: VATNumValue.trim() || undefined,
      eori_number: EORINumber.trim() || undefined,
    };

    Object.keys(data).forEach(
      (key) => data[key] === undefined && delete data[key]
    );

    Object.keys(data).forEach(
      (key) => data[key] === undefined && delete data[key]
    );

    try {
      await dispatch(
        patchDeliveryDetailsAction({
          locale,
          payload: JSON.stringify(data),
        })
      ).unwrap();

      setSuccess(true);

      if (successTimeout.current) clearTimeout(successTimeout.current);
      successTimeout.current = setTimeout(() => {
        setSuccess(false);
      }, 1000);
    } catch (err) {
      setError(t("error"));
      setSuccess(false);
    }
    console.log("Delivery data:", data);
  };

  return (
    <form className="flex flex-col gap-2 text-color " onSubmit={handleSubmit}>
      <div className="bg-[#F5F5F5] p-4 rounded-xl shadow-[0px_2px_10px_rgba(0,0,0,0.1)]">
        <Title className="text-lg font-semibold mb-5">{t("title")}</Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field
            label={t("name")}
            value={nameValue}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            error={nameError}
            name="name"
            placeholder="Anna"
            className="col-span-2 md:col-span-1"
          />
          <Field
            label={t("surname")}
            value={surnameValue}
            onChange={handleSurnameChange}
            onBlur={handleSurnameBlur}
            error={surnameError}
            name="surname"
            placeholder="Kowalski"
            className="col-span-2 md:col-span-1"
          />

          <Field
            label={t("company")}
            value={nameCompanyValue}
            onChange={handleNameCompanyChange}
            onBlur={handleNameCompanyBlur}
            error={nameCompanyError}
            name="name_company"
            placeholder="Beauty Experts Group"
            className="col-span-2"
          />
          <Field
            label={t("vat")}
            value={VATNumValue}
            onChange={VATNumChange}
            onBlur={VATNumBlur}
            error={VATNumError}
            name="VATNum"
            placeholder="PL1234567890"
            className="col-span-2"
          />
          <Field
            label={t("country")}
            value={countryValue}
            onChange={handleCountryChange}
            onBlur={handleCountryBlur}
            error={countryError}
            name="country"
            placeholder="Poland"
            className="col-span-2"
          />
          <Field
            label={t("city")}
            value={cityValue}
            onChange={handleCityChange}
            onBlur={handleCityBlur}
            error={cityError}
            name="country"
            placeholder="Kraków"
            className="col-span-2"
          />
          <Field
            label={t("adress")}
            value={adressValue}
            onChange={handleAdressChange}
            onBlur={handleAdressBlur}
            error={adressError}
            name="adress"
            placeholder="Krakowska Street"
            className="col-span-2 md:col-span-1"
          />
          <Field
            label={t("house")}
            value={houseValue}
            onChange={handleHouseChange}
            onBlur={handleHouseBlur}
            error={houseError}
            name="house"
            placeholder="15A"
            className="col-span-2 md:col-span-1"
          />
          <Field
            label={t("postal")}
            value={postalCodeValue}
            onChange={handlePostalCodeChange}
            onBlur={handlePostalCodeBlur}
            error={postalCodeError}
            name="postal"
            placeholder="30-123"
            className="col-span-2"
          />
          <Field
            label={t("email")}
            value={emailValue}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            error={emailError}
            name="email"
            placeholder="example@email.com"
            className="col-span-2"
          />
          <PhoneInput
            className="w-full col-span-2"
            countryCode={countryCode}
            setCountryCode={setCountryCode}
            phoneNumber={phoneNumberValue}
            handlePhoneNumberChange={handlePhoneNumberChange}
            handlePhoneNumberBlur={handlePhoneNumberBlur}
            phoneNumberError={phoneError}
            styles="col-span-2"
          />
          <Field
            label={t("eori")}
            value={EORINumber}
            onChange={handleEORINumberChange}
            onBlur={handleEORINumberBlur}
            error={EORINumberError}
            name="EORINumber"
            placeholder="PL123456789012"
            className="col-span-2"
          />
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <Button type="submit" className=" w-fit">
        {(success === true && <Check />) || t("save")}
      </Button>
    </form>
  );
}

export default DeliverForm;
