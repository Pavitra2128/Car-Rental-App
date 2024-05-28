"use client";
import CarsFiltersOptions from "@/components/Home/CarsFiltersOptions";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);
  const [sortOrder, setSortOrder] = useState<string>("");

  useEffect(() => {
    getCarList_();
  }, []);

  const getCarList_ = async () => {
    const result: any = await getCarsList();
    setCarsList(result?.carLists);
    setCarsOrgList(result?.carLists);
  };

  const filterCarList = (brand: string) => {
    const filterList = carsOrgList.filter((item: any) => item.carBrand === brand);
    setCarsList(filterList);
  };

  const sortCarList = (order: string) => {
    let sortedList = [...carsList];
    if (order === "minToMax") {
      sortedList.sort((a, b) => a.price - b.price);
    } else if (order === "maxToMin") {
      sortedList.sort((a, b) => b.price - a.price);
    }
    setCarsList(sortedList);
  };

  useEffect(() => {
    sortCarList(sortOrder);
  }, [sortOrder, carsList]);

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFiltersOptions
        carsList={carsOrgList}
        setBrand={(value: string) => filterCarList(value)}
        setSortOrder={(value: string) => setSortOrder(value)}
      />
      <CarsList carsList={carsList} />
    </div>
  );
}
