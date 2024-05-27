import React,{useEffect, useState} from 'react';

function CarsFiltersOption({carsList}:any) {
  const [brandList,setBrandList]=useState<any>();
  const BrandSet=new Set();

  useEffect(()=>{
   if(carsList) 
    {
      filterCarList();
    }
  },[carsList])
  const filterCarList=()=>{
    carsList.forEach((element:any)=>{
      BrandSet.add(element.carBrand);
    });
    setBrandList(Array.from(BrandSet));
    console.log(BrandSet)

  }
  return (
    <div className='mt-10 flex items-center justify-between'>
      <div>
        <h2 className='text-[30px] font-bold'>Cars Catalog</h2>
        <h2>Explore our cars you might like</h2>
      </div>
      <div className='flex gap-5'>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected className="font-bold">Price</option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected className="font-bold">Manufacturer</option>
          <option>Honda</option>
          <option>BMW</option>
          <option>Toyota</option>
        </select>
      </div>
    </div>
  );
}

export default CarsFiltersOption;
