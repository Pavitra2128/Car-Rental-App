"use client";
import CarsFiltersOptions from "@/components/Home/CarsFiltersOptions";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import ToastMsg from "@/components/ToastMsg";
import { BookCreatedFlagContext } from "@/context/BookCreatedFlagContext";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);
  const [sortOrder, setSortOrder] = useState<string>("");
  const [showToastMsg, setShowToastMsg] = useState<boolean>(false);

  useEffect(() => {
    getCarList_();
  }, []);

  useEffect(() => {
    if (showToastMsg) {
      const timer = setTimeout(() => {
        setShowToastMsg(false);
      }, 5000); // 4 seconds

      // Cleanup the timeout when the component unmounts or when showToastMsg changes
      return () => clearTimeout(timer);
    }
  }, [showToastMsg]);

  const getCarList_ = async () => {
    const result: any = await getCarsList();
    setCarsList(result?.carLists);
    setCarsOrgList(result?.carLists);
  };

  const filterCarList = (brand: string) => {
    const filterList = carsOrgList.filter((item: any) => item.carBrand === brand);
    setCarsList(filterList);
  };

  const sortCarList = (order: string, list: any[]) => {
    let sortedList = [...list];
    if (order === "minToMax") {
      sortedList.sort((a, b) => a.price - b.price);
    } else if (order === "maxToMin") {
      sortedList.sort((a, b) => b.price - a.price);
    }
    return sortedList;
  };

  useEffect(() => {
    setCarsList(sortCarList(sortOrder, carsList));
  }, [sortOrder]);

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <BookCreatedFlagContext.Provider value={{ showToastMsg, setShowToastMsg }}>
        <Hero />
        <SearchInput />
        <CarsFiltersOptions
          carsList={carsOrgList}
          setBrand={(value: string) => filterCarList(value)}
          setSortOrder={(value: string) => setSortOrder(value)}
        />
        <CarsList carsList={carsList} />
        {showToastMsg ? <ToastMsg /> : null}
      </BookCreatedFlagContext.Provider>
    </div>
  );
}
