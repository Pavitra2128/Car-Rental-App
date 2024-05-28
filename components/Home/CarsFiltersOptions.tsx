import React, { useEffect, useState } from 'react';

function CarsFiltersOptions({ carsList, setBrand, setSortOrder }: any) {
  const [brandList, setBrandList] = useState<string[]>([]);
  const BrandSet = new Set<string>();

  useEffect(() => {
    if (carsList) {
      filterCarList();
    }
  }, [carsList]);

  const filterCarList = () => {
    carsList.forEach((element: any) => {
      BrandSet.add(element.carBrand);
    });
    setBrandList(Array.from(BrandSet));
  };

  return (
    <div className='mt-10 flex items-center justify-between'>
      <div>
        <h2 className='text-[30px] font-bold'>Cars Catalog</h2>
        <h2>Explore our cars you might like</h2>
      </div>
      <div className='flex gap-5'>
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option disabled selected className="font-bold">Price</option>
          <option value="minToMax">Min to Max</option>
          <option value="maxToMin">Max to Min</option>
        </select>
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => setBrand(e.target.value)}
        >
          <option disabled selected className="font-bold">Manufacturer</option>
          {brandList.map((brand: string, index: number) => (
            <option key={index} value={brand}>{brand}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CarsFiltersOptions;
