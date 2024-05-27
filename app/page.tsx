"use client";
import CarsFiltersOptions from "@/components/Home/CarsFiltersOptions";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect,useState } from "react";

export default function Home() {
  const [carsList,setCarsList]=useState<any>([])
  const [carsOrgList,setCarsOrgList]=useState<any>([])
  useEffect(() =>{
    getCarList_();
  },[]) 
    const getCarList_=async()=>{
    const result:any=await getCarsList();
    setCarsList(result?.carLists)
    setCarsList(result?.carLists);
    }
  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFiltersOptions carsList={carsOrgList}/>
      <CarsList carsList={carsList}/>
    </div>
  );
}